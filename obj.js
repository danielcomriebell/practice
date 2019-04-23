// let rest = (...something) =>{
//     console.log(something);
// }



// rest("one", "two");


let arr = ["1", "2", "3"];

//HOF

let _f  = (arr) =>{
    arr.forEach((ele)=>{
        console.log(ele);
    })
}

let _x = (arr) =>{
    return arr.map((ele) => ele * 2);
}

let _y = (arr)=>{
    return arr.filter((ele) => ele > 1);
}

let _z = (arr) =>{
    return arr.reduce((accum, cv) => Number(accum) + Number(cv))
}


// _f(arr);
// console.log(_x(arr));
// console.log(_y(arr));
// console.log(_z(arr));
