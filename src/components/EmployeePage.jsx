import React, { useState, useEffect } from 'react';
import { link } from 'react-router-dom'
import axios from 'axios'


const EmployeePage = props => {
  const [employee, setEmployee] = useState([])

  const employeeProfile = async () => {
    const resp = await axios.get(`https://sdg-staff-directory-app.herokuapp.com/api/Sherman-Williams/Employees/${props.match.params.result}`
    )
    console.log(resp.data)
    setEmployee(resp.data)
  }

  useEffect(() => {
    employeeProfile()
  }, [])


  return (
    <main>
      <ul>
        <li>{employee.firstName}</li>
        <li>{employee.lastName}</li>
        <li>{employee.email}</li>
        <li>{employee.address}</li>
        <li>{employee.phoneNumber}</li>
        <li>{employee.JobTitle}</li>
        <li>{employee.companyKey}</li>
        <li>{employee.salary}</li>
        <li>{employee.ptoHours}</li>
        <li>{employee.birthday}</li>
        <li>{employee.zip}</li>
        <li>{employee.state}</li>
        <li>{employee.profileImage}</li>
        <li>{employee.jobDescription}</li>
        <li>{employee.jobDescription}</li>
        <li>{employee.isFullTime}</li>
        <li>{employee.interestingFact}</li>
        <li>{employee.id}</li>
        <li>{employee.hiredDate}</li>
        <li>{employee.gender}</li>
        <li>{employee.emergencyContactPhone}</li>
        <li>{employee.emergencyContactPerson}</li>
        <li>{employee.city}</li>
        <li>{employee.emergencyContactAddress}</li>
      </ul>
    </main>
  );
}

export default EmployeePage;
