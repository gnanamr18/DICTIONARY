import React from "react";

const Image = () => {
  return (
    <div>
      <p id="para">
        Type a word and press enter to get meaning pronounication,
        <br />
        examples, synonyms, and more
      </p>
      <img className="img" width={350} src="images/1.jpg" />
      <p className="imgq">Seems kind of empty here!</p>;
    </div>
  );
};

export default Image;
