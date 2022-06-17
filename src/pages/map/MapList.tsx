import React, { useMemo, useState, useEffect } from "react";

import {
  useRecoilValue,
  useSetRecoilState,
  useRecoilState,
  useResetRecoilState,
} from "recoil";
import {
  BinTypes,
  BinState,
  SearchBinState,
  BinSelectedState,
  selectedMarkerState,
  GuValueState,
  DoroValueState,
} from "../../stores/atoms";

import {
  MapBinListContainer,
  MapBinLocationContainer,
  MapBinLacationTitle,
  MapBinLacationDes,
  BackWrapper,
  BackButton,
} from "../../styles/mapStyles/mapStyle";

function MapList() {
  const bins = useRecoilValue(BinState);
  const setBinSelected = useSetRecoilState(BinSelectedState);
  const selectedMarker = useRecoilValue(selectedMarkerState);

  const guValue = useRecoilValue(GuValueState);
  const doroValue = useRecoilValue(DoroValueState);

  const [searchBins, setSearchBins] = useRecoilState(SearchBinState);
  const resetDoroValue = useResetRecoilState(DoroValueState);

  useEffect(() => {
    // 구 선택 변경 시 도로 선택 리셋
    resetDoroValue();
  }, [guValue]);

  useEffect(() => {
    if (doroValue !== "") {
      setSearchBins(bins.filter((bin) => bin.doro === doroValue));
    } else if (guValue !== "") {
      setSearchBins(bins.filter((bin) => bin.gu === guValue));
    } else {
      setSearchBins([...bins]);
    }
  }, [bins, guValue, doroValue]);

  // *********************************
  const [page, setPage] = useState(1);

  const [lastIntersectingImage, setLastIntersectingImage] =
    useState<HTMLDivElement | null>(null);

  const getRandomImageThenSet = async () => {
    console.log("fetching 함수 호출됨");
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
  const onIntersect: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //뷰포트에 마지막 이미지가 들어오고, page값에 asf1을 더하여 새 fetch 요청을 보내게됨 (useEffect의 dependency배열에 page가 있음)
        setPage((prev) => prev + 1);
        // 현재 타겟을 unobserve한다.
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    console.log("page ? ", page);
    getRandomImageThenSet();
  }, [page]);

  useEffect(() => {
    //observer 인스턴스를 생성한 후 구독
    let observer: IntersectionObserver;

    if (lastIntersectingImage) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      //observer 생성 시 observe할 target 요소는 불러온 이미지의 마지막아이템(randomImageList 배열의 마지막 아이템)으로 지정
      observer.observe(lastIntersectingImage);
    }
    return () => observer && observer.disconnect();
  }, [lastIntersectingImage]);

  // *********************************

  // 리스트에서 항목 click 시 해당 항목의 좌표 저장
  const onClickBin = (x: string | undefined, y: string | undefined) => {
    setBinSelected([x, y]);
  };

  // 지도에서 선택된 마커의 좌표가 어떤 쓰레기통인지 찾아서 해당 정보 저장
  const selectedBinInform: BinTypes | undefined = useMemo(() => {
    return bins.find(
      (bin) =>
        selectedMarker.La === Number(bin.y) &&
        selectedMarker.Ma === Number(bin.x),
    );
  }, [selectedMarker]);

  // 이전으로 클릭 시 선택한 마커 default 값으로 변경
  const onClickBack = useResetRecoilState(selectedMarkerState);

  return (
    <>
      <MapBinListContainer>
        {/* 지도에서 선택된 마커가 없다면 전체 리스트 띄움 */}
        {selectedMarker.La === 0 ? (
          searchBins?.map((bin, index) =>
            index === bins.length - 1 ? (
              <>
                <MapBinLocationContainer
                  onClick={() => onClickBin(bin?.x, bin?.y)}
                  key={index}
                  ref={setLastIntersectingImage}
                  style={{
                    backgroundColor: "red",
                  }}
                >
                  <MapBinLacationTitle>{bin?.location}</MapBinLacationTitle>
                  <MapBinLacationDes>{bin?.spot}</MapBinLacationDes>
                </MapBinLocationContainer>
              </>
            ) : (
              <MapBinLocationContainer
                onClick={() => onClickBin(bin?.x, bin?.y)}
                key={index}
              >
                <MapBinLacationTitle>{bin?.location}</MapBinLacationTitle>
                <MapBinLacationDes>{bin?.spot}</MapBinLacationDes>
              </MapBinLocationContainer>
            ),
          )
        ) : (
          // 지도에서 선택된 마커가 있다면 해당 마커의 쓰레기통 정보만 띄움
          <>
            <MapBinLocationContainer
              onClick={() =>
                onClickBin(selectedBinInform?.x, selectedBinInform?.y)
              }
            >
              <MapBinLacationTitle>
                {selectedBinInform?.location}
              </MapBinLacationTitle>
              <MapBinLacationDes>{selectedBinInform?.spot}</MapBinLacationDes>
            </MapBinLocationContainer>
            <BackWrapper onClick={onClickBack}>
              <BackButton>이전으로</BackButton>
            </BackWrapper>
          </>
        )}
      </MapBinListContainer>
    </>
  );
}

export default MapList;
