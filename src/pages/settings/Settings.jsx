import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
    return (
<div className="settings">

<div className="settingsWrapper">

<div className="settingsTitle">
  <span className="settingsTitleUpdate">Update Your Account</span>
  <span className="settingsTitleDelete">Delete Account</span>
</div>

<form className="settingsForm">
  <label>Profile Picture</label>

<div className="settingsPP">
<img
  src="https://images.wombo.art/generated/e70c2f35-9f7d-493d-bb2d-0a2f454a84be/final.jpg?Expires=1689047644&Signature=0DJwhOQmSKygHLCeq8YsX1uR29zqE0mbVHtGWLAwjkyeFxF0-G4dhPTl5pMm31SRJLhtvxfLcnTcm5Wt2x8xGqoJnLUwCjB5K4~lqfRst5dYJ1~-6Yu2dJDq4nZ9S22AT8MICb9GruNedQ74SZV2oS7avx6DQX5ShriJYs-3a7b8OUBkt2Pm7Moz4L5KamAV~uQtFQoIf~GFVlqJMj96GfG0YKtDys8C54lPZvWklBuUvWl2fexBnwZ1wX9UY2X8w~77QGTclXbc0Da7t6j2TBo5susdpIEIelhqtUD5r7T7NwiZ63YuvPWPHOxfNnbGKAObjXg~sVRNMKYGcYvTgg__&Key-Pair-Id=K1ZXCNMC55M2IL"
  alt=""
/>

<label htmlFor="fileInput">
<i className="settingsPPIcon far fa-user-circle"></i>{" "}
</label>


<input
    id="fileInput"
    type="file"
    style={{ display: "none" }}
    className="settingsPPInput"
/>
</div>

<label>Username</label>
<input type="text" placeholder="Human" name="name" />

<label>Email</label>
<input type="email" placeholder="Human2023@gmail.com" name="email" />

<label>Password</label>
<input type="password" placeholder="Password" name="password" />

<button className="settingsSubmitButton" type="submit">
    Update
</button>


</form>
</div>
    <Sidebar />
</div>
);
}
