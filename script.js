function mincost(arr)
{ 
//write your code here
	
// return the min cost
	arr.sort(function (a,b){return a-b})
	let sum =0;
	 arr.forEach((element,i)=>{sum+=element});
  return sum;
}

module.exports=mincost;
