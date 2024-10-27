
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/login">Login   </Link>
      <Link to="/dashboard">Dashboard    </Link>
      <Link to= "/admin">Admin   </Link>
      <Link to="/product">Products   </Link>
    </nav>
  );
};

export default Navbar;
