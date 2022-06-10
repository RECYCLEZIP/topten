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
