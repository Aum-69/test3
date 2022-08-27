import axiosInstance from './axios';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const Logout = () => {

  let history = useHistory();

    useEffect(() => {

        axiosInstance.post('register/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
    history.push('/explore')
      }, [])

    return (
        <h2>Logout</h2>
      );
}
 
export default Logout;