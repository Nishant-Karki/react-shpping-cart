import React, { Component } from "react";

import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import "./Products.css";

export default class Products extends Component {
  render() {
    const { products, addToCart } = this.props;
    console.log(products);
    return (
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-md-4 col-sm-6">
            <Card className="mb-2  mt-2 border">
              <CardActionArea>
                <CardMedia
                  // style={{ height: 200, width: 200, objectFit: "contain" }}
                  className="media rounded mx-auto d-block mt-3 mt-sm-4"
                  image={product.image}
                  title={product.title}
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
      </div>
    );
  }
}
