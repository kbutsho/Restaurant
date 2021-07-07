import React from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const MenuItems = (props) => {
  const { dish, image, name } = props.dish;
  return (
    <div className="col-md-4">
      <Card style={{ margin: "20px 0px", textAlign:"center", boxShadow:"5px 5px 5px gray", borderRadius: "10px" }}>
        <CardBody onClick={props.selectItem}>
          <CardImg width="100%" alt={dish} src={image}
            style={{ opacity: "0.5", height: "200px", border: "2px solid red", borderRadius: "10px" }}>
          </CardImg>
          <CardImgOverlay className="d-flex justify-content-center align-items-center fw-bold">
            <CardTitle style={{ cursor: "pointer" }} >
              {name}
            </CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  );
};

export default MenuItems;
