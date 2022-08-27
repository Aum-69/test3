// import { useState, useEffect } from 'react';
// import axiosInstance from './axios';
// import { useHistory } from 'react-router-dom';

// export default function Signout() {

// 	useEffect(() => {
// 		const response = axiosInstance.post('register/logout/blacklist/', {
// 			refresh_token: localStorage.getItem('refresh_token'),
// 		});
// 		localStorage.removeItem('access_token');
// 		localStorage.removeItem('refresh_token');
// 		axiosInstance.defaults.headers['Authorization'] = null;
// 		// history.push('/login');
// 	});
// 	return <div>Logout</div>;
// }