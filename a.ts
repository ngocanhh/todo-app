// setImmediate(() => {
//   console.log("2s");
// });
// setTimeout(() => {
//   console.log("t");
// }, 0);
// console.log("abc");

// setTimeout(() => {
//   soChe();
//   setTimeout(() => {
//     nau();
//     setTimeout(() => {
//       an();
//     });
//   }, 2000);
// }, 0);

function soChe() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("so che");
      resolve(1);
    }, 2000);
  });
}
console.log("start");
new Promise((resolve, reject) => {
  console.log("start so che");
  setTimeout(() => {
    console.log("so che");
    resolve(1);
  }, 2000);
});
console.log("end");
function nau() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("nau");
      resolve(1);
    }, 5000);
  });
}

function an() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("an");
      resolve(1);
    }, 5000);
  });
}
// soChe().then(nau).then(an).catch(console.error);
async function main() {
  await soChe();
  await nau();
  await an();
}
