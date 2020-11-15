import React, { Component } from "react";

import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";

import "./Products.css";

export default class Products extends Component {
  state = {
    product: null,
  };

  openModal = (product) => {
    this.setState({ product });
  };
  closeModal = () => {
    this.setState({ product: null });
  };
  render() {
    const { products, addToCart } = this.props;
    const { product } = this.state;
    console.log(products);
    return (
      <div className="row">
        <Fade bottom cascade>
          {products.map((product) => (
            <div key={product._id} className="col-md-4 col-sm-6">
              <Card className="mb-2  mt-2 border">
                <CardActionArea>
                  <CardMedia
                    // style={{ height: 200, width: 200, objectFit: "contain" }}
                    className="media rounded mx-auto d-block mt-3 mt-sm-4"
                    image={product.image}
                    title={product.title}
                    onClick={() => this.openModal(product)}
                  />
                </CardActionArea>
                <CardContent>
                  <h5 className="font">{product.title}</h5>
                  <h6>$ {product.price}</h6>
                  <CardActions className="justify-content-center">
                    <Button
                      className="text-warning"
                      onClick={() => addToCart(product)}
                    >
                      <h5 className="font ">Add To Cart</h5>
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </div>
          ))}
        </Fade>
        {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <Button color="secondary" onClick={this.closeModal}>
                X
              </Button>
              <div className="container fontz">
                <div className="row">
                  <div className="col-md-6">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="col-md-6 ">
                    <p>
                      <strong>{product.title}</strong>
                    </p>
                    <p>{product.description}</p>
                    <p>
                      Available Sizes
                      {product.availableSizes.map((x) => (
                        <span>
                          <Button className="text-warning font-weight-bolder">
                            {x}
                          </Button>
                        </span>
                      ))}
                    </p>
                    <p className="d-flex justify-content-between ">
                      ${product.price}
                      <Button
                        className="text-warning"
                        onClick={() => addToCart(product)}
                      >
                        <h5 className="font ">Add To Cart</h5>
                      </Button>
                    </p>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
