import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";

import AddReview from "./AddReview/AddReview";
import AddNewProduct from "./AddNewProduct/AddNewProduct";
import ManageAllOrders from "./ManageAllOrders/ManageAllOrders";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import Payment from "./Payment/Payment";
import ManageAllProducts from "./ManageAllProducts/ManageAllProducts";
import "./Dashboard.css";
import MyOrders from "./MyOrders/MyOrders";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <div className="dashboard-text pt-4">
        <span className="text-uppercase">DashBoard</span>
      </div>
      <hr className="new mb-4" />
      <Container className="mt-2">
        <div className="d-flex">
          <div className="side-menu d-flex justify-content-center align-items-center px-3 mb-5">
            <Nav className="d-grid">
              <NavLink
                activeClassName="dashboard-navText-active"
                className="dashboard-navText mb-5 text-decoration-none text-uppercase"
                to={`${url}/myorders`}
              >
                <div className="icons">
                  <i class="fas fa-shopping-cart"></i>
                </div>{" "}
                <span className="d-navText">My Orders</span>
              </NavLink>

              <NavLink
                activeClassName="dashboard-navText-active"
                className="dashboard-navText mb-5 text-decoration-none text-uppercase"
                to={`${url}/payment`}
              >
                <div className="icons">
                  <i class="fas fa-dollar-sign"></i>
                </div>{" "}
                <span className="d-navText">Payment</span>
              </NavLink>

              <NavLink
                activeClassName="dashboard-navText-active"
                className="dashboard-navText mb-5 text-decoration-none text-uppercase"
                to={`${url}/addreview`}
              >
                <div className="icons">
                  <i class="far fa-comment-alt"></i>
                </div>{" "}
                <span className="d-navText">Add Review</span>
              </NavLink>

              <NavLink
                activeClassName="dashboard-navText-active"
                className="dashboard-navText mb-5 text-decoration-none text-uppercase"
                to={`${url}/addnewproduct`}
              >
                <div className="icons">
                  <i class="fas fa-plus-square"></i>
                </div>{" "}
                <span className="d-navText">Add New Product</span>
              </NavLink>

              <NavLink
                activeClassName="dashboard-navText-active"
                className="dashboard-navText mb-5 text-decoration-none text-uppercase"
                to={`${url}/manageallproducts`}
              >
                <div className="icons">
                  <i class="fas fa-gem"></i>
                </div>{" "}
                <span className="d-navText pe-3">Manage All Products</span>
              </NavLink>

              <NavLink
                activeClassName="dashboard-navText-active"
                className="dashboard-navText mb-5 text-decoration-none text-uppercase"
                to={`${url}/manageallorders`}
              >
                <div className="icons">
                  <i class="fas fa-dolly"></i>
                </div>{" "}
                <span className="d-navText">Manage All Orders</span>
              </NavLink>

              <NavLink
                activeClassName="dashboard-navText-active"
                className="dashboard-navText text-decoration-none text-uppercase"
                to={`${url}/makeadmin`}
              >
                <div className="icons">
                  <i class="fas fa-user"></i>
                </div>{" "}
                <span className="d-navText">Make Admin</span>
              </NavLink>
            </Nav>
            {/* 1st div  */}
          </div>

          <div className="dashboard-section">
            <Switch>
              <Route exact path={path}>
                <MyOrders></MyOrders>
              </Route>

              <Route exact path={`${path}/myorders`}>
                <MyOrders></MyOrders>
              </Route>

              <Route path={`${path}/addreview`}>
                <AddReview></AddReview>
              </Route>

              <Route path={`${path}/payment`}>
                <Payment></Payment>
              </Route>

              <Route path={`${path}/addnewproduct`}>
                <AddNewProduct></AddNewProduct>
              </Route>

              <Route path={`${path}/manageallproducts`}>
                <ManageAllProducts></ManageAllProducts>
              </Route>

              <Route path={`${path}/manageallorders`}>
                <ManageAllOrders></ManageAllOrders>
              </Route>

              <Route path={`${path}/makeadmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
            </Switch>
            {/* 2nd div */}
          </div>

          {/* main div  */}
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
