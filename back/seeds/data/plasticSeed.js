const title = [
    "일회용 플라스틱",
    "투명 페트병",
    "유색 페트병",
    "습기 제거제",
    "식용유병",
    "요구르트",
    "즉석밥 용기",
    "페인트통",
    "펌프형 용기",
    "조리 기구",
    "청소 솔",
    "옷걸이",
    "플라스틱 용기",
    "화장품(펌프형)",
    "장난감",
    "페트병 뚜껑",
    "요거트 용기",
];

const category = ["플라스틱"];
const recycle = true;

const kind = {
    0: ["일회용 컵", "식품 포장 용기"],
    1: ["생수", "투명 음료수", "투명 우유", "투명 막걸리"],
    2: ["맥주병", "탄산수병", "유색 음료수병"],
    3: ["제습제", "물먹는하마"],
    4: ["콩기름", "올리브유", "해바라기유"],
    5: ["요구르트병", "야구르트병", "단지형 바나나우유"],
    6: ["햇반", "오뚜기밥"],
    7: ["폐페인트", "페인트통"],
    8: ["샴푸", "린스", "바디워시"],
    9: ["국자", "뒤집개", "주걱", "집게", "휘핑기"],
    10: ["욕실 청소솔", "변기 청소솔"],
    11: ["플라스틱 옷걸이"],
    12: ["반찬통", "밀폐용기", "폴리프로필렌"],
    13: ["스킨로션", "핸드크림", "바디로션", "오일"],
    14: ["레고", "블록", "완구류"],
    15: ["다양한 페트병 뚜껑"],
    16: ["떠먹는 요거트"],
};

const image = {
    0: "https://static.turbosquid.com/Preview/2019/07/15__09_49_28/29.jpgB822E0BA-8ECD-4D4A-A377-E7453D48F045Large.jpg",
    1: "https://blisgo.com/wp-content/uploads/2021/10/%ED%88%AC%EB%AA%85%ED%8E%98%ED%8A%B8%EB%B3%91.jpg",
    2: "http://m.beernara.com/web/product/big/202012/a00e64605ed9a99dff88e4ba1bf7b54f.jpg",
    3: "http://img.danawa.com/prod_img/500000/304/109/img/1109304_1.jpg?shrink=330:330&_v=20220504171512",
    4: "http://kor.theasian.asia/wp-content/uploads/2021/01/unnamed-2021-01-01T133559.856-e1609476003333.jpg",
    5: "https://img.khan.co.kr/news/2017/05/04/l_2017050501000647400049122.jpg",
    6: "http://health.chosun.com/site/data/img_dir/2006/03/08/c2006030856002_01.jpg",
    7: "https://images.homedepot-static.com/productImages/6ad09751-e8ff-4a72-a1fd-68dd7d799a22/svn/leaktite-paint-buckets-5gl-white-pail-64_1000.jpg",
    8: "https://thumbnail10.coupangcdn.com/thumbnails/remote/700x700ex/image/retail/images/2020/03/31/15/2/c99ba660-c6b9-4cca-bbc7-47d5ee9dcc2a.jpg",
    9: "https://t1.daumcdn.net/cfile/tistory/2550133C58118CBC35",
    10: "http://image.babosarang.co.kr/product/detail/A6B/1628217898/_600.jpg",
    11: "http://m.darlingbee.com/web/product/big/GT/GTS22451/l_1.jpg",
    12: "https://t1.daumcdn.net/cfile/tistory/9917D44F5C0FF68E01",
    13: "https://m.hubspray.com/web/product/big/20200103/e3995cc62ddba2b1aaab8ac32e479376.jpg",
    14: "https://images.velog.io/images/jplendor/post/e009fa9d-5876-4b0e-92ec-e8426c86c233/%EB%A0%88%EA%B3%A0.png",
    15: "https://www.maeili.com/editor/upload/20200609100023658a325c-e4d4-4d75-83b3-0e7f86a76057.jpg",
    16: "https://image6.coupangcdn.com/image/retail/images/2020/02/13/16/7/9eb2d2a2-b9d7-43c9-8c62-2e4dd5262b1e.jpg",
};

const note = {
    0: ["이물질이 묻은 플라스틱은 특수 규격봉투(PP마대)에 담아서 배출"],
    1: ["유색 페트병과 분리하여 배출"],
    2: ["투명 페트병과 분리하여 배출"],
    3: [
        "습기제거제 내부의 액체는 수분을 흡수하는 염화 칼슘이 용해되어 있으므로 배출시 수돗물과 함께 흘려 보내기",
    ],
    4: ["기름기를 제거하지 않은 경우 재활용 불가능"],
    5: ["알루미늄 재질의 은박 뚜껑을 완전히 제거해야 재활용 가능"],
    6: ["용기의 비닐 뚜껑은 비닐류로 배출"],
    7: ["페인트는 화학물질이므로 변기나 하수구에 흘려보내면 심각한 수질 오염, 토양 오염을 유발"],
    8: [
        "펌프가 달린 뚜껑은 해제가 가능하다면 스프링과 헤드, 몸통, 튜브을 분류하여 배출",
        "해제가 불가능하다면 일반쓰레기에 배출",
    ],
    9: ["다른 재질이 혼합된 조리 용품은 일반 쓰레기로 배출"],
    10: ["청소 솔과 플라스틱 부분이 분리 되지 않는다면 모두 일반쓰레기로 배출"],
    11: ["모든 재질이 플라스틱이어야 분리수거 가능"],
    12: ["분리배출 기호 확인", "분리배출 장소가 나눠져 있다면 재질별로 분리 후 배출"],
    13: ["화장품의 내용물은 신문지나 키친타올 등으로 흡수시켜 일반쓰레기로 배출"],
    14: [
        "나무 장난감은 일반쓰레기로 배출",
        "대형 완구류는 주민센터, 구청 홈페이지에서 대형 폐기물 신고 후 배출",
    ],
    15: ["투명 페트병은 뚜껑이랑 같이 배출 가능"],
    16: ["내용물을 제거하지 않은 경우 재활용 불가능"],
};

