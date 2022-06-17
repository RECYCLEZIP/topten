import { FilterQuery } from "@src/models/interface";
import { Bins } from "@src/repository/bins.repository";
import { RequestError } from "@src/middlewares/errorHandler";
import { STATUS_404_NOTFOUND } from "@src/utils/statusCode";

export class BinsService {
    static async getBinsLocation(query: FilterQuery) {
        const filterQuery = [];
        let region: string;
        let roads: string;
        if (query.search) {
            region = query.search;
            filterQuery.push({ region });
        }
        if (query.category) {
            roads = query.category;
            filterQuery.push({ roads });
        }
        console.log(filterQuery);

        const locationList = await Bins.findLocation(filterQuery);
        if (locationList.length === 0) {
            throw new RequestError(
                "해당 조건에 일치하는 쓰레기통 위치정보가 없습니다.",
                STATUS_404_NOTFOUND,
            );
        }
        return locationList;
    }
}
