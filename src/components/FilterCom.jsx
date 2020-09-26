import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React, { Component } from "react";

export class FilterCom extends Component {
  render() {
    const { size, count, sort, filterProducts, sortProducts } = this.props;
    return (
      <div className="container">
        <div className="row">
          {/* Sort by High Low */}
          <div className="col-sm-4">
            <FormControl style={{ minWidth: 100 }}>
              <InputLabel id="order-label">Order</InputLabel>
              <Select
                labelId="order-label"
                id="order-select"
                value={sort}
                onChange={sortProducts}
              >
                <MenuItem value="Latest">Latest</MenuItem>
                <MenuItem value="Highest">Highest</MenuItem>
                <MenuItem value="Lowest">Lowest</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* Number of Products */}
          <div className="col-sm-4 pt-4">{count} Products</div>
          {/* Sort By Size */}
          <div className="col-sm-4">
            <FormControl style={{ minWidth: 100 }}>
              <InputLabel id="size-label">Filter</InputLabel>
              <Select
                value={size}
                onChange={filterProducts}
                labelId="size-label"
                id="size-select"
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="X5">X5</MenuItem>
                <MenuItem value="XS">XS</MenuItem>
                <MenuItem value="S">S</MenuItem>
                <MenuItem value="M">M</MenuItem>
                <MenuItem value="XL">XL</MenuItem>
                <MenuItem value="XXL">XXL</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default FilterCom;
