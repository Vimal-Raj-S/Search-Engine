import React, { useContext, createContext, useState } from "react";
const ResultContext = createContext();
const baseurl = "https://google-search3.p.rapidapi.com/api/v1";

function ResultContextProvider({ children }) {
  const [Result, setResult] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [SearchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setisLoading(true);

    const response = await fetch(`${baseurl}${type}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "3d3f8f1242mshde9a3246345e897p192626jsne767230e8051",
      },
    });

    const data = await response.json();
    setResult(data);
    console.log(data);
    setisLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, setSearchTerm, SearchTerm, isLoading, Result }}
    >
      {children}
    </ResultContext.Provider>
  );
}

export default ResultContextProvider;

export const useResultcontext = () => useContext(ResultContext);
