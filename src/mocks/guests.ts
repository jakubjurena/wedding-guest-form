import { Guest } from "../types";
import { balkonaciForm, osobyForm } from "./forms";
import { balkonaciGroup, neubaueroviGroup, osobyGroup } from "./groups";

export const janaOsoba: Guest = {
  guestId: 1,
  groupId: osobyGroup.groupId,
  formId: osobyForm.formId,
  manualCreated: false,
  name: "Jana Osoba",
};

export const janOsoba: Guest = {
  guestId: 2,
  groupId: osobyGroup.groupId,
  formId: osobyForm.formId,
  manualCreated: false,
  name: "Jan Osoba",
};

export const oliverOsoba: Guest = {
  guestId: 3,
  groupId: osobyGroup.groupId,
  formId: osobyForm.formId,
  manualCreated: false,
  name: "Oliver Osoba",
};

export const robinOsoba: Guest = {
  guestId: 4,
  groupId: osobyGroup.groupId,
  formId: osobyForm.formId,
  manualCreated: false,
  name: "Robin Osoba",
};

export const janaJurenova: Guest = {
  guestId: 5,
  groupId: balkonaciGroup.groupId,
  formId: balkonaciForm.formId,
  manualCreated: false,
  name: "Jana Juřenová",
};

export const vojtechJurena: Guest = {
  guestId: 6,
  groupId: balkonaciGroup.groupId,
  // formId: balkonaciForm.formId,
  manualCreated: false,
  name: "Vojtěch Juřena",
};

export const ludmilaNeubauerova: Guest = {
  guestId: 7,
  groupId: neubaueroviGroup.groupId,
  // formId: xxx.formId,
  manualCreated: false,
  name: "Ludmila Neubauerová",
};

export const jiriNeubauer: Guest = {
  guestId: 8,
  groupId: neubaueroviGroup.groupId,
  // formId: xxx.formId,
  manualCreated: false,
  name: "Jiří Neubauer",
};

export const guests: Guest[] = [
  janaOsoba,
  janOsoba,
  oliverOsoba,
  robinOsoba,
  janaJurenova,
  vojtechJurena,
  ludmilaNeubauerova,
  jiriNeubauer,
];
