import {useState} from 'react';
import reset from "./reset";
import forgetpassword from "./Forgetpassword";
import { NavLink,useNavigate } from 'react-router-dom';
import axios from  "axios";
import './Loginsignup.css';
const Loginsignup=()=>{
     const[addclass,setaddclass]=useState("");
    const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [cpassword,setCpassword]=useState("");
  const [email,setEmail]=useState("");
  console.log({email,password,cpassword,username})
  const usernameChangeHandler=(e) =>{
    setUsername(e.target.value);
  };
  const passwordChangeHandler=(e) =>{
    setPassword(e.target.value);
  };
  const cpasswordChangeHandler=(e) =>{
    setCpassword(e.target.value);
  };
  const emailChangeHandler=(e) =>{
    setEmail(e.target.value);
  };
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })
  const navigate = useNavigate();
      const submitHandler = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        const data = new FormData(e.currentTarget);
        const actualData = {
          email: data.get('email'),
          password: data.get('password'),
        }
        if (actualData.email && actualData.password) {
          console.log(actualData);
    
          document.getElementById('container').reset()
          setError({ status: true, msg: "Login Success", type: 'success' })
          navigate('/dashboard')
        } else {
          setError({ status: true, msg: "All Fields are Required", type: 'error' })
        }
      }
      const handleApi=()=>{
        console.log({email,password,cpassword,username})
        axios.post('https://reqres.in/api/Loginsignup',{
          email: email ,
          password:password ,
          username :username,
          cpassword :cpassword
        }).then(result=>{
              console.log(result.data)
              alert('success')
        })
         .catch(error=>{console.log(error)
          alert('ERROR!') 
        })
      }
    return (
        <div className={`container ${addclass}`} id="container">
        <div className="form-container  sign-up-container">
<form onSubmit={submitHandler}>
           <div className='welcome'>
           <h1>WELCOME</h1>
           </div>
           <div className="second-input">
             <input type="text"  className="name" onChange={usernameChangeHandler} value={username}/>
              <label>username</label>
           </div>
           <div className="second-input">
             <input type="text"  className="name" onChange={emailChangeHandler} value={email}/>
              <label>Email</label>
           </div>
           <div className="second-input">
             <input type="password"  className="name" onChange={passwordChangeHandler} value={password}/>
             <label>Password</label>
           </div>
           <div className="second-input">
             <input type="password"  className="name" onChange={cpasswordChangeHandler} value={cpassword}/>
             <label>confirm your Password</label>
           </div>
           <div className="login-button">
          <button type="submit" onClick={handleApi}>Submit</button>
          </div>
           <div className="overlay-container">
     <div className="overlay">
       <div className="overlay-panel overlay-left">
            <p className="link">
             <a> Hello friend !</a>
             <a> start a journey with us.</a>
             <h2><a href="#" onClick={() => setaddclass("left-panel-active")}> Sign in </a></h2>
            </p>
            </div>
         </div>
       </div>
      </form>
      </div>
         <div className="form-container sign-in-container">
         <form onSubmit={submitHandler}>
              <div className='welcome'>
              <h1>WELCOME</h1>
              </div>
              <div className="second-input">
                <input type="text"  onChange={usernameChangeHandler} value={username}/>
                 <label>username/email</label>
              </div>
              <div className="second-input">
                <input type="password"  onChange={passwordChangeHandler} value={password}/>
                <label>password</label>
              </div>
             <div className="login-button">
             <button type="submit" onClick={handleApi}> login</button>
             </div>
             <div>
               <p className="link">
                 <a href='#' onClick={() => setaddclass("right-panel-active")}>Need an account ? Sign up </a></p>
                 </div>
         </form>
         </div>
         </div>
         );
}
export default Loginsignup;