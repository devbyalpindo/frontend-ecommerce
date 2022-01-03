import { useState } from "react";
import { login } from "../../api/user";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { IconButton } from "@mui/material";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function LoginModal({ show }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [body, setBody] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setBody({ ...body, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(JSON.stringify(body));
    if (response.status === 200) {
      const token = response.data.token;
      const decoded = jwt_decode(token);
      Cookies.set("x-token", token);
      toast.success("login berhasil");

      if (decoded?.data.level === 2) {
        navigate("/admin");
      } else if (decoded?.data.level === 3) {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } else {
      toast.error("username / password salah !");
    }
  };

  return (
    <div>
      <IconButton>
        <div className='rounded-full border border-gray-500 w-8 h-8 flex flex-col justify-center items-center'>
          <PersonOutlineOutlinedIcon
            onClick={handleOpen}
            className='font-semibold'
          />
        </div>
      </IconButton>

      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <Box sx={style} className='rounded-xl '>
            <form onSubmit={handleSubmit}>
              <div className='flex justify-end -mt-5 -mr-5'>
                <IconButton
                  onClick={handleClose}
                  style={{ textAlign: "right" }}>
                  <CloseIcon />
                </IconButton>
              </div>
              <div className='flex flex-col items-center justify-center space-y-3'>
                <img
                  src='https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flogo.svg&w=96&q=75'
                  alt=''
                />

                <p sx={{ mt: 2 }} className='text-sm text-center'>
                  Masuk akun kamu
                </p>
              </div>

              <div className='flex flex-col justify-center space-y-3 mt-5'>
                <div className='flex flex-col space-y-1 text-sm md:text-md'>
                  <label>Email</label>
                  <input
                    type='email'
                    name='email'
                    value={body.email}
                    onChange={handleChange}
                    className='border md:w-60 border-gray-300 rounded-md p-2 focus:outline-gray-500'
                  />
                </div>
                <div className='flex flex-col space-y-1 text-sm md:text-md'>
                  <label>Kata Sandi</label>
                  <input
                    type='password'
                    name='password'
                    value={body.password}
                    onChange={handleChange}
                    className='border md:w-60 border-gray-300 rounded-md p-2 focus:outline-gray-500'
                  />
                </div>
              </div>
              <button
                type='submit'
                className='text-white bg-gray-800 p-3 rounded-md w-full mt-5 text-sm md:text-md'>
                Masuk
              </button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
