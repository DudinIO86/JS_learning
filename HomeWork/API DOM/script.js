import {readJsonFile} from './readJson.js';

readJsonFile("./data.json").then(data);

console.log(data[0])