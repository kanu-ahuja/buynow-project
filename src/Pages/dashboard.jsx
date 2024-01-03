import React, { useEffect, useState } from 'react'

const Dashboard = () => {


    let initForm = {
        name: "",
        gmail: "",
        password: ""
    }

    const [formData, setFormData] = useState(initForm)
    const [error, setError] = useState(null);
    const [data, setData] = useState('');
    const [update, setUpdate] = useState(false)
    const [form_id, setFormID] = useState(0)

    function ValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    // Edit Button

    const edit_button = async (name, gmail, password, id) => {
        setUpdate(true)
        setFormID(id)
        setFormData({
            id: id,
            name: name,
            gmail: gmail,
            password: password
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        let data = await fetch('http://localhost:9000/getUser')     // Get User
            .then(res => res.json())
            .then(result => setData(result))
            .catch(error => console.warn(error))
    }

    const submit = async () => {
        {
            console.log(formData, "==formdata==");

            // {Validation Password length 8 digits}

            if (formData.password.length >= 8) {
                console.log("Password exists");
                return
            }
            else {
                console.log("password must be 8 digits");
            }

            // {Validation Gmail is Valid or Not}

            if (!ValidEmail(formData.gmail)) {
                setError('Email is invalid');
                return
            } else {
                console.log("Valid");
                setError(null);
            }

            let url = update ? 'http://localhost:9000/updateuser/' + form_id : 'http://localhost:9000/saveUser'
            let result = await fetch(url,
                {
                    method: update ? 'PUT' : 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                })
                .then(res => res.json())
            setFormData(result)
            if (update) {
                fetchData()
            }


            // {Vadilation gmail already exist or not}

            if (result.gmail == formData.gmail) {
                console.log("gmail already exists");
                return
            }
            else {
                console.log("gmail not exist");
            }
        }
    }

    const onchange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    // [Delete Item in a Table]

    const delete_button = async (id) => {
        let deleteUser = await fetch('http://localhost:9000/deleteuser/' + id,
            {
                method: 'DELETE',
            })
            .then(res => res.text())
            .then(async (deleteUser) => {
                await fetchData()
            }).catch(error => console.warn(error))
    }

    // {Items save in a table}

    const add_button = async () => {

        setFormData(data)
        setFormData(initForm)
        setUpdate(false)
    }

    return (
        <>
            <div className='container'>
                <div className='dashboard_page'>
                    <h1 className='login_heading'>LOGIN FORM</h1>
                    <div className='error_message'>{error}</div>
                    <div>
                        <label for="text">Name : </label>
                        <input type='text' id="text" name='name' className='dashboard' placeholder='Enter your Name...' value={formData.name} onChange={onchange} />
                    </div>
                    <div>
                        <label for="gmail">Gmail : </label>
                        <input type='gmail' id="gmail" name='gmail' className='dashboard' placeholder='Enter your gmail...' value={formData.gmail} onChange={onchange} />
                    </div>
                    <div>
                        <label for="pass">Password : </label>
                        <input type='password' id="pass" name='password' className='dashboard' value={formData.password} placeholder='Enter your password...' onChange={onchange} />
                    </div>
                    <div>
                        <input type='submit' value={"Submit"} className='dashboard dashboard_button' onClick={submit} />
                    </div>
                </div>
                <div>
                    <button className='action_buttons' onClick={add_button}>ADD</button>
                    <form>
                        <table className='dashboard_table'>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>gmail</th>
                                    <th>password</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.length > 0 && data.map((item, index) => {
                                        return (<>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.gmail}</td>
                                                <td>{item.password}</td>
                                                <td><button className='action_buttons' type="button" onClick={() => edit_button(item.name, item.gmail, item.password, item.id)}>Edit</button><button className='action_buttons delete_button' onClick={() => delete_button(item.id)} type="button">Delete</button></td>
                                            </tr>
                                        </>)
                                    })
                                }
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Dashboard