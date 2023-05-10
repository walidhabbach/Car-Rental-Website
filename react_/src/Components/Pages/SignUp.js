import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import APISerive from '../../data/ApiService';

export default function Signup() {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [cin, setCin] = useState('');
  const [photo, setPhoto] = useState('');
  const [drivingLicense, setDrivingLicense] = useState('');
  const [passport, setPassport] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [licenseDate, setLicenseDate] = useState('');
  const [terms, setTerms] = useState(false);


  //erro message
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here

  };


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    const emailInput = event.target.value;
    const emailRegex = /^\S+@\S+\.\S+$/; // Regular expression for validating email format

    if (!emailRegex.test(emailInput)) {
      setErrorEmail("Please enter a valid email address.");
    } else {
      setErrorEmail(""); // Clear error message if email is valid
    }

    setEmail(emailInput);
  };


  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!regex.test(event.target.value)) {
      setErrorPassword('Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number');
    } else {
      setErrorPassword(null);
    }
  };


  const handlePhoneChange = (event) => {
    setPhone(event.target.files);
  };

  const handleCinChange = (event) => {
    setCin(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleAdresseChange = (event) => {
    setAddress(event.target.value);
  };

  const handleLicenseDateChange = (event) => {
    setLicenseDate(event.target.files);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.value);
  };

  const handleDrivingLicenseChange = (event) => {
    setDrivingLicense(event.target.files);
  };


  const registerClient = () => {


    let data = [
      { nom: name, prenom: lastname, login: login, mdp: password },
      {
        iduser: null,
        adresse: address,
        cin: cin,
        photo: "b'cl ent1.jpg'",
        liste_noire: 0,
        permis: drivingLicense,
        passport: passport,
        email: email,
        observation: "Obscation 1",
        societe: "Compc A",
        ville: city,
        tel: phone,
        date_permis: licenseDate
      }
    ]
    APISerive.RegisterClient(data)
  }


  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:max-w-md md:max-w-3xl mx-auto p-4 w-full mb-5">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:w-1/2 md:pr-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="nom">
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={name}
            placeholder='Name'
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-4 md:w-1/2 md:pl-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="prenom">
            Last Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder='Last Name'
            value={lastname}
            onChange={handleLastNameChange}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" >
          Email:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          value={email}
          placeholder='Email'
          onChange={handleEmailChange}
        />
        {errorEmail && (
          <p className="text-red-500 text-md mt-4">{errorEmail}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="tel">
          Phone:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

          type="tel"

          value={phone}
          placeholder='Phone number'
          onChange={handlePhoneChange}
        />
      </div>
      <div class="flex flex-col md:flex-row md:justify-between">
        <div className="mb-4 md:w-1/2 md:pr-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="login">
            Login:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

            type="text"
            placeholder='username'
            value={login}
            onChange={handleLoginChange}
          />
        </div>
        <div className="mb-4 md:w-1/2 md:pl-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="mdp">
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

            type="password"
            placeholder='password'
            value={password}
            onChange={handlePasswordChange}
          />
          {errorPassword && (
            <p className="text-red-500 text-md mt-4">{errorPassword}</p>
          )}
        </div>
      </div>


      <div class="flex flex-col md:flex-row md:justify-between">
        <div className="mb-4 md:w-1/2 md:pr-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="cin">
            Cin:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cin"
            type="text"
            name="cin"
            value={cin}
            placeholder='cin'
            onChange={handleCinChange}
          />
        </div>
        <div className="mb-4 md:w-1/2 md:pl-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="adresse">
            Adresse:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            name="adresse"
            value={address}
            placeholder='addresse'
            onChange={handleAdresseChange}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="photo">
          Photo:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="photo"
          type="file"
          name="photo"
          value={photo}
          placeholder='photo'
          onChange={handlePhotoChange}
        />
      </div>
      <div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="permis">
            Driving License:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="drivingLicense"
            type="text"
            name="drivingLicense"
            placeholder='Driving License'
            value={drivingLicense}
            onChange={handleDrivingLicenseChange}
          />
        </div>

      </div>
      <div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="ville">
            City:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            name="city"
            placeholder='city'
            value={city}
            onChange={handleCityChange}
          />
        </div>

      </div>
      <div>

      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="datePermis">
          license Date:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="licenseDate"
          type="date"
          name="licenseDate"
          value={licenseDate}
          onChange={handleLicenseDateChange}

        />
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            className="form-checkbox"
            type="checkbox"
            name="terms"
          />
          <span className="ml-2">
            I agree to the{' '}
            <a href="#" className="text-blue-500">
              terms and conditions
            </a>
          </span>
        </label>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        onClick={registerClient}
      >
        Submit
      </button>



    </form >

  )

};




