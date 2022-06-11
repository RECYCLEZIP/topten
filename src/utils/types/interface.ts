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

export interface FilterQuery {
    search?: string;
    category?: string;
    page?: string;
    limit?: number;
}

export interface Submissions {
    type: string;
    answers: [];
}

export interface ToUpdate {
    date?: Date;
    totalUser: number;
    wrong: number;
    yesterday?: number;
}

export interface Result {
    date: Date;
    totalUser: number;
    wrong: number;
    yesterday: number;
}
