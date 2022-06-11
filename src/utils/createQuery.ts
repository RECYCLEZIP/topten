import { FilterQuery, MongooseQuery } from "@src/utils/types/interface";

export const createFilterQuery = (query: FilterQuery, filterList: string[]) => {
    const { search, category, page = "", limit = 10 } = query;
    const filteredQuery: MongooseQuery = {};

    if (page) {
        filteredQuery.$and = [{ _id: { $gt: page } }];
    }

    if (!search && !category) {
        return { filteredQuery, limit };
    }

    if (!page) {
        filteredQuery.$and = [];
    }

    if (category) {
        filteredQuery.$and.push({ $or: [{ category }] });
    }

    if (search) {
        const searchQuery = filterList.map((filterName) => ({
            [filterName]: new RegExp(search),
        }));
        filteredQuery.$and.push({ $or: searchQuery });
    }

    return { filteredQuery, limit };
};
