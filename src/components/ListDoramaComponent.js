import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const ListDoramaComponent = () => {

    const [doramas, setDoramas] = useState([])

    const getAllDoramas = useCallback(() => {
        EmployeeService.getAllDorama().then((response) => {
            setDoramas(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })

    },[])

    useEffect(() => {
        getAllDoramas();
    }, [getAllDoramas]);

    return (
        <div className='container'>
            <h2 className='text-center'> List Sklad </h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th> invent</th>
                    <th> PC system AD </th>
                    <th> Comment </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        doramas.map(
                            sklad =>
                                <tr key={sklad.id}>
                                    <td> {sklad.doramaName} </td>
                                    <td> {sklad.doramaDescript} </td>
                                    <td> <img src={sklad.doramaImg}></img> </td>
                                    <td> {sklad.doramaCity} </td>
                                    <td>
                                     {sklad.doramaTag.map(emp => {
                                        return (
                                            <i>{emp.tag} </i>
                                        )
                                    })}
                                    </td>
                                    <td><img src={require('../Images/devstvennica_u_ri_568493.jpg').default} /></td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListDoramaComponent