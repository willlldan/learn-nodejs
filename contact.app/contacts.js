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

// get file
const loadContact = () => {
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);

  return contacts;
};

const save = (name, email, noHp) => {
  const contact = { name, email, noHp };
  const contacts = loadContact();

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

// show all
const show = () => {
  const contacts = loadContact();
  console.log(chalk.cyan.inverse.bold("Daftar Contact"));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.name} - ${contact.noHp} `);
  });
};

// get detail
const detail = (name) => {
  const contacts = loadContact();

  const contact = contacts.find(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );

  if (!contact) {
    console.log(chalk.red.inverse.bold(`Nama ${name} tidak ditemukan`));
    return false;
  }

  console.log(chalk.cyan.inverse.bold(contact.name));
  console.log(contact.noHp);
  console.log(contact.email ? contact.noHp : "");
};

// delete contact
const deleteContact = (name) => {
  const contacts = loadContact();
  const newContacts = contacts.filter(
    (contact) => contact.name.toLowerCase() !== name.toLowerCase()
  );

  if (contacts.length === newContacts.length) {
    console.log(chalk.red.inverse.bold(`Nama ${name} tidak ditemukan`));
    return false;
  }

  fs.writeFileSync("data/contacts.json", JSON.stringify(newContacts, null, 2));

  console.log(chalk.green.inverse.bold(`${name} berhasil dihapus`));
};

module.exports = { save, show, detail, deleteContact };
