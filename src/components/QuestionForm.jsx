import React, { useContext, useState } from "react";
import { Data } from "../context/DataContext";

const QuestionForm = () => {
  const { questions, setQuestions } = useContext(Data);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title.trim()) {
      alert("Please enter a question title.");
      return;
    }

    if (!category.trim()) {
      alert("Please enter a category.");
      return;
    }

    if (!difficulty.trim()) {
      alert("Please enter a difficulty.");
      return;
    }

    if (!["Easy", "Medium", "Hard"].includes(difficulty.trim())) {
      alert("Difficulty must be Easy, Medium, or Hard.");
      return;
    }

    const newQuestion = {
      id: Date.now(),
      title: title.trim(),
      category: category.trim(),
      difficulty: difficulty.trim(),
      status: "Pending",
    };

    setQuestions([...questions, newQuestion]);

    setTitle("");
    setCategory("");
    setDifficulty("");
    setStatus("");
  };

  return (
    <div className="min-h-screen bg-sky-50 px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Add Interview Question
          </h1>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Add a new question to your interview practice tracker.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm sm:p-7"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            {/* Title */}
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Question Title
              </label>

              <input
                type="text"
                placeholder="e.g. Explain the Virtual DOM"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100"
              />
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Category
              </label>

              <input
                type="text"
                placeholder="e.g. DSA / Technical / Git"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100"
              />
            </div>

            {/* Difficulty */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Difficulty
              </label>

              <input
                type="text"
                placeholder="e.g. Easy / Medium / Hard"
                onChange={(e) => setDifficulty(e.target.value)}
                value={difficulty}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100"
              />
            </div>

            {/* Status */}
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Status
              </label>

              <input
                type="text"
                placeholder="Pending"
                onChange={(e) => setStatus(e.target.value)}
                value={status}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="submit"
              className="w-full rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 sm:w-auto"
            >
              Add Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionForm;