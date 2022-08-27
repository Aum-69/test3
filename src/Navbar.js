import axios from "axios";
import { Link } from "react-router-dom";
// import wolf from "./wolf.png";
// wolf-glow-v2
import { useState, useEffect } from "react";
// import useFetch from "./useFetch";
// import axiosInstance from './axios';

const Navbar = () => {

    const [datas, setDatas ] = useState([]);
    useEffect(() => {

        axios.get(`http://127.0.0.1:8000/adminmedia/1`)
            .then(res => setDatas(res.data))
            .catch(err=> console.error(err));
    }, [])

    

    // useEffect(() => {

    // axiosInstance
    // .get(`adminmedia/1`)
    // .then(res => setDatas(res.data))
    // .catch(err=> console.error(err));

    // }, [])

    // const {data : datas, error, isPending} = useFetch('http://127.0.0.1:8000/adminmedia/1')
    // console.log(datas)
    // console.log ('I am awesome')
    // console.log(error)
    // image = datas[0].image
    // console.log(datas[0])
    // datas && console.log(datas.id)
    return (
        <nav className="navbar">

            {/* {datas.image && (<img src={datas.image} alt="" />)} */}
            {/* {datas && datas.map(data => (
            <div className="data-preview" key={data.id} >
                    {/* <h2>{data.user}</h2> */}
                      {/* <img src={data.image} alt="" /> */}
                         
                    {/* { data.audio && <img src={process.env.PUBLIC_URL + data.audio} alt="" /> }         
                    { data.video && <img src={process.env.PUBLIC_URL + data.image} alt="" /> }          */}
                    
                    {/* <h1>{data.description}</h1> */}
                    {/* {console.log(post.image)} */}
            {/* </div>))} */}

            { datas.image && <Link to = '/'> <img src={datas.image} alt="" /></Link> }   
            <div className="links">
                <Link to ='/'> Home </Link>
                <Link to ='/login'>Login</Link>
                <Link to ='/register'>Register</Link>
                <Link to ='/logout'>Signout</Link>
                <Link to ='/explore'>Explore</Link>
                <Link to ='/settings'> Settings </Link>
                <Link to ='/profile'> Profile </Link>
                <Link to ='/aboutus'> About Us </Link>
            </div>
        </nav>
      );
}
 
export default Navbar;