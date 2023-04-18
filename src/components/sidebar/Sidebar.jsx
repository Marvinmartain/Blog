import "./sidebar.css"

export default function Sidebar() {
  return (
  <div className="sidebar">
  <div className="sidebarItem">
    <span className="sidebarTitle">ABOUT ME</span>
    <img
      src="https://images.wombo.art/generated/a3e64076-1b41-45cd-ae27-6d24c3b6fb52/final.jpg?Expires=1689027310&Signature=3rsM2QCx4pOTgIW94HyDOadcwsG8EW3z6OrqrRF5YXiz3qSpN-ErOQNehooISXw3oFnkXEUp7~N29aJ3NQgFo1ISmOit~csslAbeIiQsZQRyTdYOosE3AqbdULEDRF1B95HWwcLlCVXttrPwb8n4UQUL9W186tJt7IS9UcW5yu3wQsN2K-OmcgyqKR6N5IIuz~Ks1cBzu22bLrNt~yMvMyCm6rQLPpAps-OOwblqZSQhZi1sgHLw3yFZu7jya4~Ap91q8l5VKcM57PQ6LN5GH2qeyX-4vTOTFcgrmUNOxpHFu-T0aGo-y7LPO7f~nB3V0amCBmA-JkJjWQBCBAnJuA__&Key-Pair-Id=K1ZXCNMC55M2IL"
          alt=""
      />
          
      <p>
      Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
      amet ex esse.Sunt eu ut nostrud id quis proident.
      </p>
  </div>

  <div className="sidebarItem">
  <span className="sidebarTitle">CATEGORIES</span>
  <ul className="sidebarList">
    <li className="sidebarListItem">Life</li>
    <li className="sidebarListItem">Music</li>
    <li className="sidebarListItem">Style</li>
    <li className="sidebarListItem">Sport</li>
    <li className="sidebarListItem">Tech</li>
    <li className="sidebarListItem">Cinema</li>
  </ul>  
  </div>
  <div className="sidebarItem">
  <span className="sidebarTitle">FOLLOW US</span> 
  <div className="sidebarSocial">
     
     <i className="sidebarIcon fab fa-facebook-square"></i>
     <i className="sidebarIcon fab fa-pinterest"></i>
     <i className="sidebarIcon fab fa-twitter"></i>  
     <i className="sidebarIcon fab fa-instagram-square"></i>

  </div>
  </div>
  </div>
  )
}
