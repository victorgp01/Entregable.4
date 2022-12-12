import { useEffect, useState } from "react";
import "./App.css";
import FormUser from "./components/FormUser";
import UserCard from "./components/UserCard";
import useCrud from "./hooks/useCrud";

//https://users-crud.academlo.tech/swagger/

function App() {
  const [closeFrom, setCloseFrom] = useState(true);
  const { users, getAllUsers, createNewUser, deleteUserById, updateUserByid } =
    useCrud();

  const [updataInfo, setUpdataInfo] = useState();

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <h1 className="form__title">Create a new user</h1>
      <button onClick={() => setCloseFrom(false)} className="app_btn">
        Open Form
      </button>
      <div className={`form_container ${closeFrom && "close_form"}`}>
        <FormUser
          createNewUser={createNewUser}
          updataInfo={updataInfo}
          updateUserByid={updateUserByid}
          setUpdataInfo={setUpdataInfo}
          setCloseFrom={setCloseFrom}
        />
      </div>
      <div className="user-container">
        {users?.map((user) => (
          <UserCard
            user={user}
            key={user.id}
            deleteUserById={deleteUserById}
            setUpdataInfo={setUpdataInfo}
            setCloseFrom={setCloseFrom}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
