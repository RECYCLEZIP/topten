import * as React from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

import { delData } from "../../api";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import {
  ModalGreenButton,
  ModalGrayButton,
} from "../../styles/qnaStyles/QnADescriptionStyle";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40vw",
  height: "4rem",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "1rem",
  textAlign: "center",

  "@media (min-width: 768px)": {
    height: "3.5rem",
  },
};

function QnAModal({ open, setOpen }: any) {
  const navigate = useNavigate();

  const handleClose = () => setOpen(false);

  const id = useParams().id;

  const onClickDelete = async () => {
    try {
      await delData(`posts/${id}`);

      navigate(`/qna`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            sx={{ fontSize: "0.8rem", fontWeight: 700 }}
          >
            게시글을 삭제하시겠습니까?
          </Typography>
          <ModalGrayButton onClick={handleClose}>취소</ModalGrayButton>
          <ModalGreenButton onClick={onClickDelete}>삭제</ModalGreenButton>
        </Box>
      </Modal>
    </div>
  );
}

export default QnAModal;
