import React, { useState } from "react";

const Form = ({ onEnterKeyDown }) => {
  const [searchKey, setSearchKey] = useState("");

  const handleInputChange = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="search"
          onKeyDown={(e) => {
            onEnterKeyDown(e);
          }}
          value={searchKey}
          onChange={(e) => handleInputChange(e)}
          placeholder="Searching Something?"
        ></input>
        
      </form>
    </div>
  );
};

export default Form;
