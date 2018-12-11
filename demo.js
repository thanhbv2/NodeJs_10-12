const begin = Date.now();
console.log('===============> start', begin);



function add(a, b) {
  setTimeout(() => {
    console.log('===============>', a + b);
    let end = Date.now() - begin;
    console.log('===============>', end);
  }, 0)
}

function add1(a, b) {
  setTimeout(() => {
    console.log('===============>', a + b);
    let end = Date.now() - begin;
    console.log('===============>', end);
  }, 1000)
}

function add2(a, b) {
  setTimeout(() => {
    console.log('===============>', a + b);
    let end = Date.now() - begin;
    console.log('===============>', end);
  }, 3000)
}

add(4, 4)
add1(222, 11)
add2(11, 2234)


console.log('===============> finish', Date.now());