const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Anna ensimmäinen luku: ', (luku1) => {
  rl.question('Anna toinen luku: ', (luku2) => {
    luku1 = parseInt(luku1);
    luku2 = parseInt(luku2);

     if (luku1 > luku2) {
      console.log("eka luku " + luku1 + " on suurempi kuin toka luku " + luku2 + ".");
    } else if (luku2 > luku1) {
      console.log("Toka luku " + luku2 + " on suurempi kuin eka luku " + luku1 + ".");
    } else {
      console.log("Syötetyt luvut ovat yhtä suuret.");
    }

    rl.close();
  });
});
