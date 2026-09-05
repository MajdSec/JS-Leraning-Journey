// let myRequest = new XMLHttpRequest();
// myRequest.open("https://api.github.com/users/elzerowebschool");
// myRequest.send();

// myRequest.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         let data = JSON.parse(this.responseText);
//         console.log(data.name);
//         console.log(data.public_repos);
//     }
// // };

//----------------------------------------------------------------//

// let firstRequest = new XMLHttpRequest();
// firstRequest.open("GET", "https://jsonplaceholder.typicode.com/users?username=Kamren");
// firstRequest.send();
// firstRequest.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//          let usersData = JSON.parse(this.responseText);

//         let targetId = usersData[0].id;
//         console.log("✅ تم إيجاد الهدف! رقم الـ ID هو: " + targetId);

//          let secondRequest = new XMLHttpRequest();
//         secondRequest.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=" + targetId);
//         secondRequest.send();

//         secondRequest.onreadystatechange = function () {
//             if (this.readyState === 4 && this.status === 200) {
//                let postsData = JSON.parse(this.responseText);
//                  let fourthPostTitle = postsData[3].title;

//                 console.log("🎯 عنوان المنشور الرابع هو: " + fourthPostTitle);
//             }
//         };
//     }
// };

// //thanks god and programmers about fetch

//----------------------------------------------------------------//

// let finalMessage = "Here is the user list:\n\n";

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => {

//     for (let i = 0; i < data.length; i++) {
//       finalMessage += `User ${i + 1}: ${data[i].name} - City: ${data[i].address.city}\n`;
//     }

//     console.log(finalMessage);

//   });

//----------------------------------------------------------------//

// let amam = "The searchers bla bla bla \n"

// fetch("https:jsonplaceholder.typicode.com/users")
// .then(Response => Response.json())
// .then(Data =>{

// for(let i = 0; i < Data.length; i++){

//     amam += `\n"---------------"\nname : ${Data[i].name}\n city : ${Data[i].address.city}\n lat : ${Data[i].address.geo.lat}`

//     console.log(amam )
// }
// });

//----------------------------------------------------------------//

// let whaleAlert =
//   "🚨 ALERT: Pending transactions for Market Whale #3!\n==================\n";

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((Response) => Response.json())
//   .then((Data) => {
//     for (let i = 1; i < Data.length; i++) {

//       if (Data[i].userId === 3 && Data[1].completed === false) {

//         whaleAlert += ` TX ID : ({${Data[i].id}}) | Title : ([${Data[i].title}])\n`;
//       }
//     }

//     console.log(whaleAlert);
//   });

//-------------------------------------------------//

//continue.......... I need to sleep
//Day-86

//-------------------------------------------------//

let Start = "Startegic Geopolitical Report: Asia";
let total = 0;
fetch(
  "https:restcountries.com/v3.1/all?fields=name,capital,population,borders,region",
)
  .then((Response) => Response.json())// 
  .then((Data) => {
    for (let i = 0; i < Data.length; i++) {
      if (
        Data[i].region === "Asia" &&
        Data[i].population <= 50000000 &&
        Data[i].borders !== undefined &&//when we using JSON() we don't need to call arayy [0]
        Data[i].borders.length >= 3
      ) {
total += Data[i].population
        Start += `\n-----------------\n country: ${Data[i].name.common}\n Capital: ${Data[i].capital[0]}\n Population: ${Data[i].population}\n Borders With: ${Data[i].borders}  `;
      }

    }
    console.log(Start + `\n---------------\nTOTAL POPULATION OF THESE STRATEGIC NATIONS: ${total}`);
  });

//-------------------------------------------------//

//By AI this code is hard for me (for now just)

fetch("https://restcountries.com/v3.1/all?fields=name,population,borders,area,landlocked,independent")
  .then((Response) => Response.json())
  .then((Data) => {
    
    // 1. إنشاء مصفوفة فارغة لتخزين الدول التي ستعبر الفلتر مع نتيجة الخطر الخاصة بها
    let analyzedCountries = [];

    for (let i = 0; i < Data.length; i++) {
      let country = Data[i];

      // 2. الفلترة الأولية: دولة مستقلة وعدد سكانها أكثر من مليون
      if (country.independent === true && country.population > 1000000) {
        
        // --- بداية حساب مؤشر الخطر ---
        let riskScore = 0;

        // أ) عامل الحدود: التحقق أولاً من وجود حدود أصلاً لتجنب انهيار الكود
        let bordersCount = 0;
        if (country.borders !== undefined) {
          bordersCount = country.borders.length;
          riskScore += (bordersCount * 10); // 10 نقاط لكل حد
        }

        // ب) عامل الكثافة: التحقق من وجود مساحة أكبر من صفر لتجنب القسمة على صفر
        let density = 0;
        if (country.area !== undefined && country.area > 0) {
          density = country.population / country.area;
          riskScore += density; // إضافة الكثافة للمؤشر
        }

        // ج) عامل الاختناق: إذا كانت حبيسة، نضرب إجمالي الخطر في 1.5
        if (country.landlocked === true) {
          riskScore = riskScore * 1.5;
        }
        // --- نهاية حساب مؤشر الخطر ---

        // 3. تخزين الدولة ببياناتها الجديدة في مصفوفتنا لتجهيزها للترتيب
        analyzedCountries.push({
          name: country.name.common,
          score: riskScore,
          pop: country.population,
          borders: bordersCount,
          isLandlocked: country.landlocked
        });
      }
    }

    // 4. الانفجار الفكري الحقيقي: ترتيب المصفوفة تنازلياً (من الأكبر للأصغر)
    // دالة sort تقارن كل دولتين (a و b) بناءً على مؤشر الخطر الذي حسبناه
    analyzedCountries.sort((a, b) => b.score - a.score);

    // 5. تجهيز التقرير النهائي لطباعة أعلى 5 دول فقط
    let finalReport = "🚨 تقرير المخاطر الجيوسياسية: أعلى 5 دول عُرضة للأزمات 🚨\n======================================================\n";
    
    // نستخدم حلقة تكرار صغيرة تتوقف عند رقم 5
    for (let j = 0; j < 5; j++) {
      let c = analyzedCountries[j];
      finalReport += `${j + 1}. الدولة: ${c.name}\n`;
      finalReport += `   📈 مؤشر الخطر: ${Math.round(c.score)}\n`;
      finalReport += `   👥 السكان: ${c.pop.toLocaleString()}\n`;
      finalReport += `   🚧 عدد الحدود: ${c.borders}\n`;
      finalReport += `   ⚓ دولة حبيسة؟ ${c.isLandlocked ? "نعم (خطر إمداد)" : "لا"}\n`;
      finalReport += `------------------------------------------------------\n`;
    }

    // طباعة التقرير
    console.log(finalReport);
  })
  .catch((Error) => {
    console.error("حدث خطأ في الاتصال بالخادم:", Error);
  });

  // remember sort and push

  //-------------------------------------------------//