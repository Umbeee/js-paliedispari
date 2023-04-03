//chiedere parola in input e stabilire se è palindroma

function parola(){
    let  inputParola = document.getElementById('inputParola').value;
    console.log(inputParola);

    //let lunghezzaParola = inputParola.length;
    //console.log(lunghezzaParola);

    let parolaDivisa = inputParola.split('');
    console.log(parolaDivisa);

    parolaDivisa = parolaDivisa.reverse();
    console.log(parolaDivisa);

    let parolaInvertita = parolaDivisa.join('');
    console.log(parolaInvertita);


    let stampaParola = document.getElementById('stampaParola');

    if(inputParola==parolaInvertita){
        console.log(`la parola ${inputParola} è palindroma`)
        stampaParola.innerHTML += `<p>La parola ${inputParola} è palindroma.</p>`
    }else{
        console.log(`la parola ${inputParola} non è palindroma`)
        stampaParola.innerHTML += `<p>La parola ${inputParola} non è palindroma.</p>`
    }

}  

function numero(){
    let inputNumero = document.getElementById('inputNumero').value;
    inputNumero = parseInt(inputNumero);
    console.log(inputNumero);

    let pariDispari = document.getElementById('pariDispari').value;
    console.log(pariDispari);


    let numeroRandom = 0;

    for(let i=0; i< 1; i++){
        let random = Math.floor(Math.random() * 10);
        if(random <= 5 && random>0){
            numeroRandom = random;
        }else{
            i= -1;
        }
    }

    console.log(numeroRandom)


    let stampaNumero = document.getElementById('stampaNumero');
    var somma = numeroRandom + inputNumero;

    let soldatino = false;


    if (pariDispari == 'pari'){
        console.log('ha scelto pari')
    }else{
        console.log('ha scelto dispari')
    }



     if(somma % 2 == 0) //se la somma è pari, allora : 
        {
            if(pariDispari == 'pari'){ //se quello che ha scelto l'utente è pari
                stampaNumero.innerHTML += `<p> Il numero scelto dall'utente è: <span>${inputNumero}</span>. Il numero generato randomicamente è: <span>${numeroRandom}</span>. La somma è <span>${somma}</span> ed è pari, l'utente ha <span>VINTO!</span> </p>`
            }else{
                stampaNumero.innerHTML += `<p> Il numero scelto dall'utente è: <span>${inputNumero}</span>. Il numero generato randomicamente è: <span>${numeroRandom}</span>. La somma è <span>${somma}</span> ed è pari, l'utente ha <span>PERSO!</span> </p>`
            }
        }
    else{
        if(pariDispari == 'pari'){ //se quello che ha scelto l'utente è pari
            stampaNumero.innerHTML += `<p> Il numero scelto dall'utente è: <span>${inputNumero}</span>. Il numero generato randomicamente è: <span>${numeroRandom}</span>. La somma è <span>${somma}</span> ed è pari, l'utente ha <span>PERSO!</span> </p>`
        }else{
            stampaNumero.innerHTML += `<p> Il numero scelto dall'utente è: <span>${inputNumero}</span>. Il numero generato randomicamente è: <span>${numeroRandom}</span>. La somma è <span>${somma}</span> ed è pari, l'utente ha <span>VINTO!</span> </p>`
        }
    }

    

}