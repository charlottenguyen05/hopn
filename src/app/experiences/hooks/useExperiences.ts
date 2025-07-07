"use client";

import { useState, useMemo, useEffect } from "react";
import data from '../../../../data.json';
import { ExperienceType } from "@/types/Type";

const ITEMS_PER_PAGE = 8;

/** Encapsulates filtering, search and pagination logic for the experiences list. */
export default function useExperiences(itemsPerPage: number = ITEMS_PER_PAGE) {
  // ----- State -----
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  // ----- Derived data -----
  const categories = useMemo(() => {
    return [...new Set(data.map((exp) => exp.category))].sort();
  }, []);

  const filtered = useMemo(() => {
    const term = search.toLowerCase();
    return data.filter((exp: ExperienceType) => {
      const matchesSearch =
        exp.title.toLowerCase().includes(term) ||
        exp.description.toLowerCase().includes(term);
      const matchesCategory = !category || exp.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const paginated = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, page, itemsPerPage]);

  const pageNumbers = useMemo(() => {
    const visible = 5;
    if (totalPages <= visible) return [...Array(totalPages)].map((_, i) => i + 1);

    const half = Math.floor(visible / 2);
    let start = Math.max(1, page - half);
    const end = Math.min(totalPages, start + visible - 1);
    if (end - start < visible - 1) start = Math.max(1, end - visible + 1);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [page, totalPages]);

  // ----- Effects -----
  useEffect(() => setPage(1), [search, category]);

  return {
    // state
    search,
    setSearch,
    category,
    setCategory,
    page,
    setPage,

    // derived
    categories,
    experiences: paginated,
    totalPages,
    pageNumbers,
  } as const;
}