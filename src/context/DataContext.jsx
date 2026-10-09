import { createContext, useEffect, useState } from "react";

export const Data = createContext();

export const DataConextProvider = ({ children }) => {
  const [questions, setQuestions] = useState(() => {
    const savedQuestions = localStorage.getItem("questions");

    if (savedQuestions) {
      return JSON.parse(savedQuestions);
    }

    return null;
  });

  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  return <Data.Provider value={{
    questions, setQuestions
  }}>{children}</Data.Provider>;
};
