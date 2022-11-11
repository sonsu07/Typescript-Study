function isValid(s: string): boolean {
    const map: { [key: string]: string } = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
    const stack: string[] = [];
    for (const char of s) {
        if (char in map) stack.push(char);
        else {
            const top = stack.pop();
            if (top === undefined || map[top] !== char) {
                return false;
            }
        }
    }
    return !stack.length;
}

console.log(isValid("()"));