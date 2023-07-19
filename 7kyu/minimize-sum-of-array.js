// Minimize Sum Of Array (Array Series #1)

function minSum(arr) {
    const sorted = [...arr].sort((a,b) => a-b);
    const reversedArray = [];
  
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(sorted[i]);
    }
    
    let total = 0;
    for (let i=0; i < sorted.length/2; i++) {
      total += sorted[i] * reversedArray[i]
    }
    return total
}