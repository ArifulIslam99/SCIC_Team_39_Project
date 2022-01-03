import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

const YourOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `https://secret-garden-17818.herokuapp.com/myorders?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
    // .then((data) => console.log(data))
  }, [user.email]);

  const deleteHandler = (id) => {
    console.log(id);
    const proceed = window.confirm(
      "Are you sure, you want to delete this order?"
    );
    if (proceed) {
      fetch(`https://secret-garden-17818.herokuapp.com/myorders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remainingOrders = orders.filter((order) => order._id !== id);
            console.log(remainingOrders);
            setOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <Container className="px-5" style={{ height: "800px", overflow: "scroll" }}>
      <div>
        <h3 className="text-center text-uppercase">
          Your <span className="text-danger">orders</span>
        </h3>
      </div>
      <div>
        <p className="fs-5 text-center text-dark mb-4 text-uppercase">
          total <strong className="text-danger">{orders.length}</strong> orders
        </p>
      </div>
      {/* <Row className="g-4">
        {orders.map((order) => (
          <Col key={order._id} xl={4} lg={4}>
            <Card>
              <Card.Img
                width="250"
                height="175"
                variant="top"
                src={order.singleProductImg}
              />
              <Card.Body className="text-center">
                <Card.Title>
                  {" "}
                  <span className="text-danger">
                    {order.singleProductName}
                  </span>{" "}
                </Card.Title>
                <span className="fs-5">{order.singleProductPrice}</span>
                <Card.Text>
                  <span className="text-danger">BOOKED BY</span> <br />{" "}
                  <i className="fas fa-user"></i> {order.userName}
                </Card.Text>
                <Button
                  onClick={() => deleteHandler(order._id)}
                  className="text-center btn-danger px-4"
                  size="sm"
                >
                  Cancel
                </Button>
              </Card.Body>
              <Card.Footer
                style={{ backgroundColor: "#e0e0eb" }}
                className="text-center"
              >
                <small className="text-muted">
                  {order.bookedproductStatus}
                </small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row> */}
      <>
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Secondary Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="success" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Success Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="danger" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Danger Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="warning" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Warning Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="info" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Info Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="dark" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Dark Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="light" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Light Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </>
    </Container>
  );
};

export default YourOrders;
