import { database } from './database';

export class Drug {
  createdAt = Date;
  name = String;
  note = String;
  strength = Number;
  unit = String;
}

const drugs = database.collections.get('drugs');

export const observeDrugs = () => drugs.query().observe();

export const saveDrug = async ({ name, note, strength, unit }) => {
  await database.action(async () => {
    await drugs.create(entry => {
      entry.name = name;
      entry.note = note;
      entry.strength = strength;
      entry.unit = unit;
    });
  });
};
