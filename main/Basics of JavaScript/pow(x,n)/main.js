function pow(x,n){

	var results = 1;

	for (var i = 0; i < n; i++){
		results *= x;
	}

	return results;
}

var x = prompt('Введите число', '');	

do{
   var n = prompt('Введите cтепень (целый, положительный)', '');
}while((n).indexOf(".") > 0 || n < 0)

alert('Результат: ' + pow(x,n));

