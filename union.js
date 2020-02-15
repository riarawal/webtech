var arr1=[1,2,3];
var arr2=[100,2,1,10];
var length=arr2.length;
// isme repeated ka union nhi hoga
 for (var i=0;i<length;i++)
 {if (arr1.includes(arr2[i])==false)
{
    arr1.push(arr2[i]);

}
}
 console.log(arr1);