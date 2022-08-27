import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import axiosInstance from './axios';
import { useHistory } from "react-router-dom";


const Register = () => {

	const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    
    let history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
        const user = {name, email, username, password, password2};

		console.log(user);

		axiosInstance
			.post(`register`, {
				email: email,
				name: name,
				username: username,
				password: password,
				password2: password2,
                
			})
			.then((res) => {
				console.log(res);
				console.log(res.data);
				console.log("User Created");

                axiosInstance
                    .post(`api/token`, {
                    email: email,
                    password: password
                    })
                    .then((res) => {
				    console.log(res);
                    localStorage.setItem('access_token', res.data.access);
				    localStorage.setItem('refresh_token', res.data.refresh);
                    axiosInstance.defaults.headers['Authorization'] =
                        'JWT ' + localStorage.getItem('access_token');
                    console.log("Signed in too")
                    history.push("/profile");
        })
                
			});
        
        

        
	};
	return (
		<div className="Register">
            <Form onSubmit={handleSubmit}>

                <Form.Group controlId="formBasicText1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                    />
                </Form.Group>

                <Form.Group controlId="formBasicText2">
                    <Form.Label>Artist Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Artist Name/Stage Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}

                    />
                </Form.Group>
                
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        
                    />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                    />
                </Form.Group>
                <Form.Group controlId="formPassword2">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}

                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
	);
}

export default Register;
