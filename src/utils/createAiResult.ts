function petAiResult(aiTarget: any) {
    const { 6: resBody, 7: resHead, 8: resLabel } = aiTarget;
    const resultTemplate = {
        title: "페트병",
        kind: "플라스틱",
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
        resultTemplate.throwAway.push("페트병을 찌그러뜨리고 뚜껑 닫기");
    } else {
        resultTemplate.throwAway.push("페트병을 찌그러뜨리기");
    }

    if (resBody) {
        resultTemplate.section[0].score = resBody.confidence;
        resultTemplate.throwAway.push("플라스틱으로 분리 후 배출");
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

    if (resStraw) {
        resultTemplate.section[1].score = resHead.confidence;
        resultTemplate.throwAway.push("종이팩의 뚜껑은 플라스틱으로 분리하여 버리기");
    }

    if (resBody) {
        resultTemplate.section[0].score = resBody.confidence;
        resultTemplate.throwAway.push("세척한 종이팩을 잘 말려서 종이팩으로 분리배출");
    }

    return resultTemplate;
}

export function createAiResult(aiTarget: any) {
    switch (aiTarget.type) {
        case "Pet_Total":
            return petAiResult(aiTarget);
        case "Can_Total":
            return;
        case "Carton_Total":
            return cartonAiResult(aiTarget);
        case "Vinyl_Total":
            return;
        case "Plastic_Total":
            return;
        default:
            return { message: "분석결과를 찾을 수 없습니다." };
    }
}
