import { bodyValidator } from "@src/middlewares/requestValidator";
import { newsSchema, trashSchema } from "@src/utils/bodySchema";
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
