import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/formUser.css";

const FormUser = ({
  createNewUser,
  updataInfo,
  updateUserByid,
  setUpdataInfo,
  setCloseFrom,
}) => {
  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    reset(updataInfo);
  }, [updataInfo]);

  const Sumit = (data) => {
    if (updataInfo) {
      updateUserByid(updataInfo.id, data);
      setUpdataInfo();
    } else {
      createNewUser(data);
    }
    setCloseFrom(true);

    reset({
      email: "",
      first_name: "",
      last_name: "",
      birthday: "",
      password: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit(Sumit)}>
      <div onClick={() => setCloseFrom(true)} className="form_x">
        x
      </div>
      <h2 className="form_title">
        {updataInfo ? "Update User" : "Create User"}
      </h2>
      <div className="form_div">
        <label className="form_label" htmlFor="email">
          Email
        </label>
        <input
          className="form_input"
          type="email"
          id="email"
          {...register("email")}
        />
      </div>
      <div className="form_div">
        <label className="form_label" htmlFor="password">
          Password
        </label>
        <input
          className="form_input"
          type="password"
          id="password"
          {...register("password")}
        />
      </div>
      <div className="form_div">
        <label className="form_label" htmlFor="first_name">
          First name
        </label>
        <input
          className="form_input"
          type="first_name"
          id="first_name"
          {...register("first_name")}
        />
      </div>
      <div className="form_div">
        <label className="form_label" htmlFor="last_name">
          Last name
        </label>
        <input
          className="form_input"
          type="last_name"
          id="last_name"
          {...register("last_name")}
        />
      </div>
      <div className="form_div">
        <label className="form_label" htmlFor="birthday">
          Birthday
        </label>
        <input
          className="form_input"
          type="date"
          id="birthday"
          {...register("birthday")}
        />
      </div>
      <button className="form_btn">Submit</button>
    </form>
  );
};

export default FormUser;
