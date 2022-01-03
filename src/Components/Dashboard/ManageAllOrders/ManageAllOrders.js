import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const ManageAllOrders = () => {
  const [allorders, setAllOrders] = useState([]);
  const [status, setStatus] = useState("Shipped");
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch("https://secret-garden-17818.herokuapp.com/allorders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [reload]);

  //Approve Order Change Status
  const handleUpdate = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to approve this order for shipping?"
    );
    if (proceed) {
      setStatus(status);
      fetch(`https://secret-garden-17818.herokuapp.com/updateStatus/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.matchedCount) {
            setReload(!reload);
          }
        });
    }
  };

  //Delete Orders
  const deleteHandler = (id) => {
    console.log(id);
    const proceed = window.confirm(
      "Are you sure, you want to delete this order?"
    );
    if (proceed) {
      fetch(`https://secret-garden-17818.herokuapp.com/allorders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remainingOrders = allorders.filter(
              (orders) => orders._id !== id
            );
            console.log(remainingOrders);
            setAllOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <div className="pb-5">
      <h3 className="text-center text-uppercase">
        Manage All <span className="text-danger">orders</span>
      </h3>
      <h5 className="text-center text-uppercase mt-3 mb-4">
        Total <strong className="text-danger">{allorders.length}</strong> orders
      </h5>
      <div>
        <Table bordered hover>
          <thead className="text-uppercase">
            <tr>
              <th className="text-center p-3">Jewelery Name</th>
              <th className="text-center p-3">Price</th>
              <th className="text-center p-3">Ordered By</th>
              <th className="text-center p-3">Status</th>
              <th className="text-center p-3">Approve / Cancel</th>
            </tr>
          </thead>
          <tbody>
            {allorders.map((orders) => (
              <tr key={orders._id} orders={orders}>
                <td className="text-center">{orders.singleProductName}</td>
                <td className="text-center">{orders.singleProductPrice}</td>
                <td className="text-center text-danger">{orders.userName}</td>
                <td className="text-center">{orders.bookedproductStatus}</td>
                <td className="text-center">
                  <div className="d-flex">
                    <Button
                      onClick={() => handleUpdate(orders._id)}
                      variant="outline-success w-100 me-2"
                      size="sm"
                    >
                      Approve
                    </Button>
                    <Button
                      onClick={() => deleteHandler(orders._id)}
                      variant="danger w-100"
                      size="sm"
                    >
                      Cancel
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
