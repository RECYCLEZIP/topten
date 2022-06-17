import { BinsModel } from "@src/db/map/bins.schema";
// import { MongooseQuery } from "@src/models/interface";

export class Bins {
    static async findLocation(
        filterQuery: (
            | { region: string; roads?: undefined }
            | { roads: string; region?: undefined }
        )[],
    ) {
        return await BinsModel.find({ $and: filterQuery });
    }
}
