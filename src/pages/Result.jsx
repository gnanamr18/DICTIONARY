import React from 'react'
import Form from '../components/Form';
import Header from '../components/Header';
import ParaOne from '../components/ParaOne';
import ParaTwo from '../components/ParaTwo';
import ParaThree from '../components/ParaThree';


const Result = ({onEnterKeyDown, results}) => {
  return (
    <div className="final">
            <Form onEnterKeyDown={onEnterKeyDown}/>

            <Header results={results}/>

            <ParaOne results={results}/>
          
            <ParaTwo results={results}/>

            <ParaThree results={results}/>
            
          </div>
  )
}

export default Result
