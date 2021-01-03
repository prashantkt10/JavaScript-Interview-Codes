var mainArray=[];
var sortedArray=[];

var sorted=false;
var minimum={index:0, val:0};

for(let x=0; x<10000; x++){
  mainArray.push(Math.floor(Math.random() * (100000 - 0 + 1)) + 0);
}
console.time();
while(!sorted){
  mainArray.forEach((val, index)=>{
    if(mainArray.length==1){
      mainArray=[];
      sortedArray.push(val);
      sorted=true;
      return;
    }
    if(index==0){
      minimum={index,val};
      return;
    }
    if(val<=minimum.val)  minimum={index,val};
  });
  mainArray.splice(minimum.index, 1);
  if(mainArray.length>1){
    sortedArray.push(minimum.val);
    minimum={index:0, val:0};
  }
}

console.timeEnd();
console.log('sortedArray: ',sortedArray);
console.log('mainArray: ',mainArray);