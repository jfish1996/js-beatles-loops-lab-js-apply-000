function theBeatlesPlay(part1, part2){
var empty = [];
  for (var counter = 0; counter < part1.length; counter++){
    empty.push(part1[counter] + " plays " + part2[counter]);
  }
  return empty;
}

function johnLennonFacts(arg){
var counter = 0
  while (counter < arg.length ){
  arg[counter] += "!!!";
  counter++;
  }
  return arg;
}
