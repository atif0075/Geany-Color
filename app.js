cut.addEventListener("click", () => {
  nav.classList.add("hidden");
});
burger.addEventListener("click", () => {
  nav.classList.contains("hidden")
    ? nav.classList.remove("hidden")
    : nav.classList.add("hidden");
});
// Dark mode
let HTML = document.querySelector("#html");
let darkMode = document.querySelector("#darkMode");

darkMode.addEventListener("input", () => {
  if (HTML.classList.contains("dark")) {
    HTML.classList.remove("dark");
    darkMode.innerHTML = "White";
  } else {
    HTML.classList.add("dark");
    darkMode.innerHTML = "Dark";
  }
});
colorPallete = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let genButton = document.querySelector("#genButton");
let gradgenButton = document.querySelector("#gradgenButton");
let smgradgenButton = document.querySelector("#smgradgenButton");
let smradgenButton = document.querySelector("#smradgenButton");
let smemptyButton = document.querySelector("#smemptyButton");
let smpalletegenButton = document.querySelector("#smpalletegenButton");
let smgenButton = document.querySelector("#smgenButton");
let color = document.querySelector("#color");
let gradient = document.querySelector("#gradient");
let radialGradient = document.querySelector("#radialGradient");
let colorPart = document.querySelector("#colorPart");
let gradientPart = document.querySelector("#gradientPart");
let radialGradientPart = document.querySelector("#radialGradientPart");
let PalletePart = document.querySelector("#Palletepart");
let pallete = document.querySelector("#pallete");
let RGBpart = document.querySelector("#RGBpart");
let RGB = document.querySelector("#RGB");
gradient.addEventListener("click", () => {
  smgenButton.classList.add("hidden");
  smgradgenButton.classList.remove("hidden");
  smradgenButton.classList.add("hidden");
  smpalletegenButton.classList.add("hidden");
  smemptyButton.classList.add("hidden");
  btn1.classList.add("hidden");
  btn2.classList.remove("hidden");
  btn3.classList.add("hidden");
  color.classList.remove("active");
  RGB.classList.remove("active");
  gradient.classList.add("active");
  radialGradient.classList.remove("active");
  colorPart.classList.add("hidden");
  gradientPart.classList.remove("hidden");
  radialGradientPart.classList.add("hidden");
  RGBpart.classList.add("hidden");
});
RGB.addEventListener("click", () => {
  smgenButton.classList.add("hidden");
  smradgenButton.classList.add("hidden");
  smpalletegenButton.classList.add("hidden");
  smemptyButton.classList.remove("hidden");
  btn1.classList.add("hidden");
  btn2.classList.add("hidden");
  btn3.classList.add("hidden");
  color.classList.remove("active");
  RGB.classList.add("active");
  gradient.classList.remove("active");
  radialGradient.classList.remove("active");
  RGB.classList.add("active");
  colorPart.classList.add("hidden");
  gradientPart.classList.add("hidden");
  radialGradientPart.classList.add("hidden");
  RGBpart.classList.remove("hidden");
  pallete.classList.remove("active");
  PalletePart.classList.add("hidden");
  btn4.classList.add("hidden");
});
radialGradient.addEventListener("click", () => {
  smgenButton.classList.add("hidden");
  smradgenButton.classList.remove("hidden");
  smgradgenButton.classList.add("hidden");
  btn1.classList.add("hidden");
  btn2.classList.add("hidden");
  btn3.classList.remove("hidden");
  color.classList.remove("active");
  gradient.classList.remove("active");
  radialGradient.classList.add("active");
  RGB.classList.remove("active");
  colorPart.classList.add("hidden");
  gradientPart.classList.add("hidden");
  radialGradientPart.classList.remove("hidden");
  RGBpart.classList.add("hidden");
  pallete.classList.remove("active");
  PalletePart.classList.add("hidden");
  btn4.classList.add("hidden");
  smpalletegenButton.classList.add("hidden");
  smemptyButton.classList.add("hidden");
});
color.addEventListener("click", () => {
  smemptyButton.classList.add("hidden");
  smgenButton.classList.remove("hidden");
  smradgenButton.classList.add("hidden");
  smgradgenButton.classList.add("hidden");
  smpalletegenButton.classList.add("hidden");
  btn1.classList.remove("hidden");
  btn2.classList.add("hidden");
  btn3.classList.add("hidden");
  btn4.classList.add("hidden");
  color.classList.add("active");
  RGB.classList.remove("active");
  gradient.classList.remove("active");
  radialGradient.classList.remove("active");
  pallete.classList.remove("active");
  colorPart.classList.remove("hidden");
  gradientPart.classList.add("hidden");
  radialGradientPart.classList.add("hidden");
  RGBpart.classList.add("hidden");
  PalletePart.classList.add("hidden");
});
pallete.addEventListener("click", () => {
  smemptyButton.classList.add("hidden");
  smgenButton.classList.add("hidden");
  smradgenButton.classList.add("hidden");
  smgradgenButton.classList.add("hidden");
  smpalletegenButton.classList.remove("hidden");
  btn1.classList.add("hidden");
  btn2.classList.add("hidden");
  btn3.classList.add("hidden");
  btn4.classList.remove("hidden");
  pallete.classList.add("active");
  color.classList.remove("active");
  RGB.classList.remove("active");
  gradient.classList.remove("active");
  radialGradient.classList.remove("active");
  colorPart.classList.add("hidden");
  PalletePart.classList.remove("hidden");
  radialGradientPart.classList.add("hidden");
  RGBpart.classList.add("hidden");
});
const copyMeOnClipboard = (id) => {
  id.select();
  id.setSelectionRange(0, 99999);
  document.execCommand("copy");
};
// copyMeOnClipboard()
let randomColor = () => {
  return Math.floor(Math.random() * colorPallete.length);
};
let ran = (id, bg) => {
  hash = "#";
  for (let i = 0; i < 6; i++) {
    hash += colorPallete[randomColor()];
    id.innerHTML = hash;
    bg.style.backgroundColor = hash;
  }
};

