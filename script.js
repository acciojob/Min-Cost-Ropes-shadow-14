function mincost(arr)
{ 
let cost = 0;
  let ropes = [...arr];

  while (ropes.length > 1) {
    ropes.sort((a, b) => a - b); // O(N log N)

    let sum = ropes[0] + ropes[1];
    cost += sum;

    ropes.splice(0, 2); // remove first two
    ropes.push(sum); // insert the combined rope
  }

  return cost;
}

module.exports=mincost;
