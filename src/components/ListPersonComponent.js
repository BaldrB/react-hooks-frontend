import React, { useState, useEffect, useCallback } from 'react'
import { MDBDataTable, MDBDataTableV5 } from 'mdbreact';
import EmployeeService from '../services/EmployeeService'

const ListPersonComponent = () => {

    const [employees, setEmployees] = useState([])

    const getAllUsers = useCallback(() => {
        EmployeeService.getAllUsers().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })

    },[])

    useEffect(() => {
        getAllUsers();
    }, [getAllUsers]);

    const datatable = {
          columns: [
            {
              label: 'ID',
              field: 'id',
              sort: 'asc'
            },
            {
              label: 'First',
              field: 'firstName',
              sort: 'asc'
            },
            {
              label: 'Last',
              field: 'lastName',
              sort: 'asc'
            },
          ],
          rows: employees
        };

        return <MDBDataTableV5 hover entriesOptions={[10, 20, 25]} entries={10} pagesAmount={4} data={datatable} />;

    //     return (
    //         <MDBDataTable
    //         scrollX
    //         scrollY
    //         maxHeight="300px"
    //         striped
    //         bordered
    //         data={datatable}
    //       />
    //       )

    // return (
    //     <div className='container' styles={{ height: '500px', overflowY: 'scroll' }}>
    //         <h2 className='text-center'> List Persone </h2>
    //         <table className='table table-bordered table-striped'>
    //             <thead>
    //                 <th> Persone Id</th>
    //                 <th> Persone First </th>
    //                 <th> Persone Last </th>
    //                 <th> Persone Action </th>
    //             </thead>
    //             <tbody>
    //                 {
    //                     employees.map(
    //                         employee =>
    //                             <tr key={employee.id}>
    //                                 <td> {employee.id} </td>
    //                                 <td> {employee.lastName} </td>
    //                                 <td> {employee.firstName} </td>
    //                                 <td> {employee.firstName} </td>
    //                             </tr>
    //                     )
    //                 }
    //             </tbody>
    //         </table>
    //     </div>
    // )
}

export default ListPersonComponent