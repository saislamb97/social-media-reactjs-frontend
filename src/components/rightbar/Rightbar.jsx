import "./rightbar.css";
import {Users} from '../../dummyData'
import Online from "../online/Online";

export default function Rightbar({profile}) {

  const HomeRightBar = ()=>{
    return(
      <div>
          <div className="birthdayContainer">
            <img className="birthdayImg" src="assets/gift.png" alt="Birthday" />
            <span className="birthdayText">
              <b>Saiful Islam</b> and <b>3 other friends</b> have a birhday today.
            </span>
          </div>
          <img className="rightbarAd" src="assets/post/8.jpeg" alt="Rightbar" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map(u=>(
              <Online key = {u.id} user = {u}/>
            ))}
          </ul>
      </div>
    )
  }

  const ProfileRightBar = ()=>{
    return(
      <div>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Kuala Lumpur</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Malaysia</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/4.jpg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">Saiful Islam</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/5.jpg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">Saiful Islam</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/6.jpg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">Saiful Islam</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/8.jpg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">Saiful Islam</span>
          </div>
        </div>
      </div>
    )
  }

    return (
      <div className="rightbar">
        <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
      </div>
    )
}
