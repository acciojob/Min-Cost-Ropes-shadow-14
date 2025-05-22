function mincost(arr)
{ 
//write your code here
	
// return the min cost
	let cost =0;
while(arr.length>1){
	arr.sort();
	let a = arr.pop();
	let b = arr.pop();
	cost += a+b;
	arr.push(a+b);
	
}
	return cost;
}

module.exports=mincost;
