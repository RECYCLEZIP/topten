import { useCallback, useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getData } from "../../api";
import {
  categoryItemState,
  categoryKindState,
  categoryPageState,
} from "../../stores/atoms";
import {
  SearchBox,
  SearchText,
  SearchIcon,
  TitleContainer,
  ItemListContainer,
} from "../../styles/trash/category";
import {
  ItemContainer,
  ItemImg,
  ItemText,
  ItemTitle,
  MoveButton,
} from "../../styles/trash/items";
import { CategoryTitle } from "../../styles/mainStyles/CategoryStyle";
import { useNavigate } from "react-router";

function CategoryItems() {
  const kind = useRecoilValue(categoryKindState);
  const [list, setList] = useRecoilState(categoryItemState);
  const [page, setPage] = useRecoilState(categoryPageState);
  const observerRef = useRef<IntersectionObserver>();
  const boxRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const getTrashList = useCallback(async () => {
    try {
      const res = await getData(`trash?category=${kind}&page=${page}`);
      setList((prev) => [...prev, res.data]);
    } catch {
      console.log("Error: data get request fail");
    }
  }, [kind, page, setList]);

  useEffect(() => {
    getTrashList();
  }, [getTrashList]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionObserver); // IntersectionObserver
    boxRef.current && observerRef.current.observe(boxRef.current);
  }, [list]);

  const intersectionObserver = (
    entries: IntersectionObserverEntry[],
    io: IntersectionObserver,
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        setPage(list.slice(-1)[0].slice(-1)[0]._id);
      }
    });
  };

  const moveItem = (id: string) => {
    navigate(`./${id}`);
  };

  return (
    <>
      <TitleContainer>
        <CategoryTitle>목록</CategoryTitle>
        <SearchBox>
          <SearchText />
          <SearchIcon></SearchIcon>
        </SearchBox>
      </TitleContainer>
      <ItemListContainer>
        {list.map((items, index) => (
          <>
            {items.map((item, index) =>
              items.length - 1 === index ? (
                <ItemContainer key={index} ref={boxRef}>
                  <ItemImg
                    src={item.image}
                    onClick={() => moveItem(item._id)}
                  />
                  <ItemTitle>
                    <ItemText>{item.title}</ItemText>
                    <MoveButton onClick={() => moveItem(item._id)}>
                      자세히
                    </MoveButton>
                  </ItemTitle>
                </ItemContainer>
              ) : (
                <ItemContainer key={index}>
                  <ItemImg
                    src={item.image}
                    onClick={() => moveItem(item._id)}
                  />
                  <ItemTitle>
                    <ItemText>{item.title}</ItemText>
                    <MoveButton onClick={() => moveItem(item._id)}>
                      자세히
                    </MoveButton>
                  </ItemTitle>
                </ItemContainer>
              ),
            )}
          </>
        ))}
        <ItemContainer opacity={0}>
          <ItemImg />
          <ItemTitle>
            <ItemText></ItemText>
            <MoveButton>자세히</MoveButton>
          </ItemTitle>
        </ItemContainer>
        <ItemContainer opacity={0}>
          <ItemImg />
          <ItemTitle>
            <ItemText></ItemText>
            <MoveButton>자세히</MoveButton>
          </ItemTitle>
        </ItemContainer>
      </ItemListContainer>
    </>
  );
}

export default CategoryItems;
