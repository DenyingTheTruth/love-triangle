module.exports = function getLoveTrianglesCount(preferences = []) {
  var i;
  var j=0;
  var buf=[];
  var k = 0;

  for(i=1;i<=preferences.length;i++){
    if((preferences[preferences[preferences[i-1]-1]-1]===i) && !(buf.indexOf(i-1)!=-1) && (preferences[i-1]!=i)){
      k+=1;
      buf[j]=i-1;
      buf[j+1]=preferences[i-1]-1;
      buf[j+2]=preferences[preferences[i-1]-1]-1;
      j+=3;
    }  
  }
  
  return k;
};
