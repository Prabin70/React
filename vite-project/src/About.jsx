import React from "react";

const About = (props) => {
  return (
    <div>
      <p>
        This is a {props.name} chor and he is {props.age} years old
      </p>
    </div>
  );
};

export default About;
