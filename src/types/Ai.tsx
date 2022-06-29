interface Section {
  title: string;
  score: number;
}

export type AiResultType = {
  title: string;
  kind: string;
  section: Section[];
  throwAway: string[];
};
