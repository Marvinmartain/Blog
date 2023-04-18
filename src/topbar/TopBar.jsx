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
      <img src="https://images.wombo.art/generated/8d1c2ce1-d195-42e0-a778-254391444f7d/final.jpg?Expires=1688977058&Signature=URGf~wqhWnfLB3CRyaKw9laX2zTIWKE7EPLRLlUse-lSP4TI~i2HZSl-Zzlybh-Xp7E-aE7BMmY8MZoUwo8vUCySuDUq62pAk7RAAo5MZbTpulppPF~Q~h1oZ-zl26c-xtf66xW7sWUFFT4dJ~4t~tBiaqd9s0ScWHI3XzAlPfgpA9VEJ5O8T1fwRxZ7BBWJAHO2ssOckKyfBiz2fzIaOiPg3Hl4rv~J9vPgvmw6SKqrjJIyGpLtlBCpOaAmNdZnvk8lnJcVw2H-YA9BTGrwVLFdX~TcD8NY58~6opud8bewhCeAgME8G~Mlree7MCiChyTmT5WJHzN8ngbUWinwAQ__&Key-Pair-Id=K1ZXCNMC55M2IL" 
      className="topImg"
      alt=""
      />
      <i className="topSearchIcon fas fa-search"></i>
     </div>
    </div>
  )
}
