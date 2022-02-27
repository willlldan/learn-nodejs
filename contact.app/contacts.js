const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

// check folder
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  console.log("kesini juga");
  fs.mkdirSync(dirPath);
}

// check file
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const save = (name, email, noHp) => {
  const contact = { name, email, noHp };
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);

  // Cek duplikasi
  const duplicate = contacts.find((contact) => contact.name === name);
  if (duplicate) {
    console.log(chalk.red.inverse.bold("Contact sudah terdaftar"));
    return false;
  }

  // Cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Email tidak valid"));
      return false;
    }
  }

  // cek no hp
  if (!validator.isMobilePhone(noHp, "id-ID")) {
    console.log(chalk.red.inverse.bold("No Hp tidak valid"));
    return false;
  }

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts, null, 2));

  console.log(chalk.green.inverse.bold("Terimakasih telah menginputkan data"));
};

module.exports = { save };
