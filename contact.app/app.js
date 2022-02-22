const { ask, save } = require("./contacts");

const main = async () => {
  const name = await ask("Masukan nama anda : ");
  const email = await ask("Masukan email anda : ");
  const noHp = await ask("Masukan no hp anda : ");

  save(name, email, noHp);
};

main();
