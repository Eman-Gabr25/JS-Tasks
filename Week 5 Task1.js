function multiplyby(factor)
 {
    return function (number) 
    {
        return number * factor;
    };
}

let double = multiplyby(2);
let triple = multiplyby(3);

for (let i = 1; i <= 10; i++)
     {
    console.log("Number:", i);
     console.log("Double =", double(i));
    console.log("Triple =", triple(i));
     }
