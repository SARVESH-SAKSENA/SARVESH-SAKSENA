import { useState } from "react";
import ItemList from "./ItemList";
import MenuSubCategory from "./MenuSubCategory";

const ExpandedAccordian = (props) => {
  //This componenet shows expanded info part of accordian



  const item = props.item;
  console.log(item);

   if(item?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"){
    return (
      <div>
        <div>
          {item?.categories.map((c) => (
            <MenuSubCategory data={c} key={c?.categoryId} />
          ))}
        </div>
      </div>
    );
   }
   else{
    return (
      <div>
        <h1><ItemList data = {item.itemCards}/></h1>
      </div>
    )
   }
};

export default ExpandedAccordian;
