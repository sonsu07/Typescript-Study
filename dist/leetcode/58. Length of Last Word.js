function lengthOfLastWord(s) {
    return s.trim().split(' ').reverse()[0].length;
}
let result = lengthOfLastWord("   fly me   to   the moon  ");
console.log(result);
export {};
