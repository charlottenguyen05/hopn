"use client";
import useExperiences from "./hooks/useExperiences";
import SearchAndFilter from "./components/SearchAndFilter";
import ExperiencesGrid from "./components/ExperiencesGrid";
import Pagination from "./components/Pagination";

export default function ExperiencesPage() {
  const {
    search,
    setSearch,
    category,
    setCategory,
    page,
    setPage,
    categories,
    experiences,
    totalPages,
    pageNumbers,
  } = useExperiences();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">

        <SearchAndFilter
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          categories={categories}
        />

        <ExperiencesGrid experiences={experiences} />

        <Pagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          pageNumbers={pageNumbers}
        />
      </div>
    </div>
  );
}
