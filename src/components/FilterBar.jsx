import React from "react";

const FilterBar = ({
  category,
  setCategory,
  difficulty,
  setDifficulty,
  status,
  setStatus,
  search,
  setSearch,
}) => {
  return (
    <div className="mt-8 w-full">
      <div className="flex flex-col gap-4 rounded-xl border border-sky-100 bg-white p-4 shadow-sm sm:flex-row sm:flex-wrap sm:items-end">

        {/* Search */}
        <div className="w-full sm:flex-1">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Search
          </label>

          <input
            type="text"
            placeholder="Search Questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none transition focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100"
          />
        </div>

        {/* Category */}
        <div className="w-full sm:w-40">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
          >
            <option value="All">All</option>
            <option value="DSA">DSA</option>
            <option value="Technical">Technical</option>
            <option value="Git">Git</option>
          </select>
        </div>

        {/* Difficulty */}
        <div className="w-full sm:w-40">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Difficulty
          </label>

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
          >
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Status */}
        <div className="w-full sm:w-40">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Status
          </label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default FilterBar;