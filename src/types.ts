export type Group = {
  groupId: number;
  groupName: string;
};

export type Form = {
  formId: number;
  bedPlaces: number;
  taxiPlaces: number;
  sleapingNotes: string;
  standardMeal: number;
  specialMeal: number;
  childrenMeal: number;
  foodNotes: string;
  // email: string;
  specialNotes: string;
};

export type Guest = {
  guestId: number;
  groupId: number;
  formId?: number;
  manualCreated: boolean;
  name: string;
  // isChild?: boolean;
  // isTeen?: boolean;
};
