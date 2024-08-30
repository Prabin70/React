import React from "react";

const LearnForm = () => {
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("I'm a form");
  };

  return (
    <div className="mainContainer">
      <div className="sectionone">
        <div className="imageSection">
          <img src={"/src/assets/vite.png"} alt="" />
        </div>
        <div className="textSction">
          <h1>
            Are you new in <span>Vite</span>
          </h1>
          <p>Get connected with us and start your journey with us...</p>
          <p>
            Effortlessly bring your React project to life by simply letting your
            vision shine through each line of code.
          </p>
        </div>
      </div>
      <div className="another">
        <form onSubmit={handleSubmit} action="form-submission">
          <div className="weight">
            <h2> Sign up</h2>
          </div>
          <div>
            <label>Name</label>
            <input type="text" required />
          </div>
          <div>
            <label>Email</label>
            <input type="email" required />
          </div>
          <div>
            <label>Password</label>
            <input type="password" required />
          </div>
          {/* <div>
            <label>Gender</label>
            <input type="radio" />
          </div>
          <div>
            <label>Is married</label>
            <input type="checkbox" />
          </div> */}
          <div className="button">
            <button type="submit">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LearnForm;
