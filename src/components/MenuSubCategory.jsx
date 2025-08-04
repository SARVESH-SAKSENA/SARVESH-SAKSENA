import { useState } from "react";
import ItemList from "./ItemList";

//control of accordian expansion is within the component

const MenuSubCategory = (props) => { // sub category is uncontrolled component i.e. any no. of accordian can be expanded at a time

    const c = props?.data;

      const [expand, setExpand] = useState(false);

      const handleClick = () => {
        setExpand(!expand);
      };

    return (
      <div>
        <div
          className="flex justify-between cursor-pointer bg-gray-200 w-11/12 mx-auto p-4 my-4 rounded-2xl shadow-xl"
          onClick={handleClick}
        >
          <h3>{c.title}</h3>
          <h3>⬇️</h3>
        </div>
        <div>{expand && <ItemList data={c.itemCards} />}</div>
      </div>
    );
}

export default MenuSubCategory;