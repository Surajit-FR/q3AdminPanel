export const makeTotalAmountCalculation =(data)=>{
if(data && data.length>0){
    const sum = data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum
}
return 0
}