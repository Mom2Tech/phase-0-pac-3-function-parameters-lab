function introduction(name) {
    let introduction = `${name}`;
    return `Hi, my name is ${name}.`;
}
function introductionWithLanguage(name, language) {
    let introduce = `${name}, ${language}`;
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    let introduce = `${name}, ${language}`;
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}