import { BinsModel } from "@src/db";

export class Bins {
    static findLocation(
        filterQuery: (
            | { region: string; roads?: undefined }
            | { roads: string; region?: undefined }
        )[],
    ) {
        return BinsModel.find({ $and: filterQuery });
    }

    static findAll() {
        return BinsModel.find({});
    }
}
