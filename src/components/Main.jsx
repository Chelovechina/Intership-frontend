import React from "react";
import { useState } from "react";
import AdminContainer from "./Admin/AdminContainer";
import MentorContainer from "./Mentor/MentorContainer";
import CourseContainer from "./Course/CourseContainer";

const Main = () => {
  const [status, setStatus] = useState("user");

  const changeStatus = (statusType) => {
    switch (statusType) {
      case "user":
        setStatus("user");
        break;

      case "admin":
        setStatus("admin");
        break;

      case "mentor":
        setStatus("mentor");
        break;

      default:
        break;
    }
  };

  return (
    <>
      {status === "admin" ? (
        <AdminContainer />
      ) : status === "mentor" ? (
        <MentorContainer />
      ) : (
        <CourseContainer />
      )}
      <button onClick={() => changeStatus("user")} className="btn">
        User
      </button>
      <button onClick={() => changeStatus("admin")} className="btn">
        Admin
      </button>
      <button onClick={() => changeStatus("mentor")} className="btn">
        Mentor
      </button>
    </>
  );
};

export default Main;