const app = "I don't do much."

function destructivelyAppendKitten (name){
  kittens.push(name);
    return kittens;
}
function destructivelyPrependKitten(name){
   kittens.unshift(name);
    return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
    return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
    return kittens;
}
function appendKitten(name){
   return [...kittens,name]
}
function prependKitten(name){
    return [name,...kittens]
}
function removeLastKitten(array){
    return array.slice(0,array.length -1)
}
/*function removeElementFromEndOfArray(array){
    return array.slice(0,array.length -1)