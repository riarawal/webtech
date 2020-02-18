var arr= [5,8,14,17,23,6,8];

function even(arr){
    if (arr%2==0)
    {return "even";
    }
    else{
        return arr;
    }
}
const saa=arr.map(even);
console.log(saa);
//filter