import React,{useState,useEffect} from 'react';
import './Home.css'
import { useNavigate } from 'react-router-dom';
// import firebaseDB from '../firebase';
import app  from './firebase';
import 'firebase/database'
import Edit from './Edit';

const Home = () => {
 const navigate = useNavigate()
    const [data,setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
    })
    const {firstname,lastname,email}={...data}
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value});
    }

    const deleteHandler = key => {
      app.ref(`user/${key}`).remove(
        err => {
          if(err){
            console.log(err)
          }
        }
      )

    }
    // const Push = () => {
    //   app.ref("user").set(
    //     data
    //   ).catch(alert);
    // }
    const [getData,setGetData] = useState({});
    useEffect(() => {
      app.ref("user").on('value',details=>{
        setGetData(details.val());
      })
    }, []);
    const submitHandler = async (e) => {
        e.preventDefault();
        // app.ref("register").data
const dataAdd = await app.ref("user").push(
          data,
          err =>{
            if(err){
                 console.log(err);
            }
            else{
             alert("Data added")
            }
          }
        )
       setData({
         firstname:"",
         lastname:"",
         email:"",
       })
        
    }
    console.log(getData)
  return (
    <div>
        <h1>Register Form</h1><br/>
     <form onSubmit={submitHandler}>
      <div>
      <label>First Name :   </label>
      <input type="text" name="firstname" value={firstname} onChange={changeHandler}/>
      </div>
      <div>
      <label>Last Name : </label>
      <input type="text" name="lastname" value={lastname} onChange={changeHandler}/>
      </div>
      <div>
      <label>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;</label>
      <input type="email" name="email" value={email} onChange={changeHandler}/>
      </div>
      <button type="submit" className='day'>submit</button>
      {/* <button onClick={Push}>push</button> */}
      </form>
      <div>

        {getData && 
         Object.keys(getData).map(key => 
          <div className='border'>
         <p>First Name :{getData[key].firstname}</p>
         <p>Last Name :{getData[key].lastname}</p>
         <p>Email :{getData[key].email}</p>
         <button className='blue' onClick={() => navigate(`/Edit?firstname=${getData[key].firstname}&lastname=${getData[key].lastname}&email=${getData[key].email}&key=${key}`)}>Update</button>
         <button onClick={() => deleteHandler(key)}>Delete</button>
         </div>
          ) }
      </div>
    </div>
  );
}

export default Home;
