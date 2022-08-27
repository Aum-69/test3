import { useState,useEffect } from 'react';
import axiosInstance from './axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Homepage = () => {

  const [datas, setDatas ] = useState([]);
  const [authenticate, setAuthenticate] = useState(null);

  useEffect(() => {

    axiosInstance
    .get(`home`)
    .then(res => setDatas(res.data))
    .catch(err=> {console.error(err)
      // console.log(err.response.status)
      if (typeof err.response !== 'undefined')
        {
          setAuthenticate(err.response.status)}
        });
      
  }, [])
  
  const Popup = () => {
    return (
      <div className="redirection">
        <h1>Hey there!, welcome to underdogz </h1>  
        <div className="data">
          <h2>If you are a new user, welcome to the family, you can click here to <Link to = '/register'>register </Link></h2>
          <h2>If you are a fellow member, you seem to have signed out, click here to  <Link to = '/login'> sign in</Link></h2>
          <h2>or else, you could just </h2>
          <h1> <Link to = '/explore'>EXPLORE</Link></h1>
        </div>
      </div>
    );
  }
  
  // const NotFound = () => {
  //   return ( 
  //   <div className="data">
  //     <h1>Oops!</h1>
  //     <h2>There seems to be a problem with our server, we'll fix the problem asap.</h2>
  //   </div> );
  // }

//   console.log(datas)
//   console.log(datas.)
  // images = res.data

    return ( 
        <div className = 'homepage'>
        {datas && datas.map(data => (
            <div className="data-preview" key={data.id} >
                    <h2>{data.user}</h2>
                      {/* <img src={data.image} alt="" /> */}
                    { data.image && <img src={data.image} alt="" /> }          
                    { data.audio && <audio controls src={data.audio} alt="" /> }         
                    { data.video && <video controls src={data.video} alt="" /> }         
                    <h1>{data.description}</h1>
                    {/* {console.log(post.image)} */}
            </div>
          ))}
          {authenticate === 401 && Popup()}
          {/* {authenticate === 404 && NotFound()} */}
        
        </div>
     );
}


 
export default Homepage;