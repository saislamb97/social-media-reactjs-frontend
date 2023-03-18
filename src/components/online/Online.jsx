import './online.css'

export default function Online({user}) {
  return (
    <div>
        <li className="rightbarFriend">
                <div className="rightbarProfileImgContaner">
                  <img src={user.profilePicture} alt="friend" className="rightbarProfileImg" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">{user.username}</span>
              </li>
    </div>
  )
}
