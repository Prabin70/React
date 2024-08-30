import React, { useState } from "react";

const LearnForm1 = () => {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [address, setAddress] = useState("");
  let [age, setAge] = useState(0);
  let [country, setCountry] = useState("china");
  let [gender, setGender] = useState("male");
  let [isMarried, setIsMarried] = useState(false);
  let [description, setDescription] = useState();

  let genders = [
    { label: "Male", value: "male" },
    { label: "female", value: "female" },
    { label: "other", value: "other" },
  ];

  let countries = [
    { label: "Nepal", value: "nepal" },
    { label: "China", value: "china" },
    { label: "India", value: "india" },
    { label: "Usa", value: "usa" },
  ];

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let data = {
            fullName: fullName,
            email: email,
            address: address,
            age: age,
            country: country,
            gender: gender,
            isMarried: isMarried,
            description: description,
          };
          console.log(data);
        }}
      >
        <div>
          <label htmlFor="fullname">Full Name</label>
          <br></br>
          <input
            type="text"
            id="fullname"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label> <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <br></br>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <br></br>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <br></br>
          <select
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            {countries.map((v, i) => {
              return <option key={i}>{v.label}</option>;
            })}
          </select>
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <br></br>
          {genders.map((item, i) => {
            return (
              <span key={i}>
                <label htmlFor={item.value}>{item.label}</label>
                <input
                  type="radio"
                  id={item.value}
                  value={item.value}
                  checked={gender === item.value}
                  onChange={(e) => {
                    setGender(e.target.checked);
                  }}
                />
              </span>
            );
          })}
        </div>

        <div>
          <label htmlFor="isMarried">isMarried</label>
          <br></br>
          <input
            type="checkbox"
            id="ismarried"
            checked={isMarried === true}
            onChange={(e) => {
              setIsMarried(e.target.checked);
            }}
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <br></br>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LearnForm1;
