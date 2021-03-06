import React, { useState, useEffect, useCallback } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

function DeskPercoComponent() {

    const [group, setGroups] = useState([])

    const getAllGroup = useCallback(() => {
        EmployeeService.getAllGroups().then((response) => {
            setGroups(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })

    }, [])

    useEffect(() => {
        getAllGroup();
    }, [getAllGroup]);

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')

    const navigate = useNavigate();
    const { id } = useParams();

    const goToPage = (e) => {
        e.preventDefault();
        var elem1 = document.getElementById("dateto");
        var elem2 = document.getElementById("datedo");
        var elem3 = document.getElementById("subId");
        var body = "/" + encodeURIComponent(elem3.value) + "/" + encodeURIComponent(elem1.value) + "/" + encodeURIComponent(elem2.value);
        // document.location.href = "/usergroup?" + body;
        navigate('/usergroup' + body);

        const employee = { firstName, lastName, emailId }

        // if (id) {
        //     EmployeeService.updateEmployee(id, employee).then((response) => {
        //         navigate('/employees');
        //     }).catch(error => {
        //         console.log(error);
        //     })

        // } else {
        //     EmployeeService.createEmployee(employee).then((response) => {
        //         console.log(response.data)
        //         navigate('/employees');
        //     }).catch(error => {
        //         console.log(error)
        //     })
        // }
    }

    useEffect(() => {

        EmployeeService.getEmployeeById(id).then((response) => {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
        }).catch(error => {
            console.log(error)
        })
    }, []);

    const title = () => {
        if (id) {
            return <h2 className='text-center'> Update Employee</h2>
        } else {
            return <h2 className='text-center'> Groupe</h2>
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
                                    <label for="date">???????? c :</label>
                                    <input type="date" id="dateto" name="dateto" />
                                </div>
                                <div className='form-group mb-2'>
                                    <label for="date">???????? ????: </label>
                                    <input type="date" id="datedo" name="datedo" />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>
                                        Choose a browser from this list:
                                        <input type="time" name="selected_time" list="time-list" />
                                    </label>
                                    <datalist id="time-list">
                                        <option value="08:00" label="???????????? ???????????????? ??????" />
                                        <option value="12:00" label="????????" />
                                        <option value="17:00" label="?????????? ???????????????? ??????" />
                                    </datalist>


                                </div>
                                <div className='form-group mb-2'>
                                    <select id="subId" name="subId" required>
                                        <option value="0">select operator</option>
                                        {group.map(gro =>
                                            <option value={gro.id}>{gro.displayName}</option>
                                        )
                                        }
                                    </select>
                                </div>
                                <div id="zatemnenie">
                                    <div id="okno">
                                        <h1>?????????????????????? ????????????!</h1>
                                        <a href="#" class="close">?????????????? ????????</a>
                                    </div>
                                </div>
                                <a href="#zatemnenie">?????????????? ?????????????????????? ????????</a>
                                <div>
                                    <form method="POST" enctype="multipart/form-data" action="http://code.kupava.by:8080/upload">
                                        <table>
                                            <tr><td>File to upload:</td><td><input type="file" name="file" /></td></tr>
                                            <tr><td></td><td><input type="submit" value="Upload" /></td></tr>
                                        </table>
                                    </form>
                                </div>
                                <div>
                                    <img src='http://code.kupava.by:8080/api/v1/files/files/children_of_the_lesser_god_739.jpg'></img>
                                </div>

                                <button className='btn btn-success' onClick={(e) => goToPage(e)}>??????????</button>
                                <Link to='/groupder' className='btn btn-danger'> ?????????? Not</Link>
                            </from>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeskPercoComponent