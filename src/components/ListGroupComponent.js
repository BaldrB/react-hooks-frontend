import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const ListGroupComponent = () => {
  const { subid } = useParams();
  const { dateto } = useParams();
  const { datedo } = useParams();

  const [employees, setEmployees] = useState([])

  const getAllUsers = useCallback(() => {
    EmployeeService.getAllGroupder(subid, dateto, datedo).then((response) => {
      setEmployees(response.data)
      console.log(response.data)
    }).catch(error => {
      console.log(error);
    })

  }, [])

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  return (
    <div className='container'>
      <h2 className='text-center'> List Groupe </h2>
      <table className='table table-bordered table-striped'>
        <thead>
          <th> idstaff</th>
          <th> Date </th>
          <th> Time </th>
          <th> Employee Email Id </th>
          <th> Areas </th>
        </thead>
      </table>
      {employees.map(employee => {
        return (<table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th>{employee.name}</th>
            </tr>
          </thead>
          <tbody>
            {employee.staff.map(emp => {
              return (
                <tr>
                  <td> {emp.idStaff} </td>
                  <td> {emp.date} </td>
                  <td> {emp.time} </td>
                  <td> {emp.areas} </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        )
      })}

    </div>
  )

  // const datatable = {
  //       columns: [
  //         {
  //           label: 'ID',
  //           field: 'id',
  //           sort: 'asc'
  //         },
  //         {
  //           label: 'First',
  //           field: 'firstName',
  //           sort: 'asc'
  //         },
  //         {
  //           label: 'Last',
  //           field: 'lastName',
  //           sort: 'asc'
  //         },
  //       ],
  //       rows: employees
  //     };

  //     return <MDBDataTableV5 hover entriesOptions={[10, 20, 25]} entries={10} pagesAmount={4} data={datatable} />;
}

export default ListGroupComponent