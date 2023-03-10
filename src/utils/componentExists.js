const fs = require("fs");

function getNavigators(comp, folder = "pages") {
    const pageContainers = fs.readdirSync("src/pages");
    let navigators = pageContainers.filter((element) => 
        element.includes("Navigator")
    );
    navigators = navigators.length == 0 ? navigators : navigators.concat("Default");
    return navigators;
}

function componentExists(comp, folder = "components") {
    const pageComponents = fs.readdirSync(`src/${folder}`);
    const pageContainers = fs.readdirSync("src/pages");
    const components = pageComponents.concat(pageContainers);
    return components.indexOf(comp) >= 0;
}

function navigatorExistsForViews(comp, folder = "pages", navigator) {
    const pageContainers = fs.readdirSync(`src/pages/${navigator}`);
    return pageContainers.indexOf(`${comp}`) >= 0;
}   

function viewExists(comp, folder = "pages") {
    const pageContainers = fs.readdirSync("src/pages");
    return pageContainers.indexOf(comp) >= 0;
}

module.exports = {
    getNavigators,
    componentExists,
    navigatorExistsForViews,
    viewExists
}