export interface Submissions {
    type: string;
    answers: Object;
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
