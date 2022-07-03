function main (a = 2, b = 3, c) {
    let result = sum(a,b);

    if(typeof c === "function") {
        return c(result);
    } else {
        return result
    }
}

function sum (a, b) {
    return a + b;
}

function mult(x) {
    return x *= 100;
}

main(1, 3, mult);


console.log(main(1, 3, mult));