import React, { useState, useEffect } from "react";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [results, setresults] = useState("");
  const [meaning, setmeaning] = useState(false);
  const [Error, setError] = useState(false);

  const handleLogin = () => {
    setError(false);
    setmeaning(false);
  };

  const handleWordEnter = () => {
    setmeaning(true);
    setError(false);
  };

  async function dictionary() {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchKey}`
      );
      const data = await response.json();
      setresults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const onEnterKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      await dictionary();
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
          <form>
            <input
              type="search"
              onKeyDown={onEnterKeyDown}
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              placeholder="Searching Something?"
            ></input>
            <p id="para">
              Type a word and press enter to get meaning pronounication,
              <br />
              examples, synonyms, and more
            </p>
          </form>
          <img className="img" width={350} src="images/1.jpg" />
          <p className="imgq">Seems kind of empty here!</p>;
        </div>
      ) : !meaning && Error ? (
        <div>
          <h1>
            {" "}
            Sorry we couldn't find definitions for the word you were looking
            for. click below to search a new word{" "}
          </h1>

          <button className={"button"} onClick={handleLogin}>
            clik here
          </button>
        </div>
      ) : (
        meaning &&
        !Error &&
        results &&
        results[0]?.word && (
          <div className="final">
            <form>
              <input
                type="search"
                onKeyDown={onEnterKeyDown}
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                placeholder="Searching Something?"
              ></input>
            </form>

            <div className="header">
              {<h2>{results[0]?.word}</h2>}

              <div className="hr"> </div>
            </div>

            <div className="one">
              <div className="heading">{<h2>{results[0]?.word}</h2>}</div>

              <div className="heading">
                {results && (
                  <div>
                    <p>Pronouciation: </p>
                    <br></br>
                    <p>
                      {results[0]?.phonetics.map((x) => {
                        return <li> {x.text}</li>;
                      })}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="two">
              <div className="heading">
                {results && <h2>Part Of Speech</h2>}
              </div>

              <div className="ul">
                {results[0].meanings.map((x, index) => {
                  return <li key={index}> {x.partOfSpeech}</li>;
                })}
              </div>
            </div>

            <div className="three">
              <div className="heading">{results && <h2>Definitions</h2>}</div>

              <div className="ul">
                {/*how to use map function to fetch from array */}
                <ul>
                  {results[0].meanings.map((x, index) => {
                    return x.definitions.map((obj, subIndex) => {
                      return <li key={subIndex}>{obj.definition}</li>;
                    });
                  })}
                </ul>
              </div>
            </div>
          </div>
        )
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
