import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://secret-garden-17818.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Admin added successfully!",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });

    e.preventDefault();
  };

  return (
    <div style={{ height: "600px" }}>
      <h3 className="text-center text-uppercase">
        Make <span className="text-danger">admin</span>
      </h3>
      <Container className="d-flex justify-content-center">
        <form
          onSubmit={handleAdminSubmit}
          className="mt-5 w-50 d-flex justify-content-center"
        >
          <div className="input-group mb-3">
            <input
              className="form-control"
              placeholder="Enter Email"
              type="email"
              onBlur={handleOnBlur}
            />
            <button className="btn btn-danger" type="submit">
              Approve
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default MakeAdmin;
