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
