const arry = [11,11,12,2,54,66,66,789,90]

const count = arry.reduce((initialValue,currentValue)=>{
    initialValue={},[currentValue]
    if (initialValue[currentValue]) {
        initialValue[currentValue]=initialValue[currentValue]+1
        
    }else{
        initialValue[currentValue]=1
    }

    return initialValue;

},{ })
// console.log(count);

const str1="My Name Is Faheem";

 str2=str1.split(" ");
// rev=str2.reverse();
 
  console.log(str2);
