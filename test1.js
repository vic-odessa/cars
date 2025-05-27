//let PSW = 0;

// ****** out_date ******
// Вывод даты покупки билета
function out_date() {
  var dig = new Date();
  var God = dig.getFullYear();
  var Mes = dig.getMonth() + 1;
  var Chislo = dig.getDate();

  PSW = parseInt(God) + parseInt(Mes) + parseInt(Chislo) + 1;
  PSW = ((PSW * 1961) - 14 + 6);

  //  localStorage.setItem('PSW', PSW);
  console.log('test psw', PSW);
}


out_date();


