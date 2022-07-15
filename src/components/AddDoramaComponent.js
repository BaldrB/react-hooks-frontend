import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import FormData from 'form-data';
import axios from 'axios';

function AddDoramaComponent() {

    const [doramaName, setDoramaName] = useState('')
    const [doramaDescript, setDoramaDescript] = useState('')
    const [doramaImg, setDoramaImg] = useState('')
    const [doramaCity, setDoramaCity] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", selectedFile);
        //console.log(selectedFile)
        axios.post('http://doramajavareact.herokuapp.com/upload', formData, { // receive two parameter endpoint url ,form data 
        })
        .then(res => { // then print response status
            console.warn(res);
            let data = JSON.parse(res.request.response);
            console.log(data['message']);
            setDoramaImg(data['message']);
        })
        // try {
        //     const response = await axios({
        //         method: "post",
        //         url: 'http://code.kupava.by:8080/upload',
        //         data: formData,
        //         headers: { "Content-Type": "multipart/form-data" },
        //     });
        // } catch (error) {
        //     console.log(error)
        // }
    };

    const handleFileSelect = (event) => {
        event.preventDefault();
        console.log("file selected")
        setSelectedFile(event.target.files[0])
    };

    const onFileChangeHandler = (e) => {
        e.preventDefault();
        setSelectedFile(e.target.files[0]);
        const formData = new FormData();
        formData.append('file', selectedFile);
        EmployeeService.upload(formData)
            .then(res => {
                    console.log(res.data);
                    alert("File uploaded successfully.")
            })
    };

    const saveFile = (e) => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        console.warn(this.state.selectedFile);
        let url = "http://code.kupava.by:8080/upload";

        axios.post(url, data, { // receive two parameter endpoint url ,form data 
        })
            .then(res => { // then print response status
                console.warn(res);
            })
    }

    useEffect(() => {

        setDoramaImg(id)

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
        if (id) {
            return <h2 className='text-center'> Update Dorama</h2>
        } else {
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

                            <input type="file" name="file" onChange={handleFileSelect} />
                            <button className='btn btn-success' onClick={(e) => handleSubmit(e)}>upload</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddDoramaComponent