import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

function AddDoramaComponent() {

    const [doramaName, setDoramaName] = useState('')
    const [doramaDescript, setDoramaDescript] = useState('')
    const [doramaImg, setDoramaImg] = useState('')
    const [doramaCity, setDoramaCity] = useState('')

    const navigate = useNavigate();
    const { id } = useParams();

    const saveDorama = (e) => {
        e.preventDefault();

        const dorama = { doramaName, doramaDescript, doramaImg, doramaCity }

            EmployeeService.createDorama(dorama).then((response) => {
                console.log(response.data)
                navigate('/dorama');
    
            }).catch(error => {
                console.log(error)
            })

    }

    useEffect(() => {

        // EmployeeService.getSkladById(id).then((response) => {
        //     setInvet(response.data.invet)
        //     setSystemName(response.data.systemName)
        //     setComment(response.data.comment)
        //     setHardware(response.data.hardware)
        // }).catch(error => {
        //     console.log(error)
        // })
    }, []);

    const title = () => {
        if(id) {
            return <h2 className='text-center'> Update Dorama</h2>
        }else{
            return <h2 className='text-center'> Add Dorama</h2>
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
                                    <label className='form-label'> doramaName :</label>
                                    <input
                                        type='text'
                                        placeholder='Enter doramaName'
                                        name='doramaName'
                                        className='form-control'
                                        value={doramaName}
                                        onChange={(e) => setDoramaName(e.target.value)}
                                    ></input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'> doramaDescript :</label>
                                    <input
                                        type='text'
                                        placeholder='Enter doramaDescript'
                                        name='doramaDescript'
                                        className='form-control'
                                        value={doramaDescript}
                                        onChange={(e) => setDoramaDescript(e.target.value)}
                                    ></input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'> doramaImg :</label>
                                    <input
                                        type='text'
                                        placeholder='Enter doramaImg'
                                        name='doramaImg'
                                        className='form-control'
                                        value={doramaImg}
                                        onChange={(e) => setDoramaImg(e.target.value)}
                                    ></input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'> doramaCity :</label>
                                    <input
                                        type='text'
                                        placeholder='Enter doramaCity'
                                        name='doramaCity'
                                        className='form-control'
                                        value={doramaCity}
                                        onChange={(e) => setDoramaCity(e.target.value)}
                                    ></input>
                                </div>

                                <button className='btn btn-success' onClick={(e) => saveDorama(e)}>Sumbit</button>
                                <Link to='/dorama' className='btn btn-danger'> Cancel </Link>
                            </from>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddDoramaComponent