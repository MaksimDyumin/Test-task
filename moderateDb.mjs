import * as fs from 'node:fs';
import {getData} from './generateData.mjs'

fs.writeFile('db.json', JSON.stringify(getData()), err => {
  if(err) throw err
})