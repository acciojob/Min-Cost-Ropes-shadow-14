function mincost(arr)
{ 
//write your code here
	
// return the min cost
	arr.sort(function (a,b){return a-b})
	let sum =0;
	let ans = arr.forEach((element,i)=>{sum+=element});
  return ans;
}

module.exports=mincost;
