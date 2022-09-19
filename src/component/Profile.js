import "../css/Profile.css"
import DanProfile from "../img/DanAwesomeProfile_600x600.png"

function Profile () {
  return(
    <div className="Profile">
      <img src={DanProfile} alt='Profile of Dan Awesome'/>
      <h1>Software Engineer</h1>
    </div>
    
  )
  
}

export default Profile;