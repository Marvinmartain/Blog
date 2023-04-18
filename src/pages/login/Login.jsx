import "./login.css"

export default function Login() {
  return (
<div className="login">
    <form className="loginform">
      <label>Email</label>
      <input type="text" placeholder="Enter Your Email..."/>

      <label>Password</label>
      <input type="password" placeholder="Enter Your Password..."/>

      <button className="loginButton">Login</button>
      </form>
      
      <button className="loginRegisterButton">Register</button>
    
</div>
  );
}