genButton.addEventListener("click", () => {
  ran(hexCode1, bg1);
  ran(hexCode2, bg2);
  ran(hexCode3, bg3);
  ran(hexCode4, bg4);
  ran(hexCode5, bg5);
  ran(hexCode6, bg6);
  ran(hexCode7, bg7);
  ran(hexCode8, bg8);
  ran(hexCode9, bg9);
  ran(hexCode10, bg10);
  ran(hexCode11, bg11);
  ran(hexCode12, bg12);
  ran(hexCode13, bg13);
  ran(hexCode14, bg14);
  ran(hexCode15, bg15);
});
smgenButton.addEventListener("click", () => {
  ran(hexCode1, bg1);
  ran(hexCode2, bg2);
  ran(hexCode3, bg3);
  ran(hexCode4, bg4);
  ran(hexCode5, bg5);
  ran(hexCode6, bg6);
  ran(hexCode7, bg7);
  ran(hexCode8, bg8);
  ran(hexCode9, bg9);
  ran(hexCode10, bg10);
  ran(hexCode11, bg11);
  ran(hexCode12, bg12);
  ran(hexCode13, bg13);
  ran(hexCode14, bg14);
  ran(hexCode15, bg15);
});
// gradient part here

function randomDegreeGen() {
  return Math.floor(Math.random() * 360 + 1);
}

