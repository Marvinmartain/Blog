import "./topbar.css"

export default function TopBar() {
  return (
<div className="top">
     <div className="topleft">
     <i className="topIcon fab fa-facebook-square"></i>
     <i className="topIcon fab fa-pinterest"></i>
     <i className="topIcon fab fa-twitter"></i>  
     <i className="topIcon fab fa-instagram-square"></i>
</div>
     
<div className="topCenter">
 <ul className="topList">
    <li className="topListItem">Home</li>
    <li className="topListItem">About</li>
    <li className="topListItem">Contact</li>
    <li className="topListItem">Write</li>
    <li className="topListItem">Logout</li>
 </ul>    
</div>
     
     <div className="topRight">
      <img 
      className="topImg" 
      src="https://images.wombo.art/generated/82751bbf-7529-45b6-ac47-c880541c1fa4/final.jpg?Expires=1688977876&Signature=NePYZjhMhSwPKW~KR1MXZjsH1-iio3wqSRv4~Lu5r-MCeaEOJdMRNaW8xAOHDb-Af5g1-Q85hmNO8GiGTrJEVj4I6K85qISKuRdYDAmiMDnxbgaLexD9T49zRBiQVyaJSHLE9otOGIPdrzrmOtokvkVHbd~CaLfxxNcFFC735OH7AECZstsvUk7xqla5yo5LCOTCxLcremPkQbPFrSVqevhBctf-wdmF7xD3nYJMxgWWeBYGm3U4sheBaGCrdH-1d-jP-gfj7hLEr4wnWcpaunpT1Hjyq~OqnmpsxEG9ta1MwZuftqaIkJb~TEVJ0VLsi4d7-dhMZ16CEWoqEUVZ0w__&Key-Pair-Id=K1ZXCNMC55M2IL" 
      
      alt=""
      />
      <i className="topSearchIcon fas fa-search"></i>
     </div>
    </div>
  )
}


// import { Link } from "react-router-dom";
// import "./topbar.css"

// export default function TopBar() {
//   const user = true;
//   return (
// <div className="top">
//      <div className="topleft">
//      <i className="topIcon fab fa-facebook-square"></i>
//      <i className="topIcon fab fa-pinterest"></i>
//      <i className="topIcon fab fa-twitter"></i>  
//      <i className="topIcon fab fa-instagram-square"></i>
// </div>
     
// <div className="topCenter">
// <ul className="topList">
    
//   <li className="topListItem">
//     <Link className="link" to="/">HOME</Link></li>
    
//   <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
//   <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
//   <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
//   <li className="topListItem"> 
//       {user && "LOGOUT"}
//   </li>
// </ul>    
// </div>
     
//      <div className="topRight">
    
//     {
//     user ? (
//       <img     
//       className="topImg" 
//       src="https://images.wombo.art/generated/82751bbf-7529-45b6-ac47-c880541c1fa4/final.jpg?Expires=1688977876&Signature=NePYZjhMhSwPKW~KR1MXZjsH1-iio3wqSRv4~Lu5r-MCeaEOJdMRNaW8xAOHDb-Af5g1-Q85hmNO8GiGTrJEVj4I6K85qISKuRdYDAmiMDnxbgaLexD9T49zRBiQVyaJSHLE9otOGIPdrzrmOtokvkVHbd~CaLfxxNcFFC735OH7AECZstsvUk7xqla5yo5LCOTCxLcremPkQbPFrSVqevhBctf-wdmF7xD3nYJMxgWWeBYGm3U4sheBaGCrdH-1d-jP-gfj7hLEr4wnWcpaunpT1Hjyq~OqnmpsxEG9ta1MwZuftqaIkJb~TEVJ0VLsi4d7-dhMZ16CEWoqEUVZ0w__&Key-Pair-Id=K1ZXCNMC55M2IL" 
//       alt=""
//       />
//     ) : (
      
//       <ul className="topList">
//       <li className="topListItem">
//       <Link className="link" to="/login">
//         LOGIN
//       </Link>
//       </li>
      
//       <li className="topListItem">
//       <Link className="link" to="/register">
//         REGISTER
//       </Link>
//       </li>
//       </ul>
//     )}

//     <i className="topSearchIcon fas fa-search"></i>
//     </div>
//     </div>
//   )
// }
