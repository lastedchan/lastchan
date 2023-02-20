export type SelectedBoss = {
  difficulty: number;
  name: string;
  selected?: boolean;
  headcount?: number;
  clear?: boolean;
};
export type Character = { name: string; boss: SelectedBoss[] };
export type CharacterList = Character[];