function grad(id, randomDegreeGen, gradCode) {
  hash = "";
  for (let i = 0; i < 6; i++) {
    hash += colorPallete[randomColor()];
  }
  a = "";
  for (let i = 0; i < 6; i++) {
    a += colorPallete[randomColor()];
  }
  textSet = id.style.backgroundImage = `linear-gradient(${randomDegreeGen}deg, #${hash}, #${a})`;
  gradCode.innerHTML = textSet;
}
gradgenButton.addEventListener("click", () => {
  grad(gd1, randomDegreeGen(), gradCode1);
  grad(gd2, randomDegreeGen(), gradCode2);
  grad(gd3, randomDegreeGen(), gradCode3);
  grad(gd4, randomDegreeGen(), gradCode4);
  grad(gd5, randomDegreeGen(), gradCode5);
  grad(gd6, randomDegreeGen(), gradCode6);
  grad(gd7, randomDegreeGen(), gradCode7);
  grad(gd8, randomDegreeGen(), gradCode8);
  grad(gd9, randomDegreeGen(), gradCode9);
  grad(gd10, randomDegreeGen(), gradCode10);
  grad(gd11, randomDegreeGen(), gradCode11);
  grad(gd12, randomDegreeGen(), gradCode12);
  grad(gd13, randomDegreeGen(), gradCode13);
  grad(gd14, randomDegreeGen(), gradCode14);
  grad(gd15, randomDegreeGen(), gradCode15);
});
smgradgenButton.addEventListener("click", () => {
  grad(gd1, randomDegreeGen(), gradCode1);
  grad(gd2, randomDegreeGen(), gradCode2);
  grad(gd3, randomDegreeGen(), gradCode3);
  grad(gd4, randomDegreeGen(), gradCode4);
  grad(gd5, randomDegreeGen(), gradCode5);
  grad(gd6, randomDegreeGen(), gradCode6);
  grad(gd7, randomDegreeGen(), gradCode7);
  grad(gd8, randomDegreeGen(), gradCode8);
  grad(gd9, randomDegreeGen(), gradCode9);
  grad(gd10, randomDegreeGen(), gradCode10);
  grad(gd11, randomDegreeGen(), gradCode11);
  grad(gd12, randomDegreeGen(), gradCode12);
  grad(gd13, randomDegreeGen(), gradCode13);
  grad(gd14, randomDegreeGen(), gradCode14);
  grad(gd15, randomDegreeGen(), gradCode15);
});
// Radial Gradient part here...
function rad(id, radCode) {
  function perc() {
    return Math.floor(Math.random() * 100 + 1);
  }

  let position = ["left", "right", "bottom", "top"];

  function ranpicker() {
    return Math.floor(Math.random() * position.length);
  }
  for (let k = 0; k < 1; k++) {
    fix = position[ranpicker()];
  }
  hash = "";
  for (let i = 0; i < 6; i++) {
    hash += colorPallete[randomColor()];
  }
  a = "";
  for (let i = 0; i < 6; i++) {
    a += colorPallete[randomColor()];
  }
  textSet = id.style.backgroundImage = `radial-gradient(ellipse at ${fix}, #${hash}, transparent),radial-gradient(ellipse at ${fix}, #${a}, transparent)`;
  radCode.innerHTML = textSet;
}
let radgenButton = document.querySelector("#radgenButton");
radgenButton.addEventListener("click", () => {
  rad(rd1, radCode1);
  rad(rd2, radCode2);
  rad(rd3, radCode3);
  rad(rd4, radCode4);
  rad(rd5, radCode5);
  rad(rd6, radCode6);
  rad(rd7, radCode7);
  rad(rd8, radCode8);
  rad(rd9, radCode9);
  rad(rd10, radCode10);
  rad(rd11, radCode11);
  rad(rd12, radCode12);
  rad(rd13, radCode13);
  rad(rd14, radCode14);
  rad(rd15, radCode15);
});
smradgenButton.addEventListener("click", () => {
  rad(rd1, radCode1);
  rad(rd2, radCode2);
  rad(rd3, radCode3);
  rad(rd4, radCode4);
  rad(rd5, radCode5);
  rad(rd6, radCode6);
  rad(rd7, radCode7);
  rad(rd8, radCode8);
  rad(rd9, radCode9);
  rad(rd10, radCode10);
  rad(rd11, radCode11);
  rad(rd12, radCode12);
  rad(rd13, radCode13);
  rad(rd14, radCode14);
  rad(rd15, radCode15);
});
// Pallte Generator Part here

