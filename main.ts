#! /usr/bin/env node
import * as readlinesync from 'readline-sync';


const getUserInputNum = (inp:string):number => {
    const input = readlinesync.question(inp)
    return parseFloat(input);
}

const getUserInputStr = (inp:string):string => {
    const input = readlinesync.question(inp)
    return input;
}


const wordCounter = ():void => {
    console.log("Please enter the Paragraph of which you want to count the words.");
    while(true){
        const paragraph = getUserInputStr("").trim().split(" ")
        if (paragraph[0]===""){
        console.log("Please enter a paragraph. Don't leave it empty.");
            
        } else{
            console.log(`Your paragraph contains ${paragraph.length} word(s).`);
            let wish = readlinesync.keyInYN("Do you want to see all the words separately?")
            if (wish){
                paragraph.forEach(element => {
                    console.log(element);
                    
                });
            }   
            break; 
        }
    }
}

wordCounter()