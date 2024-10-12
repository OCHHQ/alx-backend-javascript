/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create an object `row` of type `RowElement`
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and save the returned RowID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`New row ID: ${newRowID}`);

// Update the row with an additional age field
const updatedRow: RowElement = { 
  firstName: 'Guillaume', 
  lastName: 'Salva', 
  age: 23 
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
