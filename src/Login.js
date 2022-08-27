import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axiosInstance from './axios';
import { useHistory } from "react-router-dom";


const Login = () => {

    const [password, setpassword] = useState('');
    const [email, setEmail] = useState('');
    
    let history = useHistory();
    const handleSubmit = (e) => {
		e.preventDefault();
        const user = {email, password};

		console.log(user);

		axiosInstance
			.post(`api/token`, {
				email: email,
				password: password
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
                history.push("/");
			});
    }

    return (
        <div className="Register">
            <Form onSubmit={handleSubmit}>

                {/* <Form.Group controlId="formBasicText">
                    <Form.Label>Artist Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Artist Name/Stage Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} */}
                    {/* />
                </Form.Group> */}
                
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
                        onChange={(e) => setpassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Login;