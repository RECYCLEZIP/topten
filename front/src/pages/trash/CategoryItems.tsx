import { useCallback, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { getData } from "../../api";
import {
  categoryItemState,
  categoryKindState,
  categoryPageState,
} from "../../stores/atoms";
import { ItemListContainer } from "../../styles/trash/category";
import {
  ItemContainer,
  ItemImg,
  ItemText,
  ItemTitle,
  MoveButton,
} from "../../styles/trash/items";
import { useNavigate } from "react-router";
import { customToastify } from "../../components/customToastify";

function CategoryItems() {
  const [kind, setKind] = useRecoilState(categoryKindState);
  const [trashList, setTrashList] = useRecoilState(categoryItemState);
  const [page, setPage] = useRecoilState(categoryPageState);
  const observerRef = useRef<IntersectionObserver>();
  const boxRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const getTrashList = useCallback(async () => {
    try {
      const res = await getData(`trash?category=${kind}&page=${page}`);
      setTrashList((prev) => [...prev, res.data]);
    } catch (err: any) {
      customToastify("error", err?.response?.data?.message);
    }
  }, [kind, page, setTrashList]);

  useEffect(() => {
    setPage("");
  }, []);

  useEffect(() => {
    getTrashList();
  }, [getTrashList]);

  useEffect(() => {
    setTrashList([]);
  }, [kind]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionObserver); // IntersectionObserver
    boxRef.current && observerRef.current.observe(boxRef.current);
  }, [trashList]);

  const intersectionObserver = (
    entries: IntersectionObserverEntry[],
    io: IntersectionObserver,
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        if (trashList.slice(-1)[0].slice(-1)[0] === undefined) return;
        setPage(trashList.slice(-1)[0].slice(-1)[0]._id);
      }
    });
  };

  const moveItem = (id: string) => {
    navigate(`/trash/${id}`);
  };

  return (
    <>
      <ItemListContainer>
        {trashList.map((items, index) => (
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
