function petAiResult(aiTarget: any) {
    const { 6: resBody, 7: resHead, 8: resLabel } = aiTarget;
    const resultTemplate = {
        title: "페트병",
        kind: "페트류",
        section: [
            { title: "페트병", score: 0 },
            { title: "뚜껑", score: 0 },
            { title: "라벨", score: 0 },
        ],
        throwAway: ["내용물을 비운 뒤 세척"],
    };

    if (resLabel) {
        resultTemplate.section[2].score = resLabel.confidence;
        resultTemplate.throwAway.push("부착 상표 등을 제거 후 비닐로 분리하여 버리기");
    }

    if (resHead) {
        resultTemplate.section[1].score = resHead.confidence;
        resultTemplate.throwAway.push("페트병을 찌그러뜨리고 뚜껑은 플라스틱으로 배출");
    } else {
        resultTemplate.throwAway.push("페트병을 찌그러뜨리기");
    }

    if (resBody) {
        resultTemplate.section[0].score = resBody.confidence;
        resultTemplate.throwAway.push("페트류로 분리 후 배출");
    }

    return resultTemplate;
}

function cartonAiResult(aiTarget: any) {
    const { 1: resBody, 2: resHead, 3: resStraw } = aiTarget;
    const resultTemplate = {
        title: "종이팩",
        kind: "종이팩",
        section: [
            { title: "종이팩", score: 0 },
            { title: "뚜껑", score: 0 },
            { title: "빨대", score: 0 },
        ],
        throwAway: ["내용물을 비운 뒤 세척"],
    };

    if (resStraw) {
        resultTemplate.section[2].score = resStraw.confidence;
        resultTemplate.throwAway.push("빨대는 제거하여 일반쓰레기에 버리기");
    }

    if (resHead) {
        resultTemplate.section[1].score = resHead.confidence;
        resultTemplate.throwAway.push("종이팩의 뚜껑은 플라스틱으로 분리하여 버리기");
    }

    if (resBody) {
        resultTemplate.section[0].score = resBody.confidence;
        resultTemplate.throwAway.push("세척한 종이팩을 잘 말려서 종이팩으로 분리배출");
    }

    return resultTemplate;
}

function canAiResult(aiTarget: any) {
    const { 0: resBody } = aiTarget;
    const resultTemplate = {
        title: "캔",
        kind: "캔/고철",
        section: [{ title: "캔", score: 0 }],
        throwAway: [
            "내용물을 비운 뒤 세척",
            "라벨, 스티커 등 제거",
            "최대한 압축 시켜 부피를 줄인 뒤 배출",
        ],
    };

    if (resBody) {
        resultTemplate.section[0].score = resBody.confidence;
    }

    return resultTemplate;
}

function paperAiResult(aiTarget: any) {
    const { 5: resBody } = aiTarget;
    const resultTemplate = {
        title: "종이",
        kind: "종이류",
        section: [{ title: "종이", score: 0 }],
        throwAway: [
            "물에 젖지 않게 하기",
            "이물질이 묻지 않게 하기",
            "신문지는 끈으로 묶어서 배출하면 더 좋음",
        ],
    };

    if (resBody) {
        resultTemplate.section[0].score = resBody.confidence;
    }

    return resultTemplate;
}

function plasticAiResult(aiTarget: any) {
    const { 10: resBody } = aiTarget;
    const resultTemplate = {
        title: "플라스틱",
        kind: "플라스틱",
        section: [{ title: "플라스틱", score: 0 }],
        throwAway: [
            "내용물을 비운 뒤 세척",
            "부착 상표 등을 제거",
            "찌그러뜨리고 뚜껑 닫기",
            "플라스틱으로 분리 후 배출",
        ],
    };

    if (resBody) {
        resultTemplate.section[0].score = resBody.confidence;
        resultTemplate.throwAway.push("세척한 종이팩을 잘 말려서 종이팩으로 분리배출");
    }

    return resultTemplate;
}

function vinylAiResult(aiTarget: any) {
    const { 11: resBody } = aiTarget;
    const resultTemplate = {
        title: "비닐",
        kind: "비닐류",
        section: [{ title: "비닐류", score: 0 }],
        throwAway: [
            "내용물을 비우고 물로 헹구는 등 이물질 제거",
            "장판, 천막, 의류, 침구류 등은 종량제 봉투나 대형폐기물로 배출",
        ],
    };

    if (resBody) {
        resultTemplate.section[0].score = resBody.confidence;
    }

    return resultTemplate;
}

export function createAiResult(aiTarget: any) {
    switch (aiTarget.type) {
        case "Pet_Total":
            return petAiResult(aiTarget);
        case "Can_Total":
            return canAiResult(aiTarget);
        case "Carton_Total":
            return cartonAiResult(aiTarget);
        case "Paper_Total":
            return paperAiResult(aiTarget);
        case "Vinyl_Total":
            return vinylAiResult(aiTarget);
        case "Plastic_Total":
            return plasticAiResult(aiTarget);
        default:
            return { message: "분석결과를 찾을 수 없습니다." };
    }
}
