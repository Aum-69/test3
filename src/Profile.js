import { useState,useEffect } from 'react';
import axiosInstance from './axios';


const Profilepage = ()=> {
  const editing = () => {
    document.getElementById('myModal').style.display = 'flex';
}
const closePop = () =>{
    document.getElementById('myModal').style.display = 'none';
}

  const [datas, setDatas] = useState([]);

  useEffect(() => {

    axiosInstance
    .get(`profile/basicinfo`)
    .then(res => setDatas(res.data))
    .catch(err=> console.error(err));

  }, [])


  const [profiledatas, setProfiledatas] = useState([]);

  useEffect(() => {

    axiosInstance
    .get(`profile/extendedinfo`)
    .then(res => setProfiledatas(res.data))
    .catch(err=> console.error(err));

  }, [])

  const [postdatas, setPostdatas] = useState([]);

  useEffect(() => {

    axiosInstance
    .get(`profile/posts`)
    .then(res => setPostdatas(res.data))
    .catch(err=> console.error(err));

  }, [])

    return (
      
          
        <div className="container">
          
          
          
        
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="profilepic">
              <div className="profileimage">
              <img src={profiledatas.profile_pic} alt="" />
              </div>
              <div className="form">  
                <form >                
                  
                  <input type="text" />
                <div id='aumnoob'>{datas.username}</div>
                <div id='aumnoob'>{datas.name}</div>

                  
                  
                  <input type="email" />
                  
                  <div className="profilefield">
                  <select name="" id="">
                    <option value="Art">Art</option>
                    <option value="Music">Music</option>
                    <option value="Dance">Dance</option>
                  </select>
                  </div>
                </form>
              </div>
              <div className="albumart">
                <img src={ process.env.PUBLIC_URL+'/image/494863.jpg'} alt="" />
                
                <img src={process.env.PUBLIC_URL+'/image/madein.png'} alt="" />
              </div>
              <div className="edit">
              <div class="edit">
                
                                      {/* <-- Trigger the modal with a button --> */}
                                        <button type="button" class="" data-toggle="modal" data-target="#myModal" onClick ={()=>editing()}>Open Modal</button>
                                                    {/* <!-- Modal --> */}

                                                    <div className="modal-fade" id="myModal">
                                  <div className="modal-dialog">

                                      {/* <!-- Modal content--> */}
                                      <div className="modal-content">
                                          <div className="modal-header">
                                              {/* <button type="button" className="close" >&times;</button>  */}
                                              <h4 className="modal-title">edit</h4>
                                              <button onClick={()=>closePop()} type="button" className="btn btn-default" id="cls-btn">Close</button>
                                          </div>
                                          <div className="modal-body">
                                              <form action="">
                                                  <label htmlFor="">
                                                      Name : 
                                                  </label>
                                                  <input type="text"  name="" id="" />
                                              </form>
                                          
                                          </div>
                                          <div className="modal-footer">
                                            
                                          </div>
                                      </div>

                                  </div>
                              </div>
                          </div>
              
             
            </div>

            </div>

            <div className="description">
              <form action="">
                  
                <h2>Description</h2>
                <div>{profiledatas.description}</div>
                {console.log(profiledatas.description)}
                <p>
                <button>
                  <label htmlFor="">submit</label>
                </button>
                </p>
              </form>
            </div>

            <div className="profile-list">
            {postdatas.map((post) =>(
                <div className="profile-preview"  key={post.id}>
                    {post.image && <img src={post.image} alt-text="goddamit" width="500" height="333"></img>}
                    {post.video && <video width="500" height="333" controls src={post.video} type="video/mp4" ></video>}
                    {post.audio && <audio controls controls src={post.audio}  ></audio>}
                </div>            
          ))}
        </div>
        </div>
      );
}
 
export default Profilepage