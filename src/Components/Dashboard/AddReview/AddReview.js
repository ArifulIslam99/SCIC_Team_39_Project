import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./AddReview.css";
const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://secret-garden-17818.herokuapp.com//reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          reset();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your review has been posted.",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };

  return (
    <div className="pb-5">
      <h3 className="dashboard-sectionTitle text-center text-dark mb-5 text-uppercase">
        add <span className="text-danger">review</span>
      </h3>

      <Form
        className="d-flex flex-column addReview-form mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          style={{ outline: "none" }}
          className="mb-3 py-2 px-3"
          placeholder="Name"
          {...register("userName")}
        />
        <input
          style={{ outline: "none" }}
          className="mb-3 py-2 px-3"
          placeholder="Profile Image URL"
          {...register("userImg")}
        />

        <textarea
          style={{ outline: "none" }}
          maxLength="150"
          className="mb-3 py-2 px-3"
          placeholder="Review 150 Characters Only"
          {...register("userReview")}
        />

        <input
          style={{ outline: "none" }}
          className="mb-3 py-2 px-3 w-50"
          type="number"
          min="1"
          max="5"
          placeholder="* Ratings"
          {...register("userRating")}
        />

        <Button className="w-25" variant="danger" type="submit">
          ADD
        </Button>
      </Form>
    </div>
  );
};

export default AddReview;
