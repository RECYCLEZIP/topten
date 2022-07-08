import { FormEvent, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { getData } from "../../api";
import { searchTrashState } from "../../stores/atoms";
import {
  DropDownBox,
  DropDownItem,
  SearchBox,
  SearchButton,
  SearchText,
  SearchTrashImg,
  ResetIcon,
} from "../../styles/trash/search";
import { Search as SearchIcon } from "@mui/icons-material";
import { img } from "../../assets/imgImport";
import { customToastify } from "../../components/customToastify";

function Search() {
  const [search, setSearch] = useState("");
  const [trashList, setTrashList] = useRecoilState(searchTrashState);
  const [isInputValue, setIsInputValue] = useState(false);
  const navigate = useNavigate();

  const getTrash = async () => {
    try {
      const res = await getData(`trash?search=${search}`);
      setTrashList(res.data);
    } catch (err: any) {
      customToastify("error", err?.response?.data?.message);
    }
  };

  const onChangeSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };

  const onSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getTrash();
    navigate(`trash?search=${search}`);
  };

  const showDropDownList = () => {
    if (search === "") {
      setTrashList([]);
      setIsInputValue(false);
    }
    setIsInputValue(false);
  };

  const listReset = () => {
    setSearch("");
    setIsInputValue(false);
    navigate("/category");
  };

  useEffect(() => {
    showDropDownList();
    if (search !== "") {
      const getResult = setTimeout(async () => {
        await getTrash();
        setIsInputValue(true);
      }, 2000);
      return () => clearTimeout(getResult);
    }
  }, [search]);

  return (
    <div>
      <SearchBox onSubmit={(e) => onSearch(e)}>
        <SearchText
          type="text"
          value={search}
          onChange={onChangeSearch}
          placeholder="쓰레기 검색"
        />
        {search !== "" ? (
          isInputValue ? (
            <ResetIcon
              src={img.x}
              alt="icon"
              onClick={() => {
                listReset();
              }}
            ></ResetIcon>
          ) : (
            <ResetIcon src={img.loading} alt="icon"></ResetIcon>
          )
        ) : (
          <ResetIcon visibility="hidden" />
        )}
        <SearchButton type="submit">
          <SearchIcon style={{ fontSize: "1rem" }}></SearchIcon>
        </SearchButton>
        {isInputValue && (
          <DropDownBox>
            {trashList.length === 0 ? (
              <DropDownItem>미등록 쓰레기입니다!</DropDownItem>
            ) : (
              <>
                {trashList.map((trash, index) => (
                  <DropDownItem
                    key={index}
                    onClick={() => navigate(`/trash/${trash._id}`)}
                  >
                    <SearchTrashImg src={trash.image} />
                    {trash.title}
                  </DropDownItem>
                ))}
              </>
            )}
          </DropDownBox>
        )}
      </SearchBox>
    </div>
  );
}

export default Search;
