
type WinningCombinationsResult = [number, number[]][];


function call(lines: number[]){
  
  function checkPayingSymbols(array : number[]) {
    return array.every(ele => ele <= 9);
  };
  function createArray(values: number[]): number[] {
    return values.filter((value) => value !== undefined);
  };
  function equal(array : number[]) {
    return array.every(ele => ele === array[0]);
  };

  function concatIndex(array1 : number[], array2 : number[]){
    const unique = array2.filter(numero => !array1.includes(numero));
    const resultado = [...array1, ...unique].sort((a, b) => a - b);
    return resultado;
  };
  function countZero(array : number[]) {
    let count = 0;
    if (array[0] === 0){count++;}
    if (array[1] === 0){count++;}
    if (array[2] === 0){count++;}
    return count;
  };
  function filterZero(array : number[]) {
    return array.filter(numero => numero !== 0);
  };
  function everyZero(array:number[]) {
    return array.every(function(ele) {
      return ele === 0;
    });
  };
  let number : any = [];
  let index : any = [];
  if(everyZero(lines)){
    number = [0];
    var long = lines.length;
    index = Array.from({length: long }, (_, i) => i);
  };
  for(let x = 0 ; x <= lines.length - 3 ; x++){
    let num1 : number = lines[x];
    let num2 : number = lines[x+1];
    let num3 : number = lines[x+2];
    let values : number[] = createArray([num1,num2,num3]);
    let indexValues : number[] = [x,x+1,x+2];
   
    if(checkPayingSymbols(values)){
      if(values.includes(0)){
        if(countZero(values) == 1 ){
          var resultFilter = filterZero(values);
          if(resultFilter[0]===resultFilter[1]){
            var numCouple = Number(resultFilter[0]);
            number.includes(numCouple) && ( index.length == 2 ?  (index = [index[0],concatIndex(indexValues,index[1])]): (index = concatIndex(indexValues,index)));
            !number.includes(numCouple) && number.length == 0 && (number.push(numCouple) && index.push(...indexValues));
            !number.includes(numCouple) && number.length > 0 && (number.push(numCouple) && (index = [[...index],[...indexValues]]));
          };
        };
        if(countZero(values) == 2 ) {
          var num = Number(filterZero(values));
          number.includes(num) && ( index.length == 2 ? (index = [index[0],concatIndex(indexValues,index[1])]):index = concatIndex(indexValues,index));
          !number.includes(num) && number.length == 0 && (number.push(num) && index.push(...indexValues));
          !number.includes(num) && number.length > 0 && (number.push(num) && (index = [[...index],[...indexValues]]));
        };
        if(countZero(values) == 3){
          lines[x+3] !== 0 && !number.includes(lines[x+3] && number.push(lines[x+3]));
          index = concatIndex(indexValues,index);
        };
      }
      else if(equal(values)){
        number.includes(values[0]) && ( index.length == 2 ? (index = [index[0],concatIndex(indexValues,index[1])]):index = concatIndex(indexValues,index));
        !number.includes(values[0]) && number.length == 0 && (number.push(values[0]) && index.push(...indexValues));
        !number.includes(values[0]) && number.length > 0 && (number.push(values[0]) && (index = [[...index],[...indexValues]]));
      };
    };
  };
  if(number.length == 1 ){
    return [[...number,[...index]]];
  };
  if(number.length > 1){
    let firstNumber = number[0];
    let secondNumber = number[1];
    let firstIndex = index[0];
    let secondIndex = index[1];
    return [[firstNumber,[...firstIndex]],[secondNumber,[...secondIndex]]];
  };
  return [];
};
export const WinningCombinations = { call };