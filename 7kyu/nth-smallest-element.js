// Nth Smallest Element (Array Series #4)

// solution 1
function nthSmallest(arr, pos){
    const sorted = arr.sort(function(a, b){return a-b})
    return sorted[pos-1]
}

// solution 2
function nthSmallest(arr, pos){
    const sorted = arr.sort(function(a, b){return a-b})
    return parseInt(sorted.slice(parseInt(pos)-1,parseInt(pos)))
}