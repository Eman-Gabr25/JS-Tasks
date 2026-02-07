function multiplyBy(factor)
 {
    return function (number) 
    {
        return number * factor;
    };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

for (let i = 1; i <= 10; i++)
     {
    console.log("Number:", i);
     console.log("Double =", double(i));
    console.log("Triple =", triple(i));
     }
