


// this is the non memoizd version of fib

function fib(n){
	if(n==1) return 1;
	else if (n==2) return 1;
	else return fib(n-2)+fib(n-1);

//run this program
}


fib(7);
console.log(`Non memoized version of Fib`);
console.log(fib(8));


//this is the memoizd version of fib

function fibMemoized(n,map=new Map()){
	if(map.has(n))return map.get(n);
	else if (n==1)map.set(n,1);
	else if (n==2)map.set(n,1);
	else map.set(n,fibMemoized(n-1,map)+fibMemoized(n-2,map))
	return map.get(n);
}



//This is the memoized version fo fib
console.log("Fully Memoized Version of Fib");
console.log(fibMemoized(81));
