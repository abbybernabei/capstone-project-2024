import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/index";
import "./register.css";

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const registerUserToken = await register(
        firstName,
        lastName,
        email,
        username,
        password,
        city,
        street,
        number,
        zipcode,
        lat,
        long,
        phone
      );

      setFirstName("");
      setLastName("");
      setEmail("");
      setUsername("");
      setPassword("");
      setCity("");
      setStreet("");
      setNumber("");
      setZipcode("");
      setLat("");
      setLong("");
      setPhone("");

      clearFormFields();

      navigate("/");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  }

  return (
    <div className="body">
      <div className="container-reg">
        <h2 className="heading">Registration Form</h2>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div className="column">
            <div className="input-box">
              <input
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input-box">
              <input
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-box">
            <h3>Address</h3>
            <input
              placeholder="Street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <div className="input-box">
              <input
                placeholder="Apt Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="column">
              <div className="input-box">
                <input
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="input-box">
                <input
                  placeholder="Zipcode"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                />
              </div>
            </div>
            <div className="column">
              <div className="input-box">
                <input
                  placeholder="Latitude"
                  value={lat}
                  onChange={(e) => setLat(e.target.value)}
                />
              </div>
              <div className="input-box">
                <input
                  placeholder="Longitude"
                  value={long}
                  onChange={(e) => setLong(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
