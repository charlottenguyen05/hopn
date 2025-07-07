import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const BackNavigation = ({ goto, content }: { goto: string; content: string }) => {
  return (
    <Link
      href={`/${goto}`}
      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors group"
    >
      <ChevronLeftIcon className="size-6 mr-2 group-hover:-translate-x-1 transition-transform" />
      {content}
    </Link>
  );
};

export default BackNavigation;
