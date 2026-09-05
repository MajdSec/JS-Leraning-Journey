for (let i = -5; i < 10; i++) {
  console.log(i);
}

let SmartMan = ["Samer", "Marta", "Lara", "Karim", 2, -5];

let OnlyName = [];


for (let t = 0; t < SmartMan.length; t++) {
  if (typeof SmartMan[t] === "string")
 OnlyName.push(SmartMan[t]);
}
console.log(OnlyName)

for (let p = 0; p < SmartMan.length; p++) {
  console.log(SmartMan[p]);
}