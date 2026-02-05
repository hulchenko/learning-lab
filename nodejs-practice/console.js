//Console Practice
console.log(process.argv);

function consoleToJSON() {
  const c = {};
  for (let i = 2; i < process.argv.length; i++) {
    const arg = process.argv[i].split('=');
    c[arg[0]] = arg[1] ? arg[1] : true;
  }

  return c;
}

console.log(consoleToJSON());
//input: $ node console.js message=test test2
//output:
//[
//     'D:\\NodeJS\\node.exe',
//     'D:\\Practice\\nodejs-basics\\console.js',
//     'message=hello',
//     'spec'
//   ]
//   { message: 'test', test2: true }
