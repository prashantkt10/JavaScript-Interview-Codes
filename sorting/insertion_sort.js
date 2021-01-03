var mainArray=[];
var sortedArray=[];
for(let x=0; x<100; x++){
  mainArray.push(Math.floor(Math.random() * (100 - 0 + 1)) + 0);
}

var c1=0,c2=0,c3=0;

while(mainArray.length){
  if(sortedArray.length==0){
    c1+=1;
    sortedArray.push(mainArray[0]);
  }
  else if(sortedArray.length==1) {
    c2+=1;
    if(sortedArray[0]<mainArray[0]) {
      sortedArray.push(mainArray[0]);
    }
    else sortedArray.splice(0,0,mainArray[0]);
  }
  else {
    c3+=1;
    for(let x=sortedArray.length-1; x>=0; x--) {
      if(sortedArray[x]==mainArray[0]) {
        sortedArray.splice(x,0,mainArray[0]);
        break;
      }
      if(mainArray[0]<sortedArray[x] && mainArray[0]>sortedArray[x-1]) {
        sortedArray.splice(x,0,mainArray[0]);
        break;
      }
      if(x==0) {
        if(sortedArray[0]<mainArray[0]) {
          sortedArray.push(mainArray[0]);
        }
        else sortedArray.splice(0,0,mainArray[0]);
      }
    }
  }
  mainArray.splice(0,1);
}