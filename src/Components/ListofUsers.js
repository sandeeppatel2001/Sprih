import Card from "./Card.js";

export default function ListOfUsers({ users }) {
  function clickedUser(ind) {
    let clickUser = document.querySelectorAll(`.User_Info`);
    let click = document.querySelectorAll(`.Table_item`);
    if (!click[ind].classList.contains("active")) {
      let active = document.querySelector(".active");
      if (active) {
        active.classList.toggle("active");
      }
      let activeUser = document.querySelectorAll(".User_Info");
      if (activeUser) {
        // console.log(activeUser, activeUser.length);
        for (let i = 0; i < activeUser.length; i++) {
          if (!activeUser[i].classList.contains("notactive")) {
            activeUser[i].classList.toggle("notactive");
          }
        }
      }
      click[ind].classList.toggle("active");
      clickUser[ind].classList.toggle("notactive");
    } else {
      click[ind].classList.toggle("active");
      clickUser[ind].classList.toggle("notactive");
    }
  }

  return (
    <div className="Table_user">
      <div className="Table_head">
        <div>ID</div>
        <div>NAME</div>
        <div>DESIGNATION</div>
      </div>
      {users.map((user, ind) => {
        return (
          <div
            className="Table_users"
            key={"user" + user.id}
            onClick={() => clickedUser(ind)}
          >
            <div className="Table_item">
              <div>{user.id}</div>
              <div>
                {user.firstName} {user.lastName}
              </div>
              <div>{user.designation}</div>
            </div>
            <div className="User_Info notactive">
              <Card user={user} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
