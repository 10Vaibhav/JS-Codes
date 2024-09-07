// for in 

const myObject = {
    js: "javaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
}

// for(const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming = ["js", "rb", "py", "java", "cpp"];

// for (const key in programming){
//     console.log(programming[key]);
// }


const map = new Map()

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

// console.log(map);

for (const key in map){
    console.log(key); // map is not itertable here.
}
