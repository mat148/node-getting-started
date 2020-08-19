const readline = require('readline');

exports.questionPrompt = function() {
    const rl = readline.createInterface({input : process.stdin, output: process.stdout});;

    let num1 = Math.floor((Math.random() * 10) + 1);
    let num2 = Math.floor((Math.random() * 10) + 1);
    let answer = num1 + num2;

    rl.question(`What is ${ num1 } + ${ num2 }? \n`, (userInput)=>{
        if(userInput.trim() == answer) {
            rl.close();
        } else {
            rl.setPrompt('Incorrect answer, please try again\n');
            rl.prompt();
            rl.on('line', (userInput)=>{
                if(userInput.trim() == answer) {
                    rl.close();
                }
                else {
                    rl.setPrompt(`Your answer of ${ userInput } is inncorrect. Try again\n`);
                    rl.prompt();
                }
            });
        }
    });

    //Readline is an extension of event emitter
    rl.on('close', ()=>{
        console.log('Correct!');
    });
}