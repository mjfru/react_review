import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  // console.log(menu);
  
  return <ul className="px-2 divide-y divide-stone-200">
    {menu.map((pizza) => (
      <MenuItem pizza={pizza} key={pizza.id}/> ))}
  </ul>
}

// 1. Creating the Loader function (convention to put it in the same file)
export async function loader() {
  // Function to retrieve this function is already written in the apiRestaurant file.
  const menu = await getMenu();
  return menu;
}

export default Menu;
