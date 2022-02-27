// Mengambil argument dari CLI

const yargs = require("yargs");
const contacts = require("./contacts");

yargs
  .command({
    command: "add",
    describe: "Add new contact",
    builder: {
      name: {
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
      contacts.save(argv.name, argv.email, argv.noHp);
    },
  })
  .demandCommand();

// show all list name & number phone of contact
yargs.command({
  command: "list",
  describe: "show all list name & number phone",
  handler() {
    contacts.show();
  },
});

// Get detail contact
yargs.command({
  command: "detail",
  describe: "show detail of contacts",
  builder: {
    name: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.detail(argv.name);
  },
});

// delete detail by name
yargs.command({
  command: "delete",
  describe: "delete contact",
  builder: {
    name: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.deleteContact(argv.name);
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
