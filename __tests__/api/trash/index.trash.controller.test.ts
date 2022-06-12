import app from "@src/app";
import request from "supertest";
import { ITrash } from "@src/utils/types/interface";
import { trashService } from "@src/service/trash.service";
import { STATUS_200_OK, STATUS_201_CREATED } from "@src/utils/statusCode";

describe("TRASH API", () => {
    const tempTrash: ITrash = {
        title: "콜라",
        description: {
            throwAway: ["버리는방법"],
            note: ["찌그러트려서 배출"],
        },
        kind: ["캔"],
        image: "http://",
        recycle: true,
        category: ["캔"],
    };

    it("TRASH GET/ 쓰레기목록을 응답받는다.", async () => {
        const res = await request(app).get("/trash");
        expect(res.status).toBe(STATUS_200_OK);
    });

    it("TRASH POST/ 쓰레기를 생성한다.", async () => {
        const res = await request(app).post("/trash").send(tempTrash);
        expect(res.status).toBe(STATUS_201_CREATED);
        expect(res.body).toHaveProperty("kind");
        expect(res.body).toHaveProperty("image");
        expect(res.body).toHaveProperty("recycle");
        expect(res.body).toHaveProperty("title", "콜라");
        expect(res.body.description).toHaveProperty("note");
        expect(res.body.description).toHaveProperty("throwAway");
    });

    it("TRASH PUT/ 쓰레기를 수정한다.", async () => {
        const trash = await trashService.addTrash(tempTrash);
        const res = await request(app)
            .put(`/trash/${trash._id}`)
            .send({ ...tempTrash, category: ["플라스틱"] });
        expect(res.status).toBe(STATUS_200_OK);
        expect(res.body.category[0]).toEqual("플라스틱");
        expect(res.body._id === trash._id.toString()).toBe(true);
    });

    it("TRASH DELETE/ 쓰레기를 삭제한다.", async () => {
        const targetTrash = await trashService.addTrash(tempTrash);
        const res = await request(app).delete(`/trash/${targetTrash._id}`);
        expect(res.status).toBe(STATUS_200_OK);
        expect(res.body.message).toEqual("삭제가 완료되었습니다.");
    });
});
