import "./write.css"

export default function Write() {
    return (
<div className="write">
<img
className="writeImg"
    src="https://images.wombo.art/generated/44fff6a9-8abe-4672-a8d5-07ff2267ce9c/final.jpg?Expires=1689043107&Signature=OGNFs53Qe5mMCNlVmbcb6u7psalg9ky48xdCblQhZ1Qo5Bnjy7V43931Ehv-o2omp9ZbGlp7HbAQD7-0S6GYoBkYzJryEqr44~19Q~3cDcpbKhHPIMHbDn2U53u9iLdEiFNcCVsBIVDhbjZ~MFUhyxqMMo6fXswZ-8ccfrCPG0kHw2EO2xJXWiHNmhobAIx66uw7c~WQVrZ0SCwdKrzm69XHVOksVD1Gf48S-ptWMyZ11rP9ne6UiTng320DHUkB3jqA1IibypuQ1vhWv-r0AvCo7ZGhtp4QRjVPfrA36n3gS36t3CwFFcX5ARHfQ-WCNkJzwtpK6NL4Ljw20zBe2Q__&Key-Pair-Id=K1ZXCNMC55M2IL"
    alt=""
    />
        
<form className="writeForm">

<div className="writeFormGroup">


<label htmlFor="fileInput">
  <i className="writeIcon fas fa-plus"></i>
</label>
            

<input id="fileInput" type="file" style={{ display: "none" }} />
<input
    className="writeInput"
    placeholder="Title"
    type="text"
    autoFocus={true}
/>
</div>

<div className="writeFormGroup">
<textarea
    className="writeInput writeText"
    placeholder="Tell your story..."
    type="text"
    autoFocus={true}
/>
</div>


<button className="writeSubmit" type="submit">
    Publish
</button>


</form>
</div>
);
}
