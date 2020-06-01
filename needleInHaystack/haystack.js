function findNeedle(haystack) {
    outputArr = [];
    for(let x = 0; x < haystack.length; x++){
      for(let y = 0; y < haystack.length; y++){
        if(haystack[x][y] === 'N'){
          outputArr = [x, y];
        }
      }
    }
  
    return outputArr;
  }
  
  // Don't change this
  module.exports = {
    findNeedle,
  };