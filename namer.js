const parts = [
    "Serializer",
    "Factory",
    "Producer",
    "Manager",
    "Abstract",
    "Adapter",
    "Bridge",
    "Builder",
    "Prototype",
    "Composite",
    "Decorator",
    "Singleton",
    "Facade",
    "Flyweight",
    "Proxy",
    "Iterator",
    "Mediator",
    "Guarantor",
    "Observer",
    "State",
    "Service",
    "Association",
    "Internal",
    "Template",
    "Visitor",
    "Delegate",
    "Provider",
    "Registry",
    "Operator",
    "Model"
];
const generics = [
    "T",
    "R",
    "U super Object",
    "IEnumerable<T>",
    "Iterable<? Extends A>"
];
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let nameLength = 5;
let out = "";
for (let i = 0; i < nameLength; i++) {
    out += parts[getRandomInt(parts.length)];
}
let genericCount = 3;
let uUsed = false;
if (genericCount > 0) {
    out += "<";
    let tCount = 0;
    let rCount = 0;
    for (let i = 0; i < genericCount; i++) {
        const index = getRandomInt(generics.length);
        console.log(index);
        const generic = generics[index];
        out += generic;
        if (index == 0 && tCount++ > 0){
            out += tCount;
        }
        else if (index == 1 && rCount++ > 0 ){
            out += rCount;
        }
        out += ", "
    }
    out = out.substring(0, out.length - 2)
    out += ">";

}

console.log(out);