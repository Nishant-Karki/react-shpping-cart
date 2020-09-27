import { Button, Card, CardContent, Typography } from "@material-ui/core";
import React, { Component } from "react";

export class Cart extends Component {
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
                <div className="mt-2">
                  <span className="badge ">
                    $ {item.price} x {item.count}{" "}
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
                  style={{ color: "#008080", backgroundColor: "#CCF1D2" }}
                >
                  <span className="fontz font-weight-bold">Proceed</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
