const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// check folder
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// check file
const dataPath = "./data/contacts.json";
if (!fs.existsSync()) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const ask = (question) => {
  return new Promise((resolve, rejects) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const save = (name, email, noHp) => {
  const contact = { name, email, noHp };
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts, null, 2));

  rl.close();
};

module.exports = { ask, save };
