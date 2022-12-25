'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main(): number[] {
    //
    // const copy = JSON.parse(JSON.stringify(arr));
    // const sort = copy.sort((a: number, b: number) => {
    //     return a > b ? 1 : -1;
    // });
    //
    // let mid = Math.ceil(sort.length / 2);
    // let last = sort.length - 1;
    //
    // [sort[mid], sort[last]] = [sort[last], sort[mid]];
    return [0];
}

export {}