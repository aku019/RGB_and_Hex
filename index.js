const chalk = require('chalk');
const readLineSync= require('readline-sync');

function menu()
{

  console.clear();
console.log('************ This is all we offer ************\n ')



console.log('1.RGB to Hex\n2.Hex to RGB')

const choice=readLineSync.question(chalk.green.bold('Which app you want to use?\n'));
return choice;
}

const choice = menu();
proceedChoice(choice);

function proceedChoice(choice)
{
  //console.log(typeof(choice));
  //https://workat.tech/ide
  console.clear();
switch (choice) {
  case "1":
  let r=readLineSync.question(chalk.red.bold('Enter the red component\n'));

  let g=readLineSync.question(chalk.green.bold('Enter the green component\n'));
  
  let b=readLineSync.question(chalk.blue.bold('Enter the blue component\n'));
  
    console.log(rgbToHex(r,g,b));
    break;
  case "2":
  const hex=readLineSync.question(chalk.green.bold('Enter the hex to be converted to rgb\n'));

  console.log(hexToRgb(hex))

  //hex_to_rgb();
  break;
  
  default:
  console.log("You have entered the wrong choice!Try Again\n");
  let choice=menu();
  proceedChoice(choice);
  break;
}

const useAgain=readLineSync.question(chalk.green.bold('Enter 1 to  go back to main menu\nEnter any other key exit\n'));

if(useAgain==="1")
{
  const choice=menu();
  proceedChoice(choice);
}


}


// function componentToHex(c) {
//   let hex = c.toString(16);
//   return hex.length == 1 ? "0" + hex : hex;
// }

function rgbToHex(r,g,b)
{
  

    r = Number(r).toString(16);
  g = Number(g).toString(16);
  b = Number(b).toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;
   
  return "#" + r + g + b;
}


// function hexToRgb()
// {
  

// }

function hexToRgb(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}