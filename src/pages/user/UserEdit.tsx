import { useState } from "react";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";
import { putData } from "../../api";
import { userEditState } from "../../stores/atoms";
import { Button } from "../../styles/ButtonStyles";
import {
  EditUserInput,
  EditForm,
  CancelButton,
  EditButtons,
  EditTitle,
} from "../../styles/userStyles/userPage";
import {
  EachInput,
  RegisterInputContainer,
  CautionText,
} from "../../styles/userStyles/users";
import { UserType } from "../../types/User";

const correct = () =>
  toast.success("변경 성공!", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

const notCorrect = () =>
  toast.error("변경 실패!", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

function UserEdit({ user }: { user: UserType }) {
  const setIsEdit = useSetRecoilState(userEditState);
  const [editUserName, setEditUserName] = useState(user.username);
  const [password, setPassword] = useState("");

  const submitHandler = async (e: {
    preventDefault: () => void;
    target: any;
  }) => {
    e.preventDefault();
    if (password.length < 8) return;
    try {
      await putData("users/update", {
        email: user.email,
        password,
        username: editUserName,
      });
      correct();
      setIsEdit((prev) => !prev);
    } catch {
      console.log("Error: data put request fail");
      notCorrect();
    }
  };

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEditUserName(e.target.value);
  };

  return (
    <EditForm onSubmit={submitHandler}>
      <EachInput>
        <EditTitle>닉네임</EditTitle>
        <RegisterInputContainer>
          <EditUserInput
            placeholder="닉네임"
            value={editUserName}
            onChange={onChangeHandler}
          ></EditUserInput>
          {editUserName !== undefined && editUserName.length < 3 && (
            <CautionText>닉네임은 3자리 이상입니다.</CautionText>
          )}
        </RegisterInputContainer>
      </EachInput>
      <EachInput>
        <EditTitle>비밀번호 변경</EditTitle>
        <RegisterInputContainer>
          <EditUserInput
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></EditUserInput>
          {password.length < 8 && (
            <CautionText>비밀번호는 8자리 이상입니다.</CautionText>
          )}
        </RegisterInputContainer>
      </EachInput>
      <EditButtons>
        <Button onClick={submitHandler}>확인</Button>
        <CancelButton onClick={() => setIsEdit((prev) => !prev)}>
          취소
        </CancelButton>
      </EditButtons>
    </EditForm>
  );
}

export default UserEdit;
