const slash = ['|', '/', '-', '\\', '|'];
let timer = 0;
for (const s of slash) {
  timer = timer * 2 + 100;
  setTimeout(() => process.stdout.write(`\r${s}  `), timer );
}