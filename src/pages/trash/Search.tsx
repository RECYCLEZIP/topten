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

function Search() {
  const [search, setSearch] = useState("");
  const [searchReq, setSearchReq] = useState("");
  const [trashList, setTrashList] = useRecoilState(searchTrashState);
  const [isInputValue, setIsInputValue] = useState(false);
  const navigate = useNavigate();

  const getTrash = async () => {
    const res = await getData(`trash?search=${search}`);
    setTrashList(res.data);
  };

  const onChangeSearch = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    e.preventDefault();
    setSearch(e.target.value);
    setTimeout(async () => {
      setSearchReq(e.target.value);
    }, 2000);
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
  };

  const listReset = () => {
    setSearch("");
    navigate("/category");
    setSearchReq("");
  };

  useEffect(() => {
    showDropDownList();
  }, [search]);

  useEffect(() => {
    if (searchReq !== "") {
      getTrash();
      setIsInputValue(true);
    }
  }, [searchReq]);

  return (
    <div>
      <SearchBox onSubmit={(e) => onSearch(e)}>
        <SearchText
          type="text"
          value={search}
          onChange={onChangeSearch}
          placeholder="쓰레기 검색"
        />
        {search !== "" &&
          (isInputValue ? (
            <ResetIcon
              src={img.x}
              alt="icon"
              onClick={() => {
                listReset();
              }}
            ></ResetIcon>
          ) : (
            <img src={img.loading} alt="icon"></img>
          ))}
        <SearchButton type="submit">
          <SearchIcon style={{ fontSize: "0.6rem" }}></SearchIcon>
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
