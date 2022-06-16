import { FormEvent, SetStateAction, useState } from "react";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import { getData } from "../../api";
import { searchTrashState } from "../../stores/atoms";
import { SearchBox, SearchText, SearchIcon } from "../../styles/trash/category";

function Search() {
  const [search, setSearch] = useState("");
  const setTrashList = useSetRecoilState(searchTrashState);
  const navigate = useNavigate();

  const onChangeSearch = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await getData(`trash?search=${search}`);
    setTrashList(res.data);
    navigate(`trash?search=${search}`);
  };

  return (
    <SearchBox onSubmit={(e) => onSearch(e)}>
      <SearchText
        type="text"
        value={search}
        onChange={onChangeSearch}
        placeholder="쓰레기 검색"
      />
      <SearchIcon type="submit"></SearchIcon>
    </SearchBox>
  );
}

export default Search;
