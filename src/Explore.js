import { useState,useEffect } from 'react';
import axiosInstance from './axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const Explore = () => {

  const [datas, setDatas] = useState([]);
  const [link, setLink] = useState(`explore`);
  
  // setLink(`explore`);
  useEffect(() => {

    // let JWTToken = localStorage.getItem('access_token');
    // console.log(JWTToken)
    axiosInstance
    .get(link)
    .then(res => setDatas(res.data))
    .catch(err=> console.error(err));


  }, [link])
    // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   fetch('http://127.0.0.1:8000/user/info')
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       setUser(data);
  //       // console.log(user)
  //     })
  
    // var number1 = (-1)**(1/2);
    // var number2 = (-1)**(1/2);
  
    
  
    
    return ( 
        <div>
            <h2><button onClick = {() => setLink(`explore`)}>All</button><button onClick = {() => setLink(`explore/image`)}>Images</button><button onClick = {() => setLink(`explore/audio`)}>Audio</button><button onClick = {() => setLink(`explore/video`)}>Video</button></h2>

        {datas && datas.map(data => (
          <div className="datas-preview" key={data.id} >
            
            {/* {console.log(data)} */}
            {/* {number1 = number1 * number2} */}
            {/* {console.log(number1.toString())} */}
            {/* <img src={data.image} alt-text="goddamit" width="500" height="500"></img> */}
            { data.image && <img src={data.image} alt="" width="500" height="500" /> }          
            { data.audio && <audio controls src={data.audio} alt=""/> }         
            { data.video && <video controls src={data.video} alt="" width="500" height="500"/> }    
            {console.log(data.user)}
            {/* {console.log(number = number + 1)} */}
          </div>
        ))}
        </div>

     );
}
 
export default Explore;