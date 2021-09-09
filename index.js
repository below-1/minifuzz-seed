const Fs = require('fs')
const CsvReadableStream = require('csv-reader');


function convertRowToObject(row) {
  const _e1 = row[0]
  const _e2 = row[1]
  const _e3 = row[2]
  const _e4 = row[3]
  const e5 = row[4]
  const e6 = row[5]
  const e7 = row[6]
  const e8 = row[7]
  const e9 = row[8]
  const name = row[10]

  const predicate = [0,0,0,0,0,0,0,0]
  let consequences;

  switch (row[0]) {
    case 'sedikit':
      predicate[0] = 0
      break;
    case 'lumayan':
      predicate[0] = 1
      break;
    case 'banyak':
      predicate[0] = 2
      break;
  }

  switch (row[1]) {
    case 'cepat':
      predicate[1] = 0
      break;
    case 'standar':
      predicate[1] = 1
      break;
    case 'lama':
      predicate[1] = 2
      break;
  }

  switch (row[2]) {
    case 'jarang':
      predicate[2] = 0
      break;
    case 'cukup':
      predicate[2] = 1
      break;
    case 'sering':
      predicate[2] = 2
      break;
  }

  switch (row[3]) {
    case 'rendah':
      predicate[3] = 0
      break;
    case 'sedang':
      predicate[3] = 1
      break;
    case 'tinggi':
      predicate[3] = 2
      break;
  }

  switch (row[4]) {
    case 'cepat':
      predicate[4] = 0
      break;
    case 'standar':
      predicate[4] = 1
      break;
    case 'lama':
      predicate[4] = 2
      break;
  }

  switch (row[5]) {
    case 'rendah':
      predicate[5] = 0
      break;
    case 'sedang':
      predicate[5] = 1
      break;
    case 'tinggi':
      predicate[5] = 2
      break;
  }

  switch (row[6]) {
    case 'jarang':
      predicate[6] = 0
      break;
    case 'cukup':
      predicate[6] = 1
      break;
    case 'sering':
      predicate[6] = 2
      break;
  }

  switch (row[7]) {
    case 'sedikit':
      predicate[7] = 0
      break;
    case 'lumayan':
      predicate[7] = 1
      break;
    case 'banyak':
      predicate[7] = 2
      break;
  }

  return {

  }
}


function main() {
  let inputStream = Fs.createReadStream('rules.csv', 'utf8');
  inputStream
    .pipe(new CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
    .on('data', function (row) {
        console.log('A row arrived: ', row);
    })
    .on('end', function () {
        console.log('No more rows!');
    });
}

main()