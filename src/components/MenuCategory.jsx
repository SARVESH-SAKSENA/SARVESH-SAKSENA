import { useState } from "react";
import ExpandedAccordian from "./ExpandedAccordian";

//This category has controlled component accordian i.e. max one accordian expanded at a time expanded accordian control is with parent

const MenuCategory = (props) => {
  //This component shows heading of accordian and calls itemList which shows info of accordian
  const item = props?.item?.card?.card;
  // console.log(item);

  const showItem = props.showItem;

  const setShowIndex = props.setShowIndex;

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div
        className="bg-gray-200 p-4 my-4 mb-0 mx-auto cursor-pointer rounded-2xl shadow-xl w-7/12 flex justify-between font-serif font-bold"
        onClick={handleClick}
      >
        <h1>{item?.title}</h1>
        <h1>⬇️</h1>
      </div>
      <div className="bg-gray-100 w-7/12 mx-auto mt-0 rounded-2xl">
        {showItem && <ExpandedAccordian item={item} />}
      </div>
    </div>
  );
};

export default MenuCategory;
