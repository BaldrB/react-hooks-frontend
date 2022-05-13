import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

function AddSkladComponent() {

    const [invet, setInvet] = useState('')
    const [systemName, setSystemName] = useState('')
    const [comment, setComment] = useState('')
    const [hardware, setHardware] = useState('')

    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateSklad = (e) => {
        e.preventDefault();

        const sklad = { invet, systemName, comment, hardware }

        if(id) {
            EmployeeService.updateSklad(id, sklad).then((response) => {
                navigate('/sklad');
            }).catch(error => {
                console.log(error);
            })

        }else{
            EmployeeService.createSklad(sklad).then((response) => {
                console.log(response.data)
                navigate('/sklad');
    
            }).catch(error => {
                console.log(error)
            })

        }
    }

    useEffect(() => {

        EmployeeService.getSkladById(id).then((response) => {
            setInvet(response.data.invet)
            setSystemName(response.data.systemName)
            setComment(response.data.comment)
            setHardware(response.data.hardware)
        }).catch(error => {
            console.log(error)
        })
    }, []);

    const title = () => {
        if(id) {
            return <h2 className='text-center'> Update Sklad</h2>
        }else{
            return <h2 className='text-center'> Add PC</h2>
        }
    }

    return (
        <div>
            <br></br>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {
                            title()
                        }
                        <div className='card-body'>
                            <from>
                                <div className='form-group mb-2'>
                                    <label className='form-label'> invet :</label>
                                    <input
                                        type='text'
                                        placeholder='Enter first name'
                                        name='invet'
                                        className='form-control'
                                        value={invet}
                                        onChange={(e) => setInvet(e.target.value)}
                                    ></input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'> systemName :</label>
                                    <input
                                        type='text'
                                        placeholder='Enter last name'
                                        name='systemName'
                                        className='form-control'
                                        value={systemName}
                                        onChange={(e) => setSystemName(e.target.value)}
                                    ></input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'> comment :</label>
                                    <input
                                        type='text'
                                        placeholder='Enter email'
                                        name='comment'
                                        className='form-control'
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    ></input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'> hardware :</label>
                                    <input
                                        type='text'
                                        placeholder='Enter email'
                                        name='hardware'
                                        className='form-control'
                                        value={hardware}
                                        onChange={(e) => setHardware(e.target.value)}
                                    ></input>
                                </div>

                                <button className='btn btn-success' onClick={(e) => saveOrUpdateSklad(e)}>Sumbit</button>
                                <Link to='/sklad' className='btn btn-danger'> Cancel </Link>
                            </from>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSkladComponent