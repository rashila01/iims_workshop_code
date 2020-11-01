const fs = require("fs");
const { promisify } = require("util");

const readFileAsync = promisify(fs.readFile);

const read = async () => {
  try {
    const text = await readFileAsync("./class_task1/read.json", { encoding: "utf8" });
    console.log(text);
  } catch (e) {
    console.log(e);
  }
};
read();

const writeFileAsync = promisify(fs.writeFile);

let jsArrObj = [
  {
    name:"Rashila",
    age: 20,
  },
  {
    name: "Sristy",
    age: 15,
  },
  {
    name: "Sneha",
    age: 20
  }
];
const write = async () => {
  try {
    const data = JSON.stringify(jsArrObj);
    await writeFileAsync("write.json", data, (e) => {
      if (e) throw e;
    });
  } catch (e) {
    console.error(e);
  }
};

write();