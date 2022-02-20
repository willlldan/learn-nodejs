//Core Module
// File System
const fs = require("fs");

// menuliskan string ke file (synchronous);
// try {
//   fs.writeFileSync("data/test.txt", "Hello World secara synchronous");
// } catch (e) {
//   console.log(e);
// }

// Menuliskan string ke file (asynchronous)
// fs.writeFile("data/test.txt", "Hello world secara asynchronous", (e) => {
//   console.log(e);
// });

// Membaca isi file (Synchronous)
// const data = fs.readFileSync("data/test.txt", "utf-8");
// console.log(data);

// Membaca isi file (Asynchronous)
// fs.readFile("data/test.txt", "utf-8", (e, data) => {
//   if (e) throw e;
//   console.log(data);
// });

// Readline

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan nama anda : ", (nama) => {
  rl.question("Masukan no hp anda : ", (noHp) => {
    const contact = { nama, noHp };
    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts, null, 2));

    rl.close();
  });
});
