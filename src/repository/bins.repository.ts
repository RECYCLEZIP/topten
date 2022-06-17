import { BinsModel } from "@src/db/map/bins.schema";
// import { MongooseQuery } from "@src/models/interface";

export class Bins {
    // static async find({ filteredQuery, limit }: { filteredQuery: MongooseQuery; limit: number }) {
    //     return await BinsModel.find(filteredQuery).sort({ _id: 1 }).limit(limit);
    // }

    static async findLocation(region: string, roads: string) {
        return await BinsModel.find({ $or: [{ region }, { roads }] });
    }
}
