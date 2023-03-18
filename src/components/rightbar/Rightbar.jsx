import "./rightbar.css";

export default function Rightbar() {
    return (
      <div className="rightbar">
        <div className="rightbarWrapper">
            <div className="birthdayContainer">
              <img className="birthdayImg" src="assets/gift.png" alt="Birthday" />
              <span className="birthdayText">
                <b>Saiful Islam</b> and <b>3 other friends</b> have a birhday today.
              </span>
            </div>
            <img className="rightbarAd" src="assets/post/8.jpeg" alt="Rightbar" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
              <li className="rightbarFriend">
                <div className="rightbarProfileImgContaner">
                  <img src="/assets/person/6.jpeg" alt="friend" className="rightbarProfileImg" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">Saiful Islam</span>
              </li>
            </ul>
            <ul className="rightbarFriendList">
              <li className="rightbarFriend">
                <div className="rightbarProfileImgContaner">
                  <img src="/assets/person/9.jpeg" alt="friend" className="rightbarProfileImg" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">Saiful Islam</span>
              </li>
            </ul>
            <ul className="rightbarFriendList">
              <li className="rightbarFriend">
                <div className="rightbarProfileImgContaner">
                  <img src="/assets/person/1.jpeg" alt="friend" className="rightbarProfileImg" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">Saiful Islam</span>
              </li>
            </ul>
            <ul className="rightbarFriendList">
              <li className="rightbarFriend">
                <div className="rightbarProfileImgContaner">
                  <img src="/assets/person/1.jpeg" alt="friend" className="rightbarProfileImg" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">Saiful Islam</span>
              </li>
            </ul>
        </div>
      </div>
    )
}
