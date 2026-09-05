// //Quantifiers

// // 1. The '+' Quantifier (One or More)
// // Goal: Extract order IDs that have at least one digit.

// let scraperText1 = "Order A: 105, Order B: , Order C: 9";
// let plusRegex = /\d+/g;

// console.log(scraperText1.match(plusRegex));
// // Output: ['105', '9']

// // 2. The '*' Quantifier (Zero or More)
// // Goal: Find the word 'bot' even if there are spaces before it.
// let serverLogs = "bot started,    bot failed, error";
// let starRegex = /\s*bot/g;

// console.log(serverLogs.match(starRegex));
// // Output: ['bot', '    bot']

// // 3. The '?' Quantifier (Zero or One)
// // Goal: Match 'http' and 'https' links.

// let scrapedLinks = "Link 1: https://api.com, Link 2: http://test.com";
// let questionRegex = /https?:\/\/\w+\.com/g;

// console.log(scrapedLinks.match(questionRegex));
// // Output: ['https://api.com', 'http://test.com']

// // 4. The '{n}' Quantifier (Exact Count)
// // Goal: Extract exactly 4-digit PIN codes (Firewall).

// let userInputs = "My PIN is 1234, hacker tried 12345.";
// let exactRegex = /\b\d{4}\b/g;

// console.log(userInputs.match(exactRegex));
// // Output: ['1234']

// // 5. The '{n,}' Quantifier (Minimum Count, No Maximum)
// // Goal: Find valid passwords (6 or more characters).

// let passwordsList = "pass, admin, secret123, superAdmin99";
// let minRegex = /\b\w{6,}\b/g;

// console.log(passwordsList.match(minRegex));
// // Output: ['secret123', 'superAdmin99']

// // 6. The '{n,m}' Quantifier (Safe Range)
// // Goal: Extract 2 to 3 letter country codes only.
// let rawCountries = "US, UK, ARE, KSA, JAPAN, EG";
// let rangeRegex = /\b[A-Z]{2,3}\b/g;

// console.log(rawCountries.match(rangeRegex));
// // Output: ['US', 'UK', 'ARE', 'KSA', 'EG']

//------------------------------------------------//

// const htmlDump =
//   "Item: PROD_1234 - $199.99 | Item: PROD_56 - $5.50 | fake_prod_890 - 20$ | Item: PROD_99999 - $1000.00 | PROD_1 - $0.99";

// let Mayns = htmlDump.match(/\w+_\d+\s-\s\W\d+.\d+/g);

// console.log(Mayns);

// //----------------------------------------------//

// const proxyLogs =
//   "Valid: 192.168.1.1:8080 , err: 10.0.0:80 , use: 172.16.0.254:65535 , local: 127.0.0.1:9 , bad: 256.256.256.256:port";

// let Nasa = proxyLogs.match(/(\d{3}.\d{2,3}?.\d{1}.\d{1,3}?:\d{4})/g);

// console.log(Nasa);

// //---------------------------------------------------------------------//

// const serverLogs =
//   "GET https://api.stripe.com/v1/charges?limit=50&status=succeeded POST http://api.stripe.com/v1/charges?limit=5&status=succeeded GET https://api.stripe.com/v1/refunds?limit=100&status=succeeded ERROR https://api.paypal.com/v1/charges?limit=50&status=succeeded GET https://api.stripe.com/v1/charges?limit=150&status=succeeded GET https://api.stripe.com/v1/charges?limit=5000&status=succeeded";

// let Java = serverLogs.match(
//   /https:\/\/api.st\w+.com\/v1\/charges\?limit=\d{2,3}&\w+=\w+/g,
// ); //the tall url more saver in RegEX

// console.log(Java);

// //---------------------------------------------------------------------//

// const leakedData =
//   "valid_1: https://secure-vault.com/api/keys/ABCD-a1b2c3d4e5f6g7h8 , invalid_http: http://secure-vault.com/api/keys/WXYZ-1234567890abcdef , invalid_id: https://secure-vault.com/api/keys/abCD-1234567890abcdef , valid_2: https://secure-vault.com/api/keys/PASS-super_secret_key_99 , invalid_len: https://secure-vault.com/api/keys/TEST-12345678901234567890123456 , dot_trap: https://secure-vaultXcom/api/keys/FAIL-1234567890abcdef";

// let Has = leakedData.match(
//   /https:\/\/\w+-vault\Wcom\/\w+\/\w+\/[A-Z]{4}-\w{15,25}\b/g,
// ); //close and save be {\b}

// console.log(Has);

// //---------------------------------------------------------------------//

// let message =
//   "Hello :https://elzero.org و http://google.com ، لكن لا تدخل على www.bad-site.net أو رابط مثل htp://error.com/ ورابط ftp://files.org. ولا تنسى موقع https://github.com";

// let Msd = message.match(/https?:\/\/\w+\.(com|org)/g);

// console.log(Msd);

// //---------------------------------------------------------------------//
