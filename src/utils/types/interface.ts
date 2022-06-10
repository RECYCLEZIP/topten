export interface INews {
    url: string;
    title: string;
}

export interface ITrash {
    title: string;
    description?: { throwAway: string[]; note: string[] };
    kind?: string[];
    image?: string;
    recycle?: boolean;
    category: string[];
}
