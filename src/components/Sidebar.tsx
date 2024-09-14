import { Link } from "react-router-dom";

export const Sidebar = () => {
   return (
      <ul>
         <li>
            {/* <a href='/' className='nav-link'>Dashboard</a> */}
            <Link
               to="/"
               className="nav-link"
            >
               Dashboard
            </Link>
         </li>
         <li>
            {/* <a href='/orders' className='nav-link'>Orders</a> */}
            <Link
               to="/orders"
               className="nav-link"
            >
               Orders
            </Link>
         </li>
         <li>
            {/* <a href='/products' className='nav-link'>Products</a> */}
            <Link
               to="/products"
               className="nav-link"
            >
               Products
            </Link>
         </li>
         <li>
            {/* <a href='/customers' className='nav-link'>Customers</a> */}
            <Link
               to="/customers"
               className="nav-link"
            >
               Customers
            </Link>
         </li>
      </ul>
   );
};
