const { join } = require("path");

const firstUpperCase = ([first]) =>
  first === first.toUpperCase() ||
  "The name must begin with an upper case letter";

module.exports = function (plop, projectSrc) {
  plop.setGenerator("pageComponent", {
    description: "React page component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "page component name",
      },
    ],
    actions: () => [
      {
        type: "add",
        path: join(projectSrc, "pages/{{name}}/index.tsx"),
        templateFile: "templates/pageComponent/index.tsx.hbs",
      },
      {
        type: "add",
        path: join(projectSrc, "pages/{{name}}/styles.ts"),
        templateFile: "templates/pageComponent/styles.ts.hbs",
      },
      {
        type: "add",
        path: join(projectSrc, "pages/{{name}}/types.ts"),
        templateFile: "templates/pageComponent/types.ts.hbs",
      },
    ],
  });
};
