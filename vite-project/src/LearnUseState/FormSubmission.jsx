import React from "react";
import "/src/LearnUseState/FormSubmission.css";
const FormSubmission = () => {
  return (
    <>
      <div id="header">
        <div className="container">
          <div className="firstContainer">tectsection</div>
          <div className="secondContainer">
            <form action="">
              <h1>Sign up</h1>
              <div className="inputSection">
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />

                <button type="submit">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSubmission;
