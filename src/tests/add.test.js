const add = (a, b) => a+b;
const generateGreeting = (name= 'Anonymous') => `Hello ${name}!`;

describe("test ulity",()=>{
    test('should add two number',()=>{
        const result = add(3, 4);
        expect(result).toBe(7);
    });

    test('sholud generate greeting from name',()=>{
        const name = "top";
        const result = generateGreeting(name);
        expect(result).toBe(`Hello ${name}!`);
    });

    test('sholud generate greeting for no name',()=>{
        const result = generateGreeting();
        expect(result).toBe(`Hello Anonymous!`);
    });
});
