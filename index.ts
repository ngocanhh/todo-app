import app from "./src/app";
require("./src/controllers");

const port: number = 3000;

// const bar = () => {
//   console.log("bar");
//   setTimeout(base, 0);
//   new Promise((resolve) => {
//     bat();
//     resolve(null);
//   });
//   console.log("bar2");
// };

// const base = () => console.log("base");

// const bat = () => {
//   console.log("bat");
//   new Promise((resolve) => {
//     baz();
//     resolve(null);
//   });
// };

// const afterTwoSeconds = (s: number): Promise<number> => {
//   return new Promise<number>((resolve) => {
//     console.log("");
//     setTimeout(() => {
//       resolve(1);
//     }, s);
//   });
// };

// (async function () {
//   afterTwoSeconds(2000)
//     .then(() => {
//       return 3;
//     })
//     .then(() => 1)
//     .then((value) => {
//       console.log(value);
//     });
// })();

// const baz = () => console.log("baz");

// const foo = () => {
//   console.log("foo");
//   setTimeout(bar, 0);
// };

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
