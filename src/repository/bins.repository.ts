import { BinsModel } from "@src/db";

export class Bins {
    static async findLocation(
        filterQuery: (
            | { region: string; roads?: undefined }
            | { roads: string; region?: undefined }
        )[],
    ) {
        return BinsModel.find({ $and: filterQuery });
    }

    static async findAll() {
        return BinsModel.find({});
    }
}
