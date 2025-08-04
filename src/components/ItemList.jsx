import { APP_URL } from "../utils/constant";

const ItemList = (props) => { //This componenet shows expanded info part of accordian

    const item = props?.data;
    // console.log(item);

    return (
      <div>
        {item.map((c) => (
          <div
            className="flex w-10/12 mx-auto p-4  border-b-2"
            key={c?.card?.info?.id}
          >
            <div className="w-9/12">
              <h3 className="text-xl font-semibold py-1">
                {c?.card?.info?.name}
              </h3>
              <h4 className="text-lg">
                ₹
                {c?.card?.info?.defaultPrice
                  ? c?.card?.info?.defaultPrice / 100
                  : c?.card?.info?.price / 100}
              </h4>
              <h4>{c?.card?.info?.ratings?.aggregatedRating?.rating}</h4>
              <p className="w-11/12 truncate"> {c?.card?.info?.description}</p>
            </div>
            <div className="f">
              <div className=" absolute">
                <button className="bg-black text-white m-auto px-2 py-1 rounded-xl">
                  Add +
                </button>
              </div>
              <img
                src={APP_URL + c?.card?.info?.imageId}
                className="w-36 rounded-3xl h-32"
              />
            </div>
          </div>
        ))}
      </div>
    );
}

export default ItemList;