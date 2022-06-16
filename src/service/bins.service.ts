import { FilterQuery } from "@src/models/interface";
import { createFilterQuery } from "@src/utils/createQuery";
import { Bins } from "@src/repository/bins.repository";
import { RequestError } from "@src/middlewares/errorHandler";
import { STATUS_404_NOTFOUND } from "@src/utils/statusCode";

export class BinsService {
    static async getBinsLocation(query: FilterQuery) {
        const filterList = ["region", "roads"];
        const { filteredQuery, limit } = createFilterQuery(query, filterList);
        const locationList = await Bins.findBinsLocation({ filteredQuery, limit });
        if (!locationList)
            throw new RequestError(
                "해당 조건에 일치하는 쓰레기통 위치정보가 없습니다.",
                STATUS_404_NOTFOUND,
            );
        return locationList;
    }
}
