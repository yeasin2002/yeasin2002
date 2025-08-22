// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends React.ComponentProps<"input"> {}

export function SearchBar({ ...props }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search blog posts..."
          // value={query}
          // onChange={(e) => {
          //   setQuery(e.target.value);
          //   onSearch(e.target.value);
          // }}
          className="w-full px-6 py-4 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          {...props}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </div>
    </div>
  );
}
