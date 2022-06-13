export interface CategoryType {
  image: string;
  name: string;
}

export interface NewsType {
  title: string;
  url: string;
}

export interface CategoryItemType {
  category: string[];
  description: { note: string[]; throwAway: string[] };
  image: string;
  kind: string[];
  recycle: boolean;
  title: string;
  _id: string;
}
