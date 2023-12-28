let buffer = Buffer.alloc(4);
console.log(buffer);

const abc = Buffer.alloc(26);
console.log(abc);

for(let i = 0; i < 26; i++) {
    abc[i] = i + 97;
}

console.log(abc.toString());