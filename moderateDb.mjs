import * as fs from 'node:fs';
import {getData} from './generateData.mjs'

fs.writeFile('db.json', JSON.stringify(getData(150)), err => {
  if(err) throw err
})