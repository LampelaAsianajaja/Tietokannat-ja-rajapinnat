const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('anna sana: ', (syote)=>{
    
    sana = syote.toLowerCase();
    var kaannettySana = sana.split('').reverse().join('');

    if ( sana=== kaannettySana){
        console.log(`'${syote} on palindromi.`);
    } else {
        console.log(`${syote} ei ollut palindromi.`);
    }
   rl.close();
});
 



