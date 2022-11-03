// Asynchronous File System - Requires a callback.

const {readFile, writeFile, readFileSync} = require('fs');
const {resolve} = require('path');
 
const folder = resolve(__dirname, 'content', 'subfolder');

const firstFile = resolve(folder, "another.txt")
const secondFile = resolve(folder, 'second_another.txt');

console.log('Start')
readFile(firstFile, 'utf-8', (err, res1)=>{
    if(err){
        console.log(err);
    }else{
        const first = res1
        readFile(secondFile, 'utf-8', (err, res2)=>{
            if(err){
                console.log(err);
            }else{
                const second = res2
                const text = `${first}, ${second}`
                const filePath = resolve(folder, 'asyncFile.txt')
                writeFile(filePath, text, {flag:"a"}, (err, res)=>{
                    if(err){
                        console.log(err);
                    }else{
                        console.log("Finished writing");
                    }
                    });
            }
        })
    }
    });
console.log("Start new one")
