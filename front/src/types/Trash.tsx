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

export interface TrashType {
  title?: string;
  image?: string;
  kind?: string[];
  category?: string[];
  description?: { note: string[]; throwAway: string[] };
  recycle?: boolean;
  _id?: string;
}
