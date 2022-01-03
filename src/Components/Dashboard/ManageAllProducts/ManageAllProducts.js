import React from "react";
import { Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";

const ManageAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://secret-garden-17818.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //Delete Orders
  const deleteHandler = (id) => {
    console.log(id);
    const proceed = window.confirm(
      "Are you sure, you want to delete this Product?"
    );
    if (proceed) {
      fetch(`https://secret-garden-17818.herokuapp.com/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remainingProducts = products.filter(
              (orders) => orders._id !== id
            );
            console.log(remainingProducts);
            setProducts(remainingProducts);
          }
        });
    }
  };

  return (
    <div className="pb-5">
      <h3 className="text-center text-uppercase">
        Manage All <span className="text-danger">Products</span>
      </h3>
      <h5 className="text-center text-uppercase mt-3 mb-4">
        Total <strong className="text-danger">{products.length}</strong> product
      </h5>
      <div>
        <Table bordered hover>
          <thead className="text-uppercase">
            <tr>
              <th className="text-center p-3">Product Name</th>
              <th className="text-center p-3">Product Model</th>
              <th className="text-center p-3">Price</th>
              <th className="text-center p-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} product={product}>
                <td className="text-center">{product.productName}</td>
                <td className="text-center">{product.productModel}</td>
                <td className="text-center">{product.productPrice}</td>
                <td className="text-center">
                  <div className="text-center">
                    <Button
                      onClick={() => deleteHandler(product._id)}
                      variant="danger w-75"
                      size="sm"
                    >
                      Delete
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

export default ManageAllProducts;
