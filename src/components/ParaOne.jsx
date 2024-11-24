import React from 'react'

const ParaOne = ({results}) => {
  return (
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
  )
}

export default ParaOne
