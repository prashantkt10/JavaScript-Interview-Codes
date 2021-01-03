var mainArray=[];
for(let x=0; x<100; x++){
  mainArray.push(Math.floor(Math.random() * (100 - 0 + 1)) + 0);
}

var sorted=false;
var sortedElements=0;

while(!sorted) {
  for(let x=0; x<mainArray.length-1-sortedElements; x++) {
    if(mainArray[x]>mainArray[x+1])
      [mainArray[x], mainArray[x+1]] = [mainArray[x+1], mainArray[x]]
  }
  sortedElements+=1;
  if(sortedElements==mainArray.length)
    sorted=true;
}

console.log('mainArray: ',mainArray);