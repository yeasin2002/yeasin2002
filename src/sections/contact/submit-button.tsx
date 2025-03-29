"use client";

import { ArrowRight, Loader2 } from "lucide-react";

export function SubmitButton() {
  const pending = false;

  return (
    <button
      type="submit"
      disabled={pending}
      className="btn BoldStockBtn  inline-flex items-center justify-center gap-2 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:hover:bg-gray-200 w-full sm:w-auto"
    >
      {pending ? (
        <Loader2 className="w-6 h-6 animate-spin" />
      ) : (
        <>
          <span>Send Message</span>
          <ArrowRight className="w-6 h-6" />
        </>
      )}
    </button>
  );
}
