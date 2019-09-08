import React from 'react';
import { useState } from 'react'
import Axios from 'axios';



const AddEmployeePage = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [submit, setSubmit] = useState('')

  const postCall = async e => {
    //post request
    const resp = await Axios.post('https://sdg-staff-directory-app.herokuapp.com/api/Sherman-Williams/Employees',
      {
        firstName,
        lastName,
        email,
        phoneNumber,
        jobTitle
      }
    )
  }

  const processSubmit = () => {
    setSubmit(true)
  }

  return (
    <div>

      <form
        onSubmit={e => {
          e.preventDefault()
          postCall()
        }}
      >
        <input type="text"
          placeholder="Doctor"
          value={firstName}
          onChange={e => {
            setFirstName(e.target.value)
          }}
        />

        <input type="text"
          placeholder="Strange"
          value={lastName}
          onChange={e => {
            setLastName(e.target.value)
          }}
        />
        <input type="email"
          placeholder="employee@email.com"
          value={email}
          onChange={e => {
            setEmail(e.target.value)
          }}
        />
        <input type="number"
          placeholder="phone number"
          onChange={e => {
            setPhoneNumber(e.target.value)
          }}
        />
        <input type="text"
          placeholder="Title"
          onChange={e => {
            setJobTitle(e.target.value)
          }}
        />
        <button type="submit"
          onClick={submit}>
          submit
        </button>
      </form>
    </div>
  )
}

export default AddEmployeePage;
