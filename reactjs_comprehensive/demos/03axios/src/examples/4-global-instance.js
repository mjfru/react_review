import { useEffect } from "react";
import axios from 'axios';

const productsUrl = "https://www.course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

const GlobalInstance = () => {
	const fetchData = async () => {
    try {
      const response1 = await axios(productsUrl);
      const response2 = await axios(randomUserUrl);
      console.log(response1);
      
    } catch (e) {
      
    }
		console.log("global axios instance");
	};

	useEffect(() => {
		fetchData();
	}, []);

	return <h2 className="text-center">global instance</h2>;
};
export default GlobalInstance;
