import React from 'react'

const Header = ({results}) => {
  return (
    <div className="header">
              {<h2>{results[0]?.word}</h2>}

              <div className="hr"> </div>
            </div>
  )
}

export default Header
