import "./login.css"

export default function Login() {
  return (
<div className="login">
    <span className="loginTitle">Login</span>
    <form className="loginform">
      <label>Email</label>
      <input type="text" className="loginInput" placeholder="Enter Your Email..."/>

      <label>Password</label>
      <input type="password" className="loginPassword" placeholder="Enter Your Password..."/>

      <button className="loginButton">Login</button>
      </form>
      
      <button className="loginRegisterButton">Register</button>
    
</div>
  );
}


// import { Link } from "react-router-dom";
// import "./login.css"

// export default function Login() {
//   return (
// <div className="login">
//     <span className="loginTitle">Login</span>
//     <form className="loginform">
//       <label>Email</label>
//       <input type="text" className="loginInput" placeholder="Enter Your Email..."/>

//       <label>Password</label>
//       <input type="password" className="loginPassword" placeholder="Enter Your Password..."/>

//       <button className="loginButton">Login</button>
//       </form>
      
//     <button className="loginRegisterButton">
//       <Link className="link" to="/register">Register</Link>
//     </button>
// </div>
//   );
// }
