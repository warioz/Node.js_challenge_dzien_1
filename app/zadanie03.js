const args = process.argv.slice(2);
console.log(args.length > 0? args.reduce((accu, currVal) => Number(accu) + parseInt(currVal)) : 0);