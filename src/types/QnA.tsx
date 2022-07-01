export type QnAType = {
  _id: string;
  title: string;
  author: {
    _id: string;
    username: string;
  };
  content: string;
  createdAt: string;
  comments: [
    {
      _id: string;
      author: {
        userId: string;
        username: string;
      };
      content: string;
      createdAt: string;
    },
  ];
};

export interface QnAPageType {
  qnaPage: number;
  setQnaPage?: React.Dispatch<React.SetStateAction<number>>;
}
