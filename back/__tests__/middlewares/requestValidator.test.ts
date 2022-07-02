import { bodyValidator, paramsValidator } from "@src/middlewares/requestValidator";
import { newsSchema, trashSchema, quizSchema, quizSetSchema } from "@src/utils/bodySchema";
import { identifierSchema } from "@src/utils/paramsSchema";
import { mockRequest, mockResponse, mockNext } from "@src/utils/setUpTests";
import { STATUS_400_BADREQUEST } from "@src/utils/statusCode";

const res = mockResponse();
const next = mockNext();

describe("NEWS Request Body 유효성 검사", () => {
    it("NEWS 필수 필드가 다 있다.", () => {
        const req = mockRequest({ url: "http://", title: "제목" });
        bodyValidator(newsSchema)(req, res, next);
        expect(next).toHaveBeenCalled();
        expect(next).toHaveBeenCalledTimes(1);
    });

    it("NEWS 필드에 빈 문자가 있으면 에러가 발생한다.", () => {
        const req = mockRequest({ url: "", title: "제목" });
        bodyValidator(newsSchema)(req, res, next);
        expect(next).not.toHaveBeenCalled();
        expect(next).toHaveBeenCalledTimes(0);
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(STATUS_400_BADREQUEST);
    });
});

describe("TRASH Request Body 유효성 검사", () => {
    const tempTrash = {
        title: "생수병",
        description: {
            throwAway: ["버리는방법"],
            note: ["라벨지제거"],
        },
        kind: ["페트"],
        image: "http://",
        recycle: true,
        category: ["플라스틱"],
    };

    it("TRASH 필수 필드가 다 있다.", () => {
        const req = mockRequest(tempTrash);
        bodyValidator(trashSchema)(req, res, next);
        expect(next).toHaveBeenCalled();
        expect(next).toHaveBeenCalledTimes(1);
    });

    it("TRASH 필드에 빈 문자가 있으면 에러가 발생한다.", () => {
        const req = mockRequest({ ...tempTrash, image: "" });
        bodyValidator(trashSchema)(req, res, next);
        expect(next).not.toHaveBeenCalled();
        expect(next).toHaveBeenCalledTimes(0);
    });

    it("TRASH 필드에 문자열배열 형식에 다른 타입들은 올 수 없다.", () => {
        const req = mockRequest({ ...tempTrash, kind: [true] });
        bodyValidator(trashSchema)(req, res, next);
        expect(next).not.toHaveBeenCalled();
        expect(next).toHaveBeenCalledTimes(0);
    });
});

describe("QUIZ Request Body 유효성 검사", () => {
    it("quizSchema: 단일 퀴즈채점 API 파라미터 TEST", () => {
        const req = mockRequest({ answer: "1" });
        bodyValidator(quizSchema)(req, res, next);
        expect(next).toHaveBeenCalled();
        expect(next).toHaveBeenCalledTimes(1);
    });

    it("quizSetSchema: 퀴즈셋 채점 API 파라미터 TEST", () => {
        const requestBody = {
            type: "multipleChoice",
            answers: [
                {
                    quizId: "62a455ad6059af946a56e717",
                    answer: "1",
                },
                {
                    quizId: "62a455ad6059af946a56e715",
                    answer: "2",
                },
            ],
        };
        const req = mockRequest(requestBody);
        bodyValidator(quizSetSchema)(req, res, next);
        expect(next).toHaveBeenCalled();
        expect(next).toHaveBeenCalledTimes(1);
    });
});

describe("id 파라미터를 잘 담아 요청하는지 확인하는 Validator", () => {
    it("길이 24의 id 파라미터를 잘 담고 있다.", () => {
        const params = { id: "62a455ad6059af946a56e715" };
        const req = mockRequest({}, params);
        paramsValidator(identifierSchema)(req, res, next);
        expect(next).toHaveBeenCalled();
        expect(next).toHaveBeenCalledTimes(1);
    });

    it("id 파라미터의 길이가 24가 아니면 유효성 검사에 실패한다.", () => {
        const params = { id: "1234" };
        const req = mockRequest({}, params);
        paramsValidator(identifierSchema)(req, res, next);
        expect(next).not.toHaveBeenCalled();
        expect(next).toHaveBeenCalledTimes(0);
    });
});
