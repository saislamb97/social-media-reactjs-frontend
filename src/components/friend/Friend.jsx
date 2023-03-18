import './friend.css'

export default function Friend({user}) {
  return (
    <div>
        <li className="leftbarFriend">
            <img src={user.profilePicture} alt="person" className="leftbarFriendImg" />
            <span className="leftbarFriendName">{user.username}</span>
        </li>
    </div>
  )
}
