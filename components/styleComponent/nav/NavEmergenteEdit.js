"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
// import HomeNav from '@/components/Home/HomeNav';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -40%)",
  width: 900,
  height: 450,

  overflowY: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NavEmergenteEdit() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="flex justify-center w-full font-semibold mb-5 font-bold text-2xl mt-12">
        Nav
      </div>

      <div className="w-full flex justify-center">
        <div className=""></div>
        <Button
          onClick={handleOpen}
          className="bg-black text-white z-10"
          variant="outlined"
        >
          Editar Menu de Navegacion
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Nav Menu
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {/* <HomeNav></HomeNav> */}
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}
