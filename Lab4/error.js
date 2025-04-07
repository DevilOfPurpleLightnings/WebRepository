let mas1 = new Array();
for(let i = 0; i<100; i++){
	 mas1[i] = Math.floor(Math.random() * 100);
}
let mas2 = [...mas1]
let mas3 = [...mas1]
let mas4 = [...mas1]
let mas5 = [...mas1]
console.log(mas1);
jsLibrary.swapSort(mas1);
jsLibrary.minSort(mas2);
jsLibrary.insertionSort(mas3);
jsLibrary.shellSort(mas4);
mas5 = jsLibrary.quickSort(mas5);
console.log(mas1);
console.log(mas2);
console.log(mas3);
console.log(mas4);
console.log(mas5);

let test1 = new Array();
for(let i = 3; i<100; i++){
	if(i%2 == 0){
	 	test1[i] = undefined;
	 }else{
	 	test1[i] = Math.floor(Math.random() * 100);
	
	 }
}
let test2 = [...test1]
let test3 = [...test1]
let test4 = [...test1]
let test5 = [...test1]
console.log(test1);
jsLibrary.swapSort(test1);
jsLibrary.minSort(test2);
jsLibrary.insertionSort(test3);
jsLibrary.shellSort(test4);
test5 = jsLibrary.quickSort(test5);
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
