import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

const AllEmployeePage = () => {

  const [companyList, setCompanyList] = useState([])

  const companyListApiData = async () => {
    const resp = await axios.get('https://sdg-staff-directory-app.herokuapp.com/api/Company/Sherman-Williams')
    console.log(resp.data)
    setCompanyList(resp.data)
  }


  useEffect(() => {
    companyListApiData()
  }, [])

  return (
    <ul className="list-group">
      {companyList.map((result, i) => {
        return (
          <li key={i} className="list-group-item list-group-item-dark">
            <Link to={`/${result.id}`}>
              <div>
                <p>{result.firstName} , {result.lastName}</p>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  );
}

export default AllEmployeePage;
