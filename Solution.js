//Solucion para prueba logica # 1 BuzzBazz

function BuzzBazz() {
  for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log(i + ' Buzz');
    } else if (i % 5 == 0) {
      console.log(i + ' Bazz')
    } else {
      console.log(i)
    }
  }
}

BuzzBazz();