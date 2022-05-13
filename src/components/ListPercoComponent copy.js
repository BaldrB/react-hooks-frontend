import React, { useState, useEffect, useCallback } from 'react'
import EmployeeService from '../services/EmployeeService'

const ListPercoComponent = () => {

    const [employees, setEmployees] = useState([])

    const getAllPerco = useCallback(() => {
        EmployeeService.getAllPerco().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })

    },[])

    useEffect(() => {
        getAllPerco();
    }, [getAllPerco]);

    return (
        <div className='container'>
            <h2 className='text-center'> List Perco </h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th> Perco Id</th>
                    <th> Perco data </th>
                    <th> Perco Time </th>
                    <th> Perco Time MAX </th>
                    <th> Perco Areas </th>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                                <tr key={employee.id}>
                                    <td> {employee.id} </td>
                                    <td> {employee.date} </td>
                                    <td> {employee.time} </td>
                                    <td> {employee.timeMax} </td>
                                    <td> {employee.areas} </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListPercoComponent