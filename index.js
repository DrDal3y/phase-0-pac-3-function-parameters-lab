function introduction(Josh) {
    return `Hi, my name is ${Josh}.`;
}
console.log(introduction("Josh"));

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguage("Josh", "JavaScript"));

function introductionLanguageOptional(name, language) {
    return `Hi, my name is ${name}  and I am learning to program in ${language}.`
}
console.log(introductionLanguageOptional("Nancy", "Pyhton"));

function introductionWithLanguageOptional(name, language="JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguageOptional("Gracie", "JavaScript"));