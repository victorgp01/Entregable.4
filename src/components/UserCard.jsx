import React from "react";
import "./styles/userCard.css";
import swal from "sweetalert";

const UserCard = ({ user, deleteUserById, setUpdataInfo, setCloseFrom }) => {
  const handleEdit = () => {
    setUpdataInfo(user);
    setCloseFrom(false);
  };

  return (
    <article className="card">
      <h3 className="card_title">
        {user.first_name} {user.last_name}
      </h3>
      <ul className="card_body">
        <li className="card_item">
          <span className="card_span">Email:</span>
          {user.email}
        </li>
        <li className="card_item">
          <span className="card_span">Birthday:</span>
          {user.birthday}
        </li>
      </ul>
      <footer className="card_footer">
        <button
          className="card_bth card_btn_trash"
          onClick={() => deleteUserById(user.id)}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>

        <button className="card_bth card_btn_edit" onClick={handleEdit}>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
