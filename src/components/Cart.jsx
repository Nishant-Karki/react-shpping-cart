import { Button, Card, CardContent } from "@material-ui/core";
import React, { Component } from "react";

export class Cart extends Component {
  state = {
    showCheckout: false,
    name: "",
    email: "",
    address: "",
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
    };
    this.props.createOrder(order);
  };

  render() {
    const { cartItems, removeFromCart } = this.props;
    const totalItems = cartItems.map((item) => item.count);
    return (
      <div className="fontz">
        {cartItems.length === 0 ? (
          <div>Cart is Empty</div>
        ) : (
          <div>
            You have {totalItems.reduce((a, b) => a + b, 0)} in the cart.
          </div>
        )}
        <hr />
        <div className="mt-3">
          {cartItems.map((item, index) => (
            <div key={index} className="row">
              <div className="col-5 pr-0">
                <img src={item.image} className=" img-thumbnail mr-0" />
              </div>
              <div className="col-6 pl-0 text-center mt-2">
                {item.title}
                <div className=" d-flex justify-content-between h5 mt-2">
                  <span className="badge mt-2">
                    ${item.price} x {item.count}
                  </span>
                  <Button
                    color="secondary"
                    style={{ backgroundColor: "#ffcccb" }}
                    onClick={() => removeFromCart(item)}
                  >
                    <span className="fontz font-weight-bold">Remove</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length > 0 && (
          <div className="mt-4">
            <Card>
              <CardContent className="d-flex justify-content-between">
                <h6 className=" font-weight-bold mt-2 text-success">
                  Total Price : $
                  {cartItems.reduce((a, b) => a + b.price * b.count, 0)}{" "}
                </h6>
                <Button
                  onClick={() => this.setState({ showCheckout: true })}
                  style={{ color: "#008080", backgroundColor: "#CCF1D2" }}
                >
                  <span className="fontz font-weight-bold">Proceed</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
        <div className="mt-4">
          {this.state.showCheckout && (
            <Card>
              <CardContent>
                <form onSubmit={this.createOrder}>
                  <div className="form-group">
                    <label htmlFor="email" className="d-flex">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      className="form-control form-control-sm"
                      onChange={this.handleInput}
                    />
                  </div>
                  <div className="form-group">
                    <label className="d-flex" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      name="name"
                      className="form-control form-control-sm"
                      onChange={this.handleInput}
                    />
                  </div>
                  <div className="form-group">
                    <label className="d-flex" htmlFor="address">
                      Address
                    </label>
                    <input
                      type="text"
                      required
                      name="address"
                      className="form-control form-control-sm"
                      onChange={this.handleInput}
                    />
                  </div>

                  <div className="float-right mb-3">
                    <Button
                      type="submit"
                      style={{ color: "#008080", backgroundColor: "#CCF1D2" }}
                    >
                      <span className="fontz font-weight-bold">CheckOut</span>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;
