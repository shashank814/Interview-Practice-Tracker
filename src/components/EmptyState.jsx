import React from "react";
import { FileQuestion, Plus } from "lucide-react";
import { useNavigate } from "react-router";

const EmptyState = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-sky-100 bg-white px-5 py-12 shadow-sm mt-5">
      <div className="max-w-md text-center">

        {/* Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-50">
          <FileQuestion size={32} className="text-sky-500" />
        </div>

        {/* Heading */}
        <h2 className="mt-5 text-xl font-bold text-gray-900 sm:text-2xl">
          No Questions Added Yet
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
          Start building your interview practice list by adding your first
          question.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/questions")}
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600 hover:shadow-md"
        >
          <Plus size={18} />
          Add Question
        </button>

      </div>
    </div>
  );
};

export default EmptyState;