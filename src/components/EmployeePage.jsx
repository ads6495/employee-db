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
      <ul className="list-group-item">
        <li className="list-group-item"> first name: {employee.firstName}</li>
        <li className="list-group-item">Last Name: {employee.lastName}</li>
        <li className="list-group-item">E-mail: {employee.email}</li>
        <li className="list-group-item">Address: {employee.address}</li>
        <li className="list-group-item">phone number: {employee.phoneNumber}</li>
        <li className="list-group-item">job title: {employee.JobTitle}</li>
        <li className="list-group-item">Company: {employee.companyKey}</li>
        <li className="list-group-item">Salary: {employee.salary}</li>
        <li className="list-group-item">PTO: {employee.ptoHours}</li>
        <li className="list-group-item">Birthday: {employee.birthday}</li>
        <li className="list-group-item">State: {employee.state}</li>
        <li className="list-group-item">City: {employee.city}</li>
        <li className="list-group-item">Zipcode: {employee.zip}</li>
        <li className="list-group-item">Image: {employee.profileImage}</li>
        <li className="list-group-item">Description: {employee.jobDescription}</li>
        <li className="list-group-item">Fulltime: {employee.isFullTime}</li>
        <li className="list-group-item">Fun Fact: {employee.interestingFact}</li>
        <li className="list-group-item">ID Number: {employee.id}</li>
        <li className="list-group-item">Hire Date: {employee.hiredDate}</li>
        <li className="list-group-item">M/F {employee.gender}</li>
        <li className="list-group-item">Emegency Contact Number: {employee.emergencyContactPhone}</li>
        <li className="list-group-item">Emegency Contact Name: {employee.emergencyContactPerson}</li>
        <li className="list-group-item">Emegency Contact Address: {employee.emergencyContactAddress}</li>
      </ul>
    </main>
  );
}

export default EmployeePage;
