let products = ["Keyboard", "Mouse", 20, 58, "Pen", "Pad", "Monitor", "iPhone"];

let colors = ["Red", "Green", "Blue"];

let models = [2020, "martar", 2021];

let showCount = 3;

mainloop:for (let i = 0; i < products.length; i++) {
  if (typeof products[i] === "string") console.log("/products :");
  console.log(`#${products[i]}`);

  console.log("#".repeat(10));

  console.log("/colors :");
  for (let k = 0; k < colors.length; k++) console.log(`-${colors[k]}`);

  console.log("#".repeat(10));

  console.log("/models :");
  for (let m = 0; m < models.length; m++)
    if (typeof models[m] === "number") console.log(`-${models[m]}`);
}

let TarBat = [
  "Keyboard",
  "Mouse",
  20,
  58,
  "Pen",
  "Pad",
  "Monitor",
  "iPhone",
  "Apple",
  525,
  85,
];

for (let s = 0; s < TarBat.length; s++) {
  if (TarBat[s] === "Monitor") {
    break;
  }
  console.log(TarBat[s]);
}

for (let t = 0; t < TarBat.length; t++) {
  if (typeof TarBat[t] === "number") {
    continue;
  }

  console.log(TarBat[t]);
}

//
 mainloop: for (let n = 0; n < products.length; n++) {

  console.log(`#${colors[n]}`);
  if (colors[n] === "Green") {
    break mainloop;
  }

  console.log(products[n]);
}
