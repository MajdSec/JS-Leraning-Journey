function showDetails(...data) {
    let name, age, status;

    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === "string") {
            name = data[i];
        } else if (typeof data[i] === "number") {
            age = data[i];
        } else if (typeof data[i] === "boolean") {
            status = data[i];
        }
    }

    if (status === true) {
        console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`);
    } else {
        console.log(`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`);
    }
}

showDetails("Osama", 38, true);
showDetails(38, "Osama", true);
showDetails(true, 38, "Osama");
showDetails(false, "Osama", 38);