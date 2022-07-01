import { useState } from "react";
import { useRecoilState } from "recoil";
import { putData } from "../../api";
import { customToastify } from "../../components/customToastify";
import { userEditState, userState } from "../../stores/atoms";
import { Button } from "../../styles/ButtonStyles";
import {
  EditUserInput,
  EditForm,
  CancelButton,
  EditButtons,
  EditTitle,
  EditText,
  EditInputContainer,
} from "../../styles/userStyles/userPage";
import { EachInput, CautionText } from "../../styles/userStyles/users";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "10rem",
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
  pb: 0,
  textAlign: "center",

  "@media (min-width: 768px)": {
    width: "20rem",
  },
};

function UserEdit() {
  const [user, setUser] = useRecoilState(userState);
  const [isEdit, setIsEdit] = useRecoilState(userEditState);
  const [editUserName, setEditUserName] = useState(user.username);
  const [password, setPassword] = useState("");
  const [comparePassword, setComparePassword] = useState("");
  const samePassword = password === comparePassword;
  const [editPassword, setEditPassword] = useState(false);

  const submitHandler = async (e: {
    preventDefault: () => void;
    target: any;
  }) => {
    e.preventDefault();
    try {
      if (editPassword) {
        if (password.length < 8 || !samePassword) return;
        await putData("users/update", {
          email: user.email,
          password,
          username: editUserName,
        });
        setUser((prev) => {
          return { ...prev, username: editUserName };
        });
      } else {
        await putData("users/update", {
          email: user.email,
          username: editUserName,
        });
        setUser((prev) => {
          return { ...prev, username: editUserName };
        });
      }
      customToastify("success", "변경 성공!");
      setIsEdit((prev) => !prev);
    } catch {
      customToastify("error", "변경 실패!");
    }
  };

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEditUserName(e.target.value);
  };

  const handleClose = () => setIsEdit(false);

  return (
    <div>
      <Modal
        open={isEdit}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditForm onSubmit={submitHandler}>
            <EachInput>
              <EditTitle>닉네임</EditTitle>
              <EditInputContainer>
                <EditUserInput
                  placeholder="닉네임"
                  value={editUserName}
                  onChange={onChangeHandler}
                ></EditUserInput>
                {editUserName !== undefined && editUserName.length < 3 && (
                  <CautionText>닉네임은 3자리 이상입니다.</CautionText>
                )}
              </EditInputContainer>
            </EachInput>
            <EachInput>
              <EditTitle>비밀번호 변경</EditTitle>
              <EditInputContainer>
                {editPassword ? (
                  <>
                    <EditUserInput
                      placeholder="비밀번호"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></EditUserInput>
                    <>
                      {password.length < 8 && (
                        <CautionText>비밀번호는 8자리 이상입니다.</CautionText>
                      )}
                    </>
                  </>
                ) : (
                  <EditText onClick={() => setEditPassword((prev) => !prev)}>
                    변경하기
                  </EditText>
                )}
              </EditInputContainer>
            </EachInput>
            {editPassword ? (
              <EachInput>
                <EditTitle>비밀번호 확인</EditTitle>
                <EditInputContainer>
                  <EditUserInput
                    placeholder="비밀번호 확인"
                    type="password"
                    value={comparePassword}
                    onChange={(e) => setComparePassword(e.target.value)}
                  ></EditUserInput>
                  {!samePassword && (
                    <CautionText>
                      {comparePassword.length > 0
                        ? "비밀번호가 다릅니다."
                        : "입력해주세요."}
                    </CautionText>
                  )}
                </EditInputContainer>
              </EachInput>
            ) : null}
            <EditButtons>
              <Button onClick={submitHandler}>확인</Button>
              <CancelButton onClick={() => setIsEdit((prev) => !prev)}>
                취소
              </CancelButton>
            </EditButtons>
          </EditForm>
        </Box>
      </Modal>
    </div>
  );
}

export default UserEdit;
