export interface CategoryItemType {
  category: string[];
  description: { note: string[]; throwAway: string[] };
  image: string;
  kind: string[];
  recycle: boolean;
  title: string;
  _id: string;
}

export interface TrashItemType {
  items: CategoryItemType[];
}
