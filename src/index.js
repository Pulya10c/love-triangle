/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var lovecounter = 0;
  var cut1=0;
  var cut2=0;
  for (var i = 0; i < (preferences.length); i++) {
    var cut1 = preferences[i]-1;
    var cut2 = preferences[cut1]-1;
if ((preferences[cut2]-1)===i) {++lovecounter;};
  };
  
  return Math.trunc(lovecounter/3);
  
};
