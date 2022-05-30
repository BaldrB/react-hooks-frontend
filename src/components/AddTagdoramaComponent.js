import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

function AddTagdoramaComponent() {

    const [tag, setTag] = useState('')
    const [dorama, setTaDorama] = useState('')

    const navigate = useNavigate();
    const { id } = useParams();

    const saveTagdorama = (e) => {
        e.preventDefault();

        const tagdorama = { tag }

            EmployeeService.createTagdorama(tagdorama).then((response) => {
                console.log(response.data)
                navigate('/tagdorama');
    
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
            return <h2 className='text-center'> Update Tag</h2>
        }else{
            return <h2 className='text-center'> Add Tag</h2>
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
                                    <label className='form-label'> tag :</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Tag'
                                        name='tag'
                                        className='form-control'
                                        value={tag}
                                        onChange={(e) => setTag(e.target.value)}
                                    ></input>
                                </div>



                                <button className='btn btn-success' onClick={(e) => saveTagdorama(e)}>Sumbit</button>
                                <Link to='/sklad' className='btn btn-danger'> Cancel </Link>
                            </from>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTagdoramaComponent