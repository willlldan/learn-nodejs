// Mengambil argument dari CLI

const yargs = require("yargs");
const contacts = require("./contacts");

yargs.command({
  command: "add",
  describe: "Add new contact",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Email",
      demandOption: false,
      type: "string",
    },
    noHp: {
      describe: "No Hp",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.save(argv.nama, argv.email, argv.noHp);
  },
});

yargs.parse();

// const { ask, save } = require("./contacts");

// const main = async () => {
//   const name = await ask("Masukan nama anda : ");
//   const email = await ask("Masukan email anda : ");
//   const noHp = await ask("Masukan no hp anda : ");

//   save(name, email, noHp);
// };

// main();
