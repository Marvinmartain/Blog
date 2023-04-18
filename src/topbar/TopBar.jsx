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
      <img src="https://images.wombo.art/generated/ba5db977-6879-4486-b6ad-cdf832054fbe/final.jpg?Expires=1688977720&Signature=3~aiqy-U-h1BPwATJLccXQdlJ-d82hbaO3-h3jPlc2Dxgwf9Fva3eEEULqpIz-T-WYCDpylVgqBVx9B54u~EQ-moyU9sm-kf9SQZ~7DgzA03Peebj7y0gFaEAdzxB6idCiKrhU0Sp2WYHp780781Jc0ZVqVHLKSTY-lGkZaE4MotnI62Zy2ZF4dwn4FuIks0wczz2ZHM~7tZKH-6gLTEeY0yJjnV0W80xhcZZoD7Gp5tcGnjEQSiSNlrZa1di8yLkh7cV-jarnw3txmhnnOaAAX~8k6i7dcFJC7J8TMXhOZ8ExSGkPgpRODDKiPWPzrfVkijtDUjoGibAeAujz3TfA__&Key-Pair-Id=K1ZXCNMC55M2IL" 
      className="topImg"
      alt=""
      />
      <i className="topSearchIcon fas fa-search"></i>
     </div>
    </div>
  )
}