const throwAway = {
    0: [
        "내용물을 비운 뒤 세척(기름기는 세제를 이용하여 제거)",
        "본체와 다른 재질, 상표 등을 제거",
        "플라스틱으로 분리 후 배출",
    ],
    1: [
        "내용물을 비운 뒤 세척",
        "부착 상표 등을 제거",
        "찌그러뜨리고 뚜껑 닫기",
        "플라스틱으로 분리 후 배출",
    ],
    2: ["내용물을 비운 뒤 세척", "재질이 다른 병뚜껑, 상표 등을 제거", "플라스틱으로 분리 후 배출"],
    3: [
        "흡습지 떼기",
        "용기 내부의 표시선 높이까지 찬 물은 하수구에 버리기",
        "용기 안에 있는 하얀색 내부충진제는 일반 쓰레기로 배출",
        "뚜껑과 용기는 플라스틱으로 분리 후 배출",
    ],
    4: [
        "내용물을 비운 뒤 기름기 제거",
        "내부의 기름은 1차 뜨거운 물, 2차 씻어 말린 달걀 껍질과 베이킹 소다를 1~2스푼 넣어 흔들어 제거",
        "말린 뒤 배출함에 버리기	재질이 다른 뚜껑, 상표 등을 제거 후 재질에 맞춰 따로 배출",
    ],
    5: ["내용물을 비운 뒤 세척", "재질이 다른 병뚜껑, 상표 등을 제거", "플라스틱으로 분리 후 배출"],
    6: ["밥 알이 남아있지 않도록 씻기", "플라스틱으로 분리 후 배출"],
    7: [
        "페인트가 소량 남아있다면 신문지나 버리는 옷 등으로 페인트를 흡수",
        "라벨, 부착상표, 스티커 등을 제거",
        "빈 페인트통은 재질에 따라 캔, 플라스틱으로 분류 후 배출",
        "남아 있는 페인트가 많을 경우 뚜껑을 열어 내부의 페인트를 굳힌 뒤 불연성 종량제 봉투에 넣어 배출",
    ],
    8: [
        "용기 내부에 남아 있는 용액 세척",
        "재질이 다른 뚜껑, 상표, 설명서 등 제거",
        "플라스틱으로 분리 후 배출",
    ],
    9: ["음식물 등을 제거 후 헹굼", "플라스틱의 재질의 조리용품은 플라스틱으로 분리수거"],
    10: [
        "이물질 깨끗하게 제거",
        "청소 솔과 플라스틱 손잡이 분리",
        "다른 재질이 없는 경우 플라스틱으로 분리 후 배출",
    ],
    11: ["플라스틱으로 분리 후 배출"],
    12: [
        "내용물을 비운 뒤 씻기",
        "고무 패킹은 제거 후 일반쓰레기로 배출",
        "재질이 다른 뚜껑 둥을 제거",
    ],
    13: [
        "용기 내부에 남아 있는 화장품 세척",
        "재질이 다른 뚜껑, 상표, 설명서 등 제거",
        "플라스틱으로 분리 후 배출",
    ],
    14: [
        "플라스틱 외 건전지, 다른 재질 분리",
        "재질 별로 분리한 후 분해가 안되는 경우 일반쓰레기로 배출",
    ],
    15: ["페트병과 페트병 뚜껑을 분리", "플라스틱 pp로 분리하여 배출"],
    16: ["비닐 뚜껑은 비닐류로 분리", "요거트 용기는 세척 후 분리", "각 재질에 맞게 분리하여 배출"],
};

export const plastic = title.map((title, index) => {
    return {
        title,
        description: { throwAway: throwAway[index], note: note[index] },
        image: image[index],
        kind: kind[index],
        recycle,
        category,
    };
});

/**
  {
    title: '요거트 용기',
    description: {
      throwAway: [ '비닐 뚜껑은 비닐류로 분리', '요거트 용기는 세척 후 분리', '각 재질에 맞게 분리하여 배출' ],
      note: [ '내용물을 제거하지 않은 경우 재활용 불가능' ]
    },
    image: 'https://image6.coupangcdn.com/image/retail/images/2020/02/13/16/7/9eb2d2a2-b9d7-43c9-8c62-2e4dd5262b1e.jpg',
    kind: [ '떠먹는 요거트' ],
    recycle: true,
    category: '플라스틱'
  }
 */
// Object.values(plastic).map((trash) => {
//   console.log(trash);
// });
