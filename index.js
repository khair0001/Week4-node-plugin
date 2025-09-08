import chalk from 'chalk';
import figlet from 'figlet';
import cowsay from 'cowsay';
import readline from 'node:readline';
import gradient from 'gradient-string';
import boxen from 'boxen';
import dayjs from 'dayjs';

const args = process.argv.slice(2);

console.log(chalk.bold.blue('Nama : Ahmad Muslihul Khair'));
console.log(chalk.bold.red('NIM  : F1D0230001'));

console.log(
  chalk.red(
    cowsay.say({
      text: "lebih baik tangan di atas daripada tidak punya tangan",
      e: "^^",
      T: "U ",
      f: "dragon"
    })
  )
);

const figletText = figlet.textSync("Ahmad Muslihul Khair", { font: "Standard" });
console.log(gradient.pastel(figletText));

const boxMessage = boxen(chalk.white.bold("Week 4 plugin"), {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "cyan",
  backgroundColor: "black"
});
console.log(boxMessage);

const now = dayjs().format('dddd, DD MMMM YYYY HH:mm:ss');
console.log(chalk.bold.magenta(`Sekarang: ${now}\n`));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(chalk.bold.blue('Masukkan nama Anda: '), (name) => {
  rl.question(chalk.bold.red('Masukkan NIM Anda: '), (nim) => {
    console.log(
      boxen(
        gradient.rainbow(`Halo, ${name}! NIM Anda: ${nim}`),
        { padding: 1, margin: 1, borderStyle: "double", borderColor: "yellow" }
      )
    );
    rl.close();
  });
});

