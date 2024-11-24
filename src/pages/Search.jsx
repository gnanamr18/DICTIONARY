import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import { dictionary } from "../API/api";
import Result from "./Result";
import Image from "../components/Image";
import ErrorPage from "./ErrorPage";

const Search = () => {
  const [results, setresults] = useState("");
  const [meaning, setmeaning] = useState(false);
  const [Error, setError] = useState(false);
  let serachWord;

  const handleLogin = () => {
    setError(false);
    setmeaning(false);
  };

  const handleWordEnter = () => {
    setmeaning(true);
    setError(false);
  };

  async function apiCall(serachWord) {
    const response = await dictionary(serachWord);
    console.log(response);
    const data = response;
    setresults(data);
  }

  const onEnterKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      serachWord = e.target.value;
      apiCall(serachWord);
      console.log("hi");
    }
  };

  useEffect(() => {
    if (results.title === "No Definitions Found") {
      setmeaning(false);
      setError(true);
      console.log("hi");
    } else if (results) {
      handleWordEnter();
    }
  }, [results, results?.title]);

  console.log(meaning);
  console.log(Error);

  return (
    <div>
      {!meaning && !Error ? (
        <div className="firstDisplay">
        <Form onEnterKeyDown={onEnterKeyDown} />
        <Image/>
        </div>
      ) : !meaning && Error ? (
        <ErrorPage serachWord={serachWord} handleLogin={handleLogin} />
      ) : (
        meaning &&
        !Error &&
        results &&
        results[0]?.word && <Result onEnterKeyDown={onEnterKeyDown} results={results} />
      )}
    </div>
  );
};

export default Search;

// state1 - usestate variable (true / false) -
// true - work meaning
// false - blank screen
// state 2 - usestate variable (true / false) -
// true - word correct (has correct meaning)
// false - word wrong

// state variable - object {obj1 : true, obj2: true}
// setstate ((prev))
