const args = process.argv.slice(2).map(x => Number(x));
args.forEach(a => setTimeout(() => console.log(a), 1000*a));