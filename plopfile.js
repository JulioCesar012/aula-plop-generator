const { getNavigators, componentExists, navigatorExistsForViews, viewExists, } = require("./src/utils/componentExists");

module.exports = (plop) => {
    plop.setGenerator("Page",  {
        description: "Criar uma página nova",
        prompts: 
            getNavigators().length > 0 ? [
                {
                type: "list",
                name: "navigator",
                message: "Belongs to which example?",
                default: getNavigators()[0],
                choices: () => getNavigators(),
                },

                {
                    type: "input",
                    name: "name",
                    message: "Como você quer chamar isso?",
                    default: "Home",
                    validate: (value, otherValues) => {
                        if(/.+/.test(value)) {
                            if(otherValues.navigator != "Default") {
                                return navigatorExistsForViews(
                                    value,
                                    "components",
                                    otherValues.navigator
                                ) ? "O nome da página já é existente" : true;
                            } else {
                                return viewExists(value) ? "O nome da página já é existente" : true;
                            }
                        }
                        return "O nome da página é obrigatório"
                    }
                    },
        
        ]
        : 
        [
            {
                type: "input",
                name: "name",
                message: "Como você quer chamar isso?",
                default: "Home",
                validate: (value) => {
                   if(/.+/.test(value)) {
                    return viewExists(value) ? "O nome da página já existe" : true
                   }
                   return "Nome da página é obrigatório";
                },
            }
        ],
        actions: (data) => {
            const path = "src/pages/{{ pascalCase name }}/index.tsx";
            const pageTemplate = "__templates__/pages/default_page.js.hbs";

            const actions = [
                {
                    type: "add",
                    path: path,
                    templateFile: pageTemplate
                }
            ];
            return actions;
        },
    });

    plop.setGenerator("Components",  {
        description: "Criar um novo componente",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Como você quer chamar isso?",
                default: "Botão",
                validate: (value) => {
                    if(/.+/.test(value)) {
                        return componentExists(value) ? "O nome do componente já existe" : true;
                    }
                    return "O nome do componente é obrigatório";
                }
            }
        ],
        actions: (data) => {
            const patternImport = /\/\/ Import component here\n/g;
            const path = "src/components/{{ pascalCase name }}/index.tsx"
            const pathExport = "src/components/index.ts";
            const pageTemplate = "__templates__/components/component_index.js.hbs";

            const actions = [
                {
                    type: "add",
                    path: path,
                    templateFile: pageTemplate
                },
                {
                    type: "append",
                    path: pathExport,
                    template: `export * from './{{ pascalCase name }}';`
                }
            ];
            return actions;
        },
    });
}