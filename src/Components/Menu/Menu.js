import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import DISHES from "../../Data/dishes";
import NavBar from "../Shared/NavBar/NavBar";
import DishDetail from "./DishDetail";
import MenuItems from "./MenuItems";

const Menu = () => {
  const [dish, setDish] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);
  const [modal, setModal] = useState(false);
  console.log(setDish);
  
  const ToggleModal =() =>{
    setModal(!modal)
  }
  const selectItem = (item) => {
    setSelectedDish(item);
    setModal(!modal);
  };

  let selectedDishDetail = null;
  if (selectedDish != null) {
    selectedDishDetail = <DishDetail dish={selectedDish}></DishDetail>;
  }

  return (
    <div>
      <NavBar></NavBar>
      <div className="container">
        <div className="row">
            {dish.map((dish) => (
              <MenuItems dish={dish} selectItem={() => selectItem(dish)} key={dish.id}>
              </MenuItems>
            ))}
          {/* PopUp */}
          <Modal isOpen={modal} onClick={ToggleModal} style={{marginTop: "70px"}}>
            <ModalBody>{selectedDishDetail}</ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={ToggleModal}>Close</Button>
            </ModalFooter>
          </Modal>

        </div>
      </div>
    </div>
  );
};

export default Menu;
