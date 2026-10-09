import React, { useContext } from "react";
import { Data } from "../context/DataContext";

const QuestionCard = ({ question }) => {
  const { questions, setQuestions } = useContext(Data);

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;

    const updatedQuestions = questions.map((item) =>
      item.id === question.id
        ? { ...item, status: newStatus }
        : item
    );

    setQuestions(updatedQuestions);
  };

  return (
    <div className="rounded-xl border border-sky-100 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-md bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-600">
          #{question.id}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            question.difficulty === "Easy"
              ? "bg-emerald-50 text-emerald-600"
              : question.difficulty === "Medium"
              ? "bg-amber-50 text-amber-600"
              : "bg-red-50 text-red-600"
          }`}
        >
          {question.difficulty}
        </span>
      </div>

      {/* Question */}
      <h2 className="mt-4 text-lg font-semibold leading-6 text-gray-900 sm:text-xl">
        {question.title}
      </h2>

      {/* Category */}
      <p className="mt-3 text-sm text-gray-500">
        Category:{" "}
        <span className="font-medium text-sky-600">
          {question.category}
        </span>
      </p>

      {/* Status */}
      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="text-sm font-medium text-gray-500">
          Status
        </span>

        <select
          value={question.status}
          onChange={handleStatusChange}
          className={`rounded-lg border px-3 py-1.5 text-xs font-semibold outline-none transition ${
            question.status === "Completed"
              ? "border-emerald-200 bg-emerald-50 text-emerald-600"
              : question.status === "In Progress"
              ? "border-blue-200 bg-blue-50 text-blue-600"
              : "border-amber-200 bg-amber-50 text-amber-600"
          }`}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default QuestionCard;