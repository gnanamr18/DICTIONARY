import React from 'react'

const ParaThree = ({results}) => {
  return (
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
  )
}

export default ParaThree
