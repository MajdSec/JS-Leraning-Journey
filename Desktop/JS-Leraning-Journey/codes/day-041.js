// const users = ["Yassir", "Ali", "Sami"];

// console.log("--- START BAD LOOP (Memory Leak) ---");

// for (const user of users) {
//     console.log(`[OPEN] Connection established for: ${user}`);

//     if (user === "Ali") {
//         console.log(`>> Warning: User ${user} is banned!`);

//         
//         continue; // We forgot to close the connection for Ali the server will  craching 
//     }//لمشكلة هنا ان فتحنا الأتصال و الاستمرار تخطت العملية ولم نغلق الأتصال فاصبح هناك اتصال مستمر وهذا مع الوقت يسبب انهيار للخادم

//     console.log(`... Processing data for ${user} ...`);

//     console.log(`[CLOSE] Connection closed for: ${user}`);
//     console.log("-------------------");
// }

/////*********************************************************************************/////

const users = ["yassir", "Ali", "Sami"];

console.log("--- START FIXED LOOP (Safe Cleanup) ---");

for (const user of users) {
    console.log(`[OPEN] Connection established for: ${user}`);

    if (user === "Ali") {
        console.log(`>> Warning: User ${user} is banned!`);
        
        console.log(`[CLOSE] Force disconnect for: ${user}`);
        
        continue; //here we closed the connection and solving problem //هنا اغلقنا الأتصال وحللنا المشكلة 
    }

    console.log(`... Processing data for ${user} ...`);

    // 3. Close Resource (Normal Cleanup for others)
    console.log(`[CLOSE] Connection closed for: ${user}`);
    console.log("-------------------");
}

//--------------------------------------------------------------------//

// new and old way same 


    // if (user === "Ali") {
    //     console.log(`>> Warning: User ${user} is banned!`);
        
    //     console.log(`[CLOSE] Force disconnect for: ${user}`);
        
    //     continue; 
    // }

//-------------------------------------------------------------------------//    