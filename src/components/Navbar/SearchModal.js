import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

const style = {
  position: "absolute",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [search, setSearch] = useState("");
  const lastSearch = ["Baju", "Celana", "Sepatu"];

  return (
    <div>
      <IconButton onClick={handleOpen} fontSize="small">
        <SearchIcon />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={style}
            className={`rounded-xl text-gray-500  transition-all duration-500 ${
              search ? "top-28" : "top-12"
            }`}
          >
            <div className="flex items-center p-1 space-x-3">
              <input
                type="text"
                value={search}
                placeholder="Cari produk"
                onChange={(e) => setSearch(e.target.value)}
                className="outline-none pl-3 md:w-[500px] w-60"
              />
              <IconButton>
                <SearchIcon />
              </IconButton>
            </div>
            {search && (
              <>
                <hr />
                <div className={`${search ? "h-full" : "h-0"} h-32 p-3`}>
                  <p>Pencarian terakhir</p>
                  <ul className="mt-2 space-y-2  text-sm">
                    {lastSearch.map((data) => (
                      <li>{data}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
