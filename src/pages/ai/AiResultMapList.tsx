import React, { useMemo } from "react";

import { useRecoilValue, useRecoilState, useResetRecoilState } from "recoil";
import {
  RobotState,
  RobotSelectedState,
  selectedMarkerState,
  lastIntersectingImageState,
} from "../../stores/atoms";

import { RobotType } from "../../types/Robot";

import {
  MapBinDatailsContainer,
  MapBinLacationTitle,
  MapBinLacationDes,
  BackWrapper,
  BackButton,
} from "../../styles/mapStyles/mapStyle";

function AiResultMapList() {
  const robots = useRecoilValue(RobotState);
  const [robotSelected, setRobotSelected] = useRecoilState(RobotSelectedState);
  // const setRobotSelected = useSetRecoilState(RobotSelectedState);
  const selectedMarker = useRecoilValue(selectedMarkerState);

  const [lastIntersectingImage, setLastIntersectingImage] =
    useRecoilState<HTMLDivElement | null>(lastIntersectingImageState);

  // *********************************
  // const [page, setPage] = useState(1);

  // const [lastIntersectingImage, setLastIntersectingImage] =
  //   useState<HTMLDivElement | null>(null);

  const getRandomImageThenSet = async () => {
    // console.log("fetching 함수 호출됨");
    // try {
    //   const { data } = await axios.get(
    // 7개 씩 요청
    //     `https://picsum.photos/v2/list?page=${page}&limit=7`,
    //   );
    //   setRandomImageList(randomImageList.concat(data));
    // } catch {
    //   console.error("fetching error");
    // }
    // ?
    // const productItems = apiProductItems(itemLength);
    // if (!productItems.length) {
    //   actions.isLoaded(dispatch)(false);
    //   return;
    // }
  };

  //observer 콜백함수
  // const onIntersect: IntersectionObserverCallback = (entries, observer) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       //뷰포트에 마지막 이미지가 들어오고, page값에 asf1을 더하여 새 fetch 요청을 보내게됨 (useEffect의 dependency배열에 page가 있음)
  //       setPage((prev) => prev + 1);
  //       // 현재 타겟을 unobserve한다.
  //       observer.unobserve(entry.target);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   console.log("page ? ", page);
  //   getRandomImageThenSet();
  // }, [page]);

  // useEffect(() => {
  //   //observer 인스턴스를 생성한 후 구독
  //   let observer: IntersectionObserver;

  //   if (lastIntersectingImage) {
  //     observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
  //     //observer 생성 시 observe할 target 요소는 불러온 이미지의 마지막아이템(randomImageList 배열의 마지막 아이템)으로 지정
  //     observer.observe(lastIntersectingImage);
  //   }
  //   return () => observer && observer.disconnect();
  // }, [lastIntersectingImage]);

  // *********************************

  // 리스트에서 항목 click 시 해당 항목의 좌표 저장
  const onClickBin = (x: number | undefined, y: number | undefined) => {
    setRobotSelected([x, y]);
  };

  // 지도에서 선택된 마커의 좌표가 어떤 쓰레기통인지 찾아서 해당 정보 저장
  const selectedBinInform: RobotType | undefined = useMemo(() => {
    console.log(selectedMarker);

    return robots.find(
      (bin) =>
        selectedMarker.Ma === Number(bin.location.coordinates[1]) &&
        selectedMarker.La === Number(bin.location.coordinates[0]),
    );
  }, [selectedMarker]);

  // 이전으로 클릭 시 선택한 마커 default 값으로 변경
  const onClickBack = useResetRecoilState(selectedMarkerState);

  return (
    <>
      <div>
        {/* 지도에서 선택된 마커가 없다면 전체 리스트 띄움 */}
        {selectedMarker.La === 0 ? (
          robots?.map((bin, index) => (
            <>
              {/* {console.log(bin)} */}
              <MapBinDatailsContainer
                onClick={() =>
                  onClickBin(
                    bin?.location.coordinates[1],
                    bin?.location.coordinates[0],
                  )
                }
                key={index}
              >
                <MapBinLacationTitle>{bin?.name}</MapBinLacationTitle>
                <MapBinLacationDes>{bin?.address}</MapBinLacationDes>
              </MapBinDatailsContainer>
            </>
          ))
        ) : (
          // 지도에서 선택된 마커가 있다면 해당 마커의 쓰레기통 정보만 띄움
          <>
            <MapBinDatailsContainer
              onClick={() =>
                onClickBin(
                  selectedBinInform?.location.coordinates[1],
                  selectedBinInform?.location.coordinates[0],
                )
              }
            >
              <MapBinLacationTitle>
                {selectedBinInform?.address}
              </MapBinLacationTitle>
            </MapBinDatailsContainer>
            <BackWrapper onClick={onClickBack}>
              <BackButton>이전으로</BackButton>
            </BackWrapper>
          </>
        )}
      </div>
    </>
  );
}

export default AiResultMapList;
