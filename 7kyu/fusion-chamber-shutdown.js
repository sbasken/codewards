// DESCRIPTION:
// A laboratory is testing how atoms react in ionic state during nuclear fusion. They introduce different elements with Hydrogen in high temperature and pressurized chamber. Due to unknown reason the chamber lost its power and the elements in it started precipitating
// Given the number of atoms of Carbon [C],Hydrogen[H] and Oxygen[O] in the chamber. Calculate how many molecules of Water [H2O], Carbon Dioxide [CO2] and Methane [CH4] will be produced following the order of reaction affinity below

// 1. Hydrogen reacts with Oxygen   = H2O
// 2. Carbon   reacts with Oxygen   = CO2
// 3. Carbon   reacts with Hydrogen = CH4



function burner(c, h, o) {
    let result = []
    if (h/2 > o){
        result.push(o)
    } else {
        result.push(Math.floor(h/2))
    } 
    h -= result[0]*2
    o -= result[0]
    
    if (o/2 > c) {
        result.push(c)
    } else {
        result.push(Math.floor(o/2))
    }
    o -= result[1]*2
    c -= result[1]
    
    if (h/4 > c) {
        result.push(c)
    } else {
        result.push(Math.floor(h/4))
    }
    
    return result
  }