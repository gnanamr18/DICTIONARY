import React from 'react'
import Form from '../components/Form';

const Result = ({onEnterKeyDown, results}) => {
  return (
    <div className="final">
            <Form onEnterKeyDown={onEnterKeyDown}/>

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
}

export default Result
