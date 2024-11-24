import React from 'react'
import { Headings } from '../Data/Heading';

const ParaTwo = ({results}) => {
  return (
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
  )
}

export default ParaTwo
