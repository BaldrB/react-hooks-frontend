import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const ListSkladComponent = () => {

    const [sklads, setSklads] = useState([])

    const getAllSklads = useCallback(() => {
        EmployeeService.getAllSklads().then((response) => {
            setSklads(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })

    },[])

    useEffect(() => {
        getAllSklads();
    }, [getAllSklads]);

    const deleteSklad = (skladId) => {
        EmployeeService.deleteSklad(skladId).then((response) => {
            getAllSklads();
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='container'>
            <h2 className='text-center'> List Sklad </h2>
            <Link to = "/add-sklad" className='btn btn-primary mb-2'> Add PC</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th> invent</th>
                    <th> PC system AD </th>
                    <th> Comment </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        sklads.map(
                            sklad =>
                                <tr key={sklad.id}>
                                    <td> {sklad.invet} </td>
                                    <td> {sklad.systemName} </td>
                                    <td> {sklad.comment} </td>
                                    <td>
                                        <Link className='btn btn-info' to={`/edit-sklad/${sklad.id}`}>Update</Link>
                                        <button className='btn btn-danger' onClick={() => deleteSklad(sklad.id)}
                                        style = {{marginLeft:"10px"}}> Delete </button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListSkladComponent