"use client";

interface Props {
  page: number;
  setPage: (p: number) => void;
  totalPages: number;
  pageNumbers: number[];
}

export default function Pagination({ page, setPage, totalPages, pageNumbers }: Props) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center space-x-2">
      {/* Previous */}
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className={`px-3 py-2 rounded-lg transition-colors ${
          page === 1
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
        }`}
      >
        Previous
      </button>

      {/* Numbers */}
      {pageNumbers.map((n) => (
        <button
          key={n}
          onClick={() => setPage(n)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            page === n
              ? "bg-indigo-500 text-white"
              : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
          }`}
        >
          {n}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className={`px-3 py-2 rounded-lg transition-colors ${
          page === totalPages
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
        }`}
      >
        Next
      </button>
    </div>
  );
}