import React, { useContext, useState } from "react";
import notes from "../assets/notes.png";
import {
  CircleCheck,
  CircleDashedCheck,
  RotateCwFadingClock,
  StickyNote,
} from "lucide-react";
import QuestionCard from "../components/QuestionCard";
import EmptyState from "../components/EmptyState";
import { Data } from "../context/DataContext";
import FilterBar from "../components/FilterBar";

const Dashboard = () => {
  const { questions } = useContext(Data);

  // Filter states
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [status, setStatus] = useState("All");
  const [search, setSearch] = useState("");

  // Statistics
  const completed = questions.filter(
    (val) => val.status === "Completed"
  );

  const progress =
    questions.length > 0
      ? Math.round((completed.length / questions.length) * 100)
      : 0;

  const pending = questions.filter(
    (val) => val.status === "Pending"
  );

  // Apply all filters
  const filteredQuestions = questions.filter((question) => {
    const categoryMatch =
      category === "All" || question.category === category;

    const difficultyMatch =
      difficulty === "All" || question.difficulty === difficulty;

    const statusMatch =
      status === "All" || question.status === status;

    const searchMatch = question.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return (
      categoryMatch &&
      difficultyMatch &&
      statusMatch &&
      searchMatch
    );
  });

  return (
    <div className="min-h-screen bg-sky-50 px-4 py-5 sm:px-6 sm:py-6 md:px-8 lg:px-10 lg:py-8">

      {/* Hero Section */}
      <div className="mt-6 flex flex-col gap-6 rounded-2xl bg-white p-5 shadow-sm sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div>
          <p className="mb-2 text-sm font-medium text-sky-600">
            Interview Preparation
          </p>

          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            Hello 👋
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            Track your interview preparation progress. Add your questions and
            update their status to stay on track.
          </p>
        </div>

        <div className="flex justify-center sm:justify-end">
          <img
            src={notes}
            alt="note"
            className="w-24 sm:w-28 md:w-32"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">

        {/* Total Questions */}
        <div className="flex items-center gap-4 rounded-xl border border-sky-100 bg-sky-100/70 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-5">
          <div className="rounded-lg bg-sky-500 p-3 text-white">
            <StickyNote size={22} />
          </div>

          <div>
            <p className="text-sm font-medium text-sky-700">
              Total Questions
            </p>

            <p className="mt-1 text-xl font-bold text-gray-900 sm:text-2xl">
              {questions.length}
            </p>
          </div>
        </div>

        {/* Completed */}
        <div className="flex items-center gap-4 rounded-xl border border-emerald-100 bg-emerald-50 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-5">
          <div className="rounded-lg bg-emerald-500 p-3 text-white">
            <CircleCheck size={22} />
          </div>

          <div>
            <p className="text-sm font-medium text-emerald-700">
              Completed
            </p>

            <p className="mt-1 text-xl font-bold text-gray-900 sm:text-2xl">
              {completed.length}
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-4 rounded-xl border border-violet-100 bg-violet-50 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-5">
          <div className="rounded-lg bg-violet-500 p-3 text-white">
            <CircleDashedCheck size={22} />
          </div>

          <div>
            <p className="text-sm font-medium text-violet-700">
              Progress
            </p>

            <p className="mt-1 text-xl font-bold text-gray-900 sm:text-2xl">
              {progress}%
            </p>
          </div>
        </div>

        {/* Pending */}
        <div className="flex items-center gap-4 rounded-xl border border-amber-100 bg-amber-50 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-5">
          <div className="rounded-lg bg-amber-500 p-3 text-white">
            <RotateCwFadingClock size={22} />
          </div>

          <div>
            <p className="text-sm font-medium text-amber-700">
              Pending Questions
            </p>

            <p className="mt-1 text-xl font-bold text-gray-900 sm:text-2xl">
              {pending.length}
            </p>
          </div>
        </div>
      </div>

      {/* Empty State */}
      {questions.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          {/* Search & Filter */}
          <FilterBar
            category={category}
            setCategory={setCategory}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            status={status}
            setStatus={setStatus}
            search={search}
            setSearch={setSearch}
          />

          {/* Questions */}
          <div className="mt-8 sm:mt-10">

            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  Recent Questions
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Keep practicing and track your progress.
                </p>
              </div>

              <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-600">
                {filteredQuestions.length} Questions
              </span>
            </div>

            {/* Question Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredQuestions.map((elem) => (
                <QuestionCard
                  key={elem.id}
                  question={elem}
                />
              ))}
            </div>

          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;