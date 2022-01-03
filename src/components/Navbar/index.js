import LoginModal from "./LoginModal";
import SearchModal from "./SearchModal";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { IconButton } from "@mui/material";

const Navbar = () => {
  return (
    <div className='flex items-center sticky h-16 bg-white justify-between md:px-5 pl-5 pr-3 shadow-md'>
      <div>
        <img
          src='https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flogo.svg&w=96&q=75'
          alt=''
        />
      </div>
      <div className='flex items-center font-semibold md:space-x-5 space-x-1'>
        <SearchModal />

        <div className={`relative`}>
          {/* <div className='flex  justify-center items-center right-0 rounded-full text-white absolute p-1 bg-gray-500 h-5 w-5'>
            <p className='text-xs'>0</p>
          </div> */}
          {/* <IconButton>
            <ShoppingBagOutlinedIcon />
          </IconButton> */}
        </div>
        <LoginModal />
      </div>
    </div>
  );
};

export default Navbar;
