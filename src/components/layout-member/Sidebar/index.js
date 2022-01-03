import Cookies from "js-cookie";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  // const useLocation = useuseLocation();
  const handleLogout = () => {
    console.log("logout");
    //   swal({
    //     title: "Are you sure logout?",
    //     icon: "warning",
    //     buttons: ["cancel", "logout"],
    //     dangerMode: true,
    //   }).then(async (logout) => {
    //     if (logout) {
    //       Cookies.remove("x-token");
    //       toast.success("Berhasil Logout");
    //       useLocation.push("/");
    //     }
    //   });
  };
  return (
    <aside className='z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0'>
      <div className='py-4 text-gray-500 dark:text-gray-400'>
        <Link to='/member'>
          <h1 className='text-center text-2xl font-bold'>ADMIN TSP</h1>
        </Link>
        <ul className='mt-6'>
          <li className='relative px-6 py-3'>
            {location.pathname == "/admin" ? (
              <span
                className='absolute inset-y-0 left-0 w-1 bg-indigo-500 rounded-tr-lg rounded-br-lg'
                aria-hidden='true'></span>
            ) : (
              <></>
            )}
            <Link to='/admin'>
              <a className='inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100'>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'></path>
                </svg>
                <span className='ml-4'>Dashboard</span>
              </a>
            </Link>
          </li>
        </ul>
        <ul>
          <li className='relative px-6 py-3'>
            {location.pathname == "/admin/order" ? (
              <span
                className='absolute inset-y-0 left-0 w-1 bg-indigo-500 rounded-tr-lg rounded-br-lg'
                aria-hidden='true'></span>
            ) : (
              <></>
            )}
            <Link to='/admin/order'>
              <a className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'></path>
                </svg>
                <span className='ml-4'>Pesanan</span>
              </a>
            </Link>
          </li>
          <li className='relative px-6 py-3'>
            {location.pathname == "/admin/product" ? (
              <span
                className='absolute inset-y-0 left-0 w-1 bg-indigo-500 rounded-tr-lg rounded-br-lg'
                aria-hidden='true'></span>
            ) : (
              <></>
            )}
            <Link to='/admin/product'>
              <a className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'></path>
                </svg>
                <span className='ml-4'>Produk</span>
              </a>
            </Link>
          </li>
          <li className='relative px-6 py-3'>
            {location.pathname == "/admin/kategori" ? (
              <span
                className='absolute inset-y-0 left-0 w-1 bg-indigo-500 rounded-tr-lg rounded-br-lg'
                aria-hidden='true'></span>
            ) : (
              <></>
            )}
            <Link to='/admin/kategori'>
              <a className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'></path>
                </svg>
                <span className='ml-4'>Kategori</span>
              </a>
            </Link>
          </li>
          <li className='relative px-6 py-3'>
            {location.pathname == "/admin/seo" ? (
              <span
                className='absolute inset-y-0 left-0 w-1 bg-indigo-500 rounded-tr-lg rounded-br-lg'
                aria-hidden='true'></span>
            ) : (
              <></>
            )}
            <Link to='/admin/seo'>
              <a className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'></path>
                </svg>
                <span className='ml-4'>SEO</span>
              </a>
            </Link>
          </li>
        </ul>
        <div className='px-6 my-6'>
          <button
            onClick={handleLogout}
            className='flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-indigo-500 border border-transparent rounded-lg active:bg-indigo-500 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple'>
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
