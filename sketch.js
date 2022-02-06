let redE=document.getElementById("redSlider");
let greenE=document.getElementById("greenSlider");
let blueE=document.getElementById("blueSlider");
let alphaE = document.getElementById("alphaSlider");

let displayE=document.getElementById("display");

let colorText=document.getElementById("colorI");



function setup(){
  createCanvas(windowWidth, 100);
  background(0);
}


function draw(){
  let rv = redE.value;
  let r = getHex(parseInt(rv / 16 )) + "" + getHex(rv % 16);
  
  let gv = greenE.value;
  let g = getHex(parseInt(gv / 16)) + "" + getHex(gv % 16);
  
  let bv = blueE.value;
  let b = getHex(parseInt(bv / 16)) + "" + getHex(bv % 16);

  let av = alphaE.value;
  let a = getHex(parseInt(av / 16)) + "" + getHex(av % 16);
  
  displayE.style.backgroundColor = "#" + r + "" + g + "" + b + "" + a;
  
  colorText.value = "#" + r + "" + g + "" + b + "" + a;
}


function copyKaro() {
  colorText.select();
  colorText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  background(0);
  textSize(20);
  fill(255);
  textAlign(CENTER, CENTER);
  let colorV = colorText.value;
  text("Copied😉: " + colorV, width / 2, height / 2);
}


function getHex(r){
  switch(r){
    case 0: return "0"; break;
    case 1: return "1"; break;
    case 2: return "2"; break;
    case 3: return "3"; break;
    case 4: return "4"; break;
    case 5: return "5"; break;
    case 6: return "6"; break;
    case 7: return "7"; break;
    case 8: return "8"; break;
    case 9: return "9"; break;
    case 10: return "a"; break;
    case 11: return "b"; break;
    case 12: return "c"; break;
    case 13: return "d"; break;
    case 14: return "e"; break;
    case 15: return "f"; break;
  }
}