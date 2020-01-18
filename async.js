const readline = require('readline');
const fileWritepath = 'leg-pokemon.json';
const fileWritableStream = require('fs').createWriteStream(fileWritepath);

const fileReadPath = 'pokemon.csv';
const fileReadableStream = require('fs').createReadStream(fileReadPath);
const rl = readline.createInterface({input: fileReadableStream});

let lineCounter = 0;

rl.on('line', function(line) {
    if (isLegendary(line)) {
        const parsed = JSON.stringify(csvToObject(line));
        if (lineCounter == 0) {
            fileWritableStream.write('[' + parsed);
            lineCounter++;
        } else {
            fileWritableStream.write(',' + parsed);
        }
    }
});

rl.on('close', () => {
    fileWritableStream.write(']');
});

function csvToObject(payload) {
    payload = payload.split(',');
    return {
        id: Number(payload[0]),
        name: payload[1],
        type1: payload[2],
        type2: payload[3],
        total: Number(payload[4]),
        hp: Number(payload[5]),
        attack: Number(payload[6]),
        defence: Number(payload[7]),
        superAttack: Number(payload[8]),
        superDefense: Number(payload[9]),
        speed: Number(payload[10]),
        generation: Number(payload[11]),
        legenday: true
    };
}

function isLegendary(payload) {
    return payload.split(',')[12] == 'True';
}