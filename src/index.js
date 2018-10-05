module.exports = function longestConsecutiveLength(array) {
	
  if (array.length == 0) return 0;
  
  let max = 1;
  let LongestConsecutiveSequence = {};

  for (let i=0; i < array.length; i++)
    LongestConsecutiveSequence[array[i]] = true;

  for (let i=0; i < array.length; i++){ 
    if (LongestConsecutiveSequence[array[i]]){  
      let left = array[i] - 1;
      let right = array[i] + 1;
      let count = 1;
 
      while (LongestConsecutiveSequence[left]){
            count++;
            LongestConsecutiveSequence[left] = false;
            left--;
      }
 
      while (LongestConsecutiveSequence[right]){
            count++;
            LongestConsecutiveSequence[right] = false;
            right++;
      }
      max = Math.max(count, max);
    }
  }
  return max;
}
