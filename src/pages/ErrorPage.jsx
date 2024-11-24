import React from 'react'

const ErrorPage = ({serachWord, handleLogin}) => {
  return (
    <div>
          <h1>
            {" "}
            Sorry we couldn't find definitions for the {serachWord} you were
            looking for. click below to search a new word{" "}
          </h1>

          <button className={"button"} onClick={handleLogin}>
            clik here
          </button>
        </div>
  )
}

export default ErrorPage
