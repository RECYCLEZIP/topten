interface Section {
  title: string;
  score: number;
}

export type AiResultType = {
  message: string;
  title: string;
  kind: string;
  section: Section[];
  throwAway: string[];
};
