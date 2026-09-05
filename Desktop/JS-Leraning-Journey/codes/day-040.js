// let i = 0;
// while (i < 5) {
//     if (i === 2) {
//         console.log("Skipping number 2");
//         continue; 
//     }
//     // the continue caming after the i++ when this happening we will have the infinity loop 
//     console.log(i);
//     i++; // This line is never reached when i is 2
// }// هنا نتيجة سوف تكون حلقة لا نهائية السبب استخدمنا الأضافة بعد الأكمل فستبقى الدالة تعيد نفسها 

// //Output : infinity loop 

/////*******************************************************************************/////


for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("Skipping number 2");
        continue; // Safe because i++ happens automatically in the loop definition and we change while to for
    }
    console.log(i);// لحل المشكلة اصبحنا نستخدم الدالة في الأعلى لكي نحل المشكلة ونلغي هذا تكرار 

}//Output : 2

//---------------------------------------------------------------------------------------------------------//

// Data (البيانات)
const users = [
    { id: 1, isActive: true, hasPaid: true, role: 'admin' },  // الوحيد المقبول
    { id: 2, isActive: false, hasPaid: true, role: 'user' },
    { id: 3, isActive: true, hasPaid: false, role: 'user' },
    { id: 4, isActive: true, hasPaid: true, role: 'guest' }
];

for (let user of users) {
    if (user.isActive) {
        if (user.hasPaid) {
            if (user.role === 'admin') {
                
                console.log("Welcome Admin");
            } else {
                continue; // Hard to see where this belongs!
            }
        }// صعب جدا للقراءة والفهم اصبح على شكل سهم 
    }
} //Output : Welcome Admin

/////******************************************************************************/////

console.log("--- 2. The Good Way (Flat / Guard Clauses) ---");

for (let user of users) {
    
    if (!user.isActive) continue;//this code more then clear and easy to read 

    
    if (!user.hasPaid) continue;// هذا الكود انظف وأسهل للقراءة

    
    if (user.role !== 'admin') continue;

    
    console.log(`Access Granted: User #${user.id}`);
} // Output : Access Granted user #1

//---------------------------------------------------------------------------------------//


