import { useEffect } from "react";

const About = () => {

      useEffect(() => {
    fetchData();
  }, []);


    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
    };

    return (
        <div>
            <h1>About Us</h1>
            <h3>This is a react app</h3>
        </div>
    )
}

export default About;