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
        resultTemplate.section[2].score = resHead.confidence;
        resultTemplate.throwAway.push("부착 상표 등을 제거 후 일반 쓰레기에 버리기");
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

export function createAiResult(aiTarget: any) {
    if (aiTarget.type === "Pet_Total") return petAiResult(aiTarget);
    return { message: "분석결과를 찾을 수 없습니다." };
}
