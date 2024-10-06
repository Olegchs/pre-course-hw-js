const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
let flag = false

for (i of words) {
    if (i === "апельсин") {
        console.log(words.indexOf("апельсин"))
        flag = true
        break
    }
}
console.log(flag === false ? "Придется поискать в другом магазине" : "")