'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { experiences } from '@/config/Experience';
import {
  type ExperienceRow,
  mapExperienceRowToRecord,
  mapExperienceToPayload,
} from '@/lib/experience';
import { createClient } from '@/lib/supabase/client';
import { allTechnologyNames } from '@/lib/technologies';
import {
  Calendar,
  Edit2,
  ExternalLink,
  FileDown,
  Info,
  Loader2,
  MapPin,
  Plus,
  Trash2,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

type ExperienceFormState = {
  company: string;
  position: string;
  location: string;
  image: string;
  startDate: string;
  endDate: string;
  website: string;
  x: string;
  linkedin: string;
  github: string;
  isCurrent: boolean;
  isBlur: boolean;
  description: string[];
  selectedTechs: string[];
};

const emptyForm = (): ExperienceFormState => ({
  company: '',
  position: '',
  location: '',
  image: '',
  startDate: '',
  endDate: '',
  website: '',
  x: '',
  linkedin: '',
  github: '',
  isCurrent: false,
  isBlur: false,
  description: [''],
  selectedTechs: [],
});

export default function ExperiencesPage() {
  const [items, setItems] = useState<ExperienceRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [saving, setSaving] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<ExperienceFormState>(emptyForm());

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    setLoading(true);
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('experiences')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) {
        toast.error('Failed to load experiences from database.');
        console.error(error);
        setItems([]);
        return;
      }

      setItems((data ?? []).map(mapExperienceRowToRecord));
    } catch (err) {
      console.error(err);
      toast.error('Failed to load experiences from database.');
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  const openAddModal = () => {
    setEditingId(null);
    setForm(emptyForm());
    setIsModalOpen(true);
  };

  const openEditModal = (item: ExperienceRow) => {
    setEditingId(item.id || null);
    setForm({
      company: item.company,
      position: item.position,
      location: item.location,
      image: item.image,
      startDate: item.start_date,
      endDate: item.end_date,
      website: item.website || '',
      x: item.x || '',
      linkedin: item.linkedin || '',
      github: item.github || '',
      isCurrent: item.is_current,
      isBlur: item.is_blur || false,
      description: item.description.length > 0 ? [...item.description] : [''],
      selectedTechs: item.technologies || [],
    });
    setIsModalOpen(true);
  };

  const updateForm = <K extends keyof ExperienceFormState>(
    key: K,
    value: ExperienceFormState[K],
  ) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const handleAddDescriptionLine = () => {
    setForm((current) => ({
      ...current,
      description: [...current.description, ''],
    }));
  };

  const handleRemoveDescriptionLine = (index: number) => {
    setForm((current) => {
      const updated = current.description.filter(
        (_, currentIndex) => currentIndex !== index,
      );
      return {
        ...current,
        description: updated.length === 0 ? [''] : updated,
      };
    });
  };

  const handleDescriptionChange = (index: number, value: string) => {
    setForm((current) => {
      const updated = [...current.description];
      updated[index] = value;
      return {
        ...current,
        description: updated,
      };
    });
  };

  const toggleTechnology = (techName: string) => {
    setForm((current) => ({
      ...current,
      selectedTechs: current.selectedTechs.includes(techName)
        ? current.selectedTechs.filter((technology) => technology !== techName)
        : [...current.selectedTechs, techName],
    }));
  };

  const handleSeed = async () => {
    setSeeding(true);
    try {
      const supabase = createClient();
      const payload = experiences.map((experience, index) =>
        mapExperienceToPayload(experience, index),
      );

      const { error } = await supabase.from('experiences').insert(payload);

      if (error) {
        toast.error('Error importing experiences: ' + error.message);
        return;
      }

      toast.success('Successfully imported all static experiences!');
      await fetchExperiences();
    } catch (err: any) {
      toast.error('Import failed: ' + err.message);
    } finally {
      setSeeding(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this experience?')) {
      return;
    }

    try {
      const supabase = createClient();
      const { error } = await supabase
        .from('experiences')
        .delete()
        .eq('id', id);

      if (error) {
        toast.error('Failed to delete: ' + error.message);
        return;
      }

      toast.success('Experience deleted successfully!');
      setItems((current) => current.filter((item) => item.id !== id));
    } catch (err: any) {
      toast.error('Delete failed: ' + err.message);
    }
  };

  const handleSave = async (event: React.FormEvent) => {
    event.preventDefault();

    if (
      !form.company.trim() ||
      !form.position.trim() ||
      !form.location.trim() ||
      !form.startDate.trim() ||
      (!form.isCurrent && !form.endDate.trim())
    ) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setSaving(true);

    const cleanedDescription = form.description
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    const sortOrder = editingId
      ? (items.find((item) => item.id === editingId)?.sort_order ?? 0)
      : items.length;

    const record = {
      company: form.company.trim(),
      position: form.position.trim(),
      location: form.location.trim(),
      image: form.image.trim() || '/company/placeholder.png',
      description:
        cleanedDescription.length > 0
          ? cleanedDescription
          : ['Completed daily operational tasks.'],
      start_date: form.startDate.trim(),
      end_date: form.isCurrent ? 'Present' : form.endDate.trim(),
      website: form.website.trim(),
      x: form.x.trim() || null,
      linkedin: form.linkedin.trim() || null,
      github: form.github.trim() || null,
      technologies: form.selectedTechs,
      is_current: form.isCurrent,
      is_blur: form.isBlur,
      sort_order: sortOrder,
    };

    try {
      const supabase = createClient();

      if (editingId) {
        const { error } = await supabase
          .from('experiences')
          .update(record)
          .eq('id', editingId);

        if (error) {
          toast.error('Update failed: ' + error.message);
          return;
        }

        toast.success('Experience updated successfully!');
      } else {
        const { error } = await supabase.from('experiences').insert([record]);

        if (error) {
          toast.error('Save failed: ' + error.message);
          return;
        }

        toast.success('Experience added successfully!');
      }

      setIsModalOpen(false);
      await fetchExperiences();
    } catch (err: any) {
      toast.error('Save failed: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-xs dark:border-neutral-800 dark:bg-neutral-900 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Work Experiences
          </h1>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            Manage your employment history, role details, links, and
            technologies.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {items.length === 0 && !loading && (
            <Button
              variant="outline"
              disabled={seeding}
              onClick={handleSeed}
              className="flex h-10 items-center gap-2 rounded-xl border-neutral-200 dark:border-neutral-800"
            >
              {seeding ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <FileDown className="h-4 w-4" />
              )}
              Import from Local Config
            </Button>
          )}

          <Button
            onClick={openAddModal}
            className="flex h-10 items-center gap-2 rounded-xl bg-blue-600 font-semibold text-white hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            Add Experience
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="flex h-64 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      ) : items.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-neutral-300 p-12 text-center dark:border-neutral-800">
          <Info className="mx-auto h-12 w-12 text-neutral-400 dark:text-neutral-500" />
          <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
            No experiences found
          </h3>
          <p className="mx-auto mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-400">
            Your database experiences table is empty. You can add one manually
            or seed it from your static config.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.company}
                      className="h-12 w-12 rounded-xl border border-neutral-100 object-cover dark:border-neutral-800"
                    />
                  )}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
                      {item.company}
                    </h3>
                    <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                      {item.position}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-500">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.start_date} -{' '}
                    {item.is_current ? 'Present' : item.end_date}
                  </span>
                  {item.website && (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Website
                    </a>
                  )}
                </div>

                <div className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {item.description.map((line, index) => (
                    <p key={index} className="line-clamp-2">
                      • {line}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg bg-neutral-100 px-2 py-0.5 text-xs font-semibold text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-2 border-t border-neutral-100 pt-4 dark:border-neutral-800">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openEditModal(item)}
                  className="flex h-9 items-center gap-1.5 rounded-xl"
                >
                  <Edit2 className="h-3.5 w-3.5" />
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(item.id!)}
                  className="flex h-9 items-center gap-1.5 rounded-xl"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-neutral-950/40 p-4 backdrop-blur-xs">
          <div className="my-8 flex max-h-[90vh] w-full max-w-2xl flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
            <div className="flex shrink-0 items-center justify-between border-b border-neutral-100 pb-4 dark:border-neutral-800">
              <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                {editingId ? 'Edit Experience' : 'Add Experience'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form
              onSubmit={handleSave}
              className="flex-1 space-y-6 overflow-y-auto py-4 pr-2"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="form-company"
                    className="text-sm font-semibold"
                  >
                    Company Name<span className="ml-0.5 text-red-500">*</span>
                  </Label>
                  <Input
                    id="form-company"
                    value={form.company}
                    onChange={(event) =>
                      updateForm('company', event.target.value)
                    }
                    required
                    className="rounded-xl"
                    placeholder="e.g. Google"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="form-position"
                    className="text-sm font-semibold"
                  >
                    Position<span className="ml-0.5 text-red-500">*</span>
                  </Label>
                  <Input
                    id="form-position"
                    value={form.position}
                    onChange={(event) =>
                      updateForm('position', event.target.value)
                    }
                    required
                    className="rounded-xl"
                    placeholder="e.g. Senior Frontend Developer"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="form-location"
                    className="text-sm font-semibold"
                  >
                    Location<span className="ml-0.5 text-red-500">*</span>
                  </Label>
                  <Input
                    id="form-location"
                    value={form.location}
                    onChange={(event) =>
                      updateForm('location', event.target.value)
                    }
                    required
                    className="rounded-xl"
                    placeholder="e.g. Remote / San Francisco, CA"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="form-image" className="text-sm font-semibold">
                    Image/Logo Path
                    <span className="ml-0.5 text-red-500">*</span>
                  </Label>
                  <Input
                    id="form-image"
                    value={form.image}
                    onChange={(event) =>
                      updateForm('image', event.target.value)
                    }
                    required
                    className="rounded-xl"
                    placeholder="e.g. /company/google.png"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="form-start-date"
                    className="text-sm font-semibold"
                  >
                    Start Date<span className="ml-0.5 text-red-500">*</span>
                  </Label>
                  <Input
                    id="form-start-date"
                    value={form.startDate}
                    onChange={(event) =>
                      updateForm('startDate', event.target.value)
                    }
                    required
                    className="rounded-xl"
                    placeholder="e.g. Jul 2025"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="form-end-date"
                    className="text-sm font-semibold"
                  >
                    End Date
                    {!form.isCurrent && (
                      <span className="ml-0.5 text-red-500">*</span>
                    )}
                  </Label>
                  <Input
                    id="form-end-date"
                    value={form.endDate}
                    onChange={(event) =>
                      updateForm('endDate', event.target.value)
                    }
                    disabled={form.isCurrent}
                    required={!form.isCurrent}
                    className="rounded-xl"
                    placeholder="e.g. Present / Dec 2026"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="form-website"
                    className="text-sm font-semibold"
                  >
                    Website URL
                  </Label>
                  <Input
                    id="form-website"
                    type="url"
                    value={form.website}
                    onChange={(event) =>
                      updateForm('website', event.target.value)
                    }
                    className="rounded-xl"
                    placeholder="e.g. https://google.com"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="form-x" className="text-sm font-semibold">
                    X URL
                  </Label>
                  <Input
                    id="form-x"
                    type="url"
                    value={form.x}
                    onChange={(event) => updateForm('x', event.target.value)}
                    className="rounded-xl"
                    placeholder="e.g. https://x.com/company"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="form-linkedin"
                    className="text-sm font-semibold"
                  >
                    LinkedIn URL
                  </Label>
                  <Input
                    id="form-linkedin"
                    type="url"
                    value={form.linkedin}
                    onChange={(event) =>
                      updateForm('linkedin', event.target.value)
                    }
                    className="rounded-xl"
                    placeholder="e.g. https://linkedin.com/company/..."
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="form-github"
                    className="text-sm font-semibold"
                  >
                    GitHub URL
                  </Label>
                  <Input
                    id="form-github"
                    type="url"
                    value={form.github}
                    onChange={(event) =>
                      updateForm('github', event.target.value)
                    }
                    className="rounded-xl"
                    placeholder="e.g. https://github.com/org"
                  />
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="form-current"
                    checked={form.isCurrent}
                    onCheckedChange={(checked) =>
                      updateForm('isCurrent', !!checked)
                    }
                  />
                  <Label
                    htmlFor="form-current"
                    className="select-none text-sm font-semibold hover:cursor-pointer"
                  >
                    Currently Working Here
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="form-blur"
                    checked={form.isBlur}
                    onCheckedChange={(checked) =>
                      updateForm('isBlur', !!checked)
                    }
                  />
                  <Label
                    htmlFor="form-blur"
                    className="select-none text-sm font-semibold hover:cursor-pointer"
                  >
                    Hide/Blur Company Name
                  </Label>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-semibold">
                    Description Bullet Points
                  </Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleAddDescriptionLine}
                    className="flex h-8 items-center gap-1 rounded-xl"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    Add Bullet
                  </Button>
                </div>

                <div className="space-y-2">
                  {form.description.map((line, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input
                        value={line}
                        onChange={(event) =>
                          handleDescriptionChange(index, event.target.value)
                        }
                        placeholder={`Bullet ${index + 1}`}
                        className="rounded-xl"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => handleRemoveDescriptionLine(index)}
                        disabled={form.description.length === 1}
                        className="size-9 shrink-0 rounded-xl"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-semibold">
                  Technologies Used
                </Label>
                <div className="max-h-48 overflow-y-auto rounded-xl border border-neutral-200 bg-neutral-50/50 p-3 dark:border-neutral-800 dark:bg-neutral-900/50">
                  <div className="flex flex-wrap gap-2">
                    {allTechnologyNames.map((tech) => {
                      const isSelected = form.selectedTechs.includes(tech);

                      return (
                        <button
                          key={tech}
                          type="button"
                          onClick={() => toggleTechnology(tech)}
                          className={`rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-all ${
                            isSelected
                              ? 'border-blue-600 bg-blue-600 text-white'
                              : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
                          }`}
                        >
                          {tech}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 border-t border-neutral-100 pt-4 dark:border-neutral-800">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                  className="h-11 rounded-xl"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={saving}
                  className="flex h-11 items-center gap-2 rounded-xl bg-blue-600 font-semibold text-white hover:bg-blue-700"
                >
                  {saving ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    'Save Experience'
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
