var jsLibrary = {};

//Сортування обміном
jsLibrary.swapSort = function (mas, flag = false) {
	if (mas.length <= 1) return mas;
	for (let i = 0; i < mas.length; i++) {
		if(mas[i] == undefined){
			mas[i] = 0;
		}
	}
	let count_check = 0;
	let count_swap = 0;
	for (let i = 0; i < mas.length; i++) {
  		for (let j = 0; j < mas.length; j++) {
  			if(flag){
  				if(mas[j]>mas[j+1]) {
  					let temp = mas[j];
  					mas[j] = mas[j+1];
  					mas[j+1] = temp;
  					count_swap++;
  					count_check++;
  				}
  			}else{
  				if(mas[j]<mas[j+1]) {
  					let temp = mas[j];
  					mas[j] = mas[j+1];
  					mas[j+1] = temp;
  					count_swap++;
  					count_check++;
  				}
  			}
  		}
	}
	console.log(`Сортування обміном. Кількість порівняннь = ${count_check}, кількість перестановок = ${count_swap}`);
}
//Сортування методом мінімальних елементів
jsLibrary.minSort = function (mas, flag = false) {
	if (mas.length <= 1) return mas;
	for (let i = 0; i < mas.length; i++) {
		if(mas[i] == undefined){
			mas[i] = 0;
		}
	}
	let count_check = 0;
	let count_swap = 0;
    for (let i = 0; i < mas.length; i++) {
        let rem_j = i;
          for (let j = i; j < mas.length; j++) {
              if(flag){
                  if(mas[rem_j]>mas[j]) {
                  	rem_j = j;
                  	count_check++;
                  }
              }else{
                  if(mas[rem_j]<mas[j]){
								  	rem_j = j;
								  	count_check++;                  	
                  }    
              }
          }
        let temp = mas[i];
        mas[i] = mas[rem_j];
        mas[rem_j] = temp;
        count_swap++;
    }
    console.log(`Сортування методом мінімальних елементів. Кількість порівняннь = ${count_check}, кількість перестановок = ${count_swap}`);
}
//Сортування вставкою
jsLibrary.insertionSort = function (mas, flag = false) {
	if (mas.length <= 1) return mas;
	for (let i = 0; i < mas.length; i++) {
		if(mas[i] == undefined){
			mas[i] = 0;
		}
	}
	let count_check = 0;
	let count_swap = 0;
	for (let i = 1; i < mas.length; i++) {
		let temp = mas[i];
		let j = i - 1;
		if(flag){
			while (j >= 0 && mas[j] > temp) {
		 		mas[j + 1] = mas[j];
		 		j--;
		 		count_check++;
		 		count_swap++;
			}	
		}else{
			while (j >= 0 && mas[j] < temp) {
		 		mas[j + 1] = mas[j];
		 		j--;
		 		count_check++;
		 		count_swap++;
			}
		}
		mas[j + 1] = temp;
		count_swap++;
	}
	console.log(`Сортування методом мінімальних елементів. Кількість порівняннь = ${count_check}, кількість перестановок = ${count_swap}`);
}
//Cортування Шелла
jsLibrary.shellSort = function(mas, flag = false) {
	if (mas.length <= 1) return mas;
	for (let i = 0; i < mas.length; i++) {
		if(mas[i] == undefined){
			mas[i] = 0;
		}
	}
	let count_check = 0;
	let count_swap = 0;
	let gap = Math.floor(mas.length / 2);
	while (gap > 0) {
		for (let i = gap; i < mas.length; i++) {
			let temp = mas[i];
			let j = i;
			if(flag){
				while (j >= gap && mas[j - gap] > temp) {
					mas[j] = mas[j - gap];
					j -= gap;
					count_check++;
			 		count_swap++;
			 	}
			}else{
				while (j >= gap && mas[j - gap] < temp) {
					mas[j] = mas[j - gap];
					j -= gap;
					count_check++;
			 		count_swap++;
				}
			}
			mas[j] = temp;
			count_swap++;
		}
		gap = Math.floor(gap / 2);
	}
	console.log(`Сортування методом Шелла. Кількість порівняннь = ${count_check}, кількість перестановок = ${count_swap}`);
	return mas;
}

//Швидке сортування
jsLibrary.quickSort = function (mas, flag = false) {
	if (mas.length <= 1) return mas;
	for (let i = 0; i < mas.length; i++) {
		if(mas[i] == undefined){
			mas[i] = 0;
		}
	}
	let temp = mas[mas.length - 1];
	let left = [];
	let right = [];

	for (let i = 0; i < mas.length - 1; i++) {
		if(flag){
				if (mas[i] < temp) left.push(mas[i]);
			else right.push(mas[i]);
		}else{
			if (mas[i] > temp) left.push(mas[i]);
			else right.push(mas[i]);	
		}
	}
	return [...jsLibrary.quickSort(left), temp, ...jsLibrary.quickSort(right)];
}