smpalletegenButton.addEventListener("click", () => {
  ran(palCode1, p1);
  ran(palCode2, p2);
  ran(palCode3, p3);
  ran(palCode4, p4);
  ran(palCode5, p5);
  ran(palCode6, p6);
  ran(palCode7, p7);
  ran(palCode8, p8);
  ran(palCode9, p9);
  ran(palCode10, p10);
  ran(palCode11, p11);
  ran(palCode12, p12);
  ran(palCode13, p13);
  ran(palCode14, p14);
  ran(palCode15, p15);
  ran(palCode16, p16);
  ran(palCode17, p17);
  ran(palCode18, p18);
  ran(palCode19, p19);
  ran(palCode20, p20);
  ran(palCode21, p21);
  ran(palCode22, p22);
  ran(palCode23, p23);
  ran(palCode24, p24);
  ran(palCode25, p25);
  ran(palCode26, p26);
  ran(palCode27, p27);
  ran(palCode28, p28);
  ran(palCode29, p29);
  ran(palCode30, p30);
  ran(palCode31, p31);
  ran(palCode32, p32);
  ran(palCode33, p33);
  ran(palCode34, p34);
  ran(palCode35, p35);
  ran(palCode36, p36);
  ran(palCode37, p37);
  ran(palCode38, p38);
  ran(palCode39, p39);
  ran(palCode40, p40);
  ran(palCode41, p41);
  ran(palCode42, p42);
  ran(palCode43, p43);
  ran(palCode44, p44);
  ran(palCode45, p45);
});
palletegenButton.addEventListener("click", () => {
  ran(palCode1, p1);
  ran(palCode2, p2);
  ran(palCode3, p3);
  ran(palCode4, p4);
  ran(palCode5, p5);
  ran(palCode6, p6);
  ran(palCode7, p7);
  ran(palCode8, p8);
  ran(palCode9, p9);
  ran(palCode10, p10);
  ran(palCode11, p11);
  ran(palCode12, p12);
  ran(palCode13, p13);
  ran(palCode14, p14);
  ran(palCode15, p15);
  ran(palCode16, p16);
  ran(palCode17, p17);
  ran(palCode18, p18);
  ran(palCode19, p19);
  ran(palCode20, p20);
  ran(palCode21, p21);
  ran(palCode22, p22);
  ran(palCode23, p23);
  ran(palCode24, p24);
  ran(palCode25, p25);
  ran(palCode26, p26);
  ran(palCode27, p27);
  ran(palCode28, p28);
  ran(palCode29, p29);
  ran(palCode30, p30);
  ran(palCode31, p31);
  ran(palCode32, p32);
  ran(palCode33, p33);
  ran(palCode34, p34);
  ran(palCode35, p35);
  ran(palCode36, p36);
  ran(palCode37, p37);
  ran(palCode38, p38);
  ran(palCode39, p39);
  ran(palCode40, p40);
  ran(palCode41, p41);
  ran(palCode42, p42);
  ran(palCode43, p43);
  ran(palCode44, p44);
  ran(palCode45, p45);
});
// hex to RGB part here
function hex2rgb(hex) {
  return [
    ("0x" + hex[1] + hex[2]) | 0,
    ("0x" + hex[3] + hex[4]) | 0,
    ("0x" + hex[5] + hex[6]) | 0,
  ];
}

let RGBgen = document.querySelector("#RGBgen");
let chart = document.querySelector("#chart");
var inputHex = document.querySelector("#inputHex");
let outputRGB = document.querySelector("#outputRGB");

RGBgen.addEventListener("click", () => {
  let inp = inputHex.value;
  result = inp.replace("#", "");
  inp = result;
  output = hex2rgb(inp);
  outputRGB.value = output;
  chart.style.backgroundColor = `#${inp}`;
});
