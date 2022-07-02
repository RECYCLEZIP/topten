import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { GoLoginButton, GoGameButton } from "../../styles/gameStyles/game";
import { useNavigate } from "react-router";

// Go game modal style
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  minHeight: "4rem",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "1rem",
  p: 4,
  textAlign: "center",
};

// If not login, open go game modal
function GoGameModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const navigate = useNavigate();
  const handleClose = () => onClose();

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
            sx={{ fontWeight: 700, color: "#dd0000" }}
          >
            WARNING!
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 1, fontWeight: 700, fontSize: "0.8rem" }}
          >
            랭킹 기록을 하고 싶다면 로그인하세요
          </Typography>
          <GoLoginButton onClick={() => navigate("/users/login")}>
            로그인하기
          </GoLoginButton>
          <GoGameButton onClick={() => navigate("/game/play")}>
            그냥하기
          </GoGameButton>
        </Box>
      </Modal>
    </div>
  );
}

export default GoGameModal;
