module.exports = (plop) => {
  plop.setGenerator("c", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component Name:",
      },
      {
        type: "input",
        name: "group",
        message: "Group Name (optional): ",
      },
    ],
    actions: (data) => {
      const path = `../src/components/${data?.group || ""}/`;
      const actions = [
        {
          type: "add",
          path: path + "{{pascalCase name}}/{{pascalCase name}}.tsx",
          templateFile: "templates/c/component.tsx.hbs",
        },
        {
          type: "add",
          path: path + "{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
          templateFile: "templates/c/component.stories.tsx.hbs",
        },
        {
          type: "add",
          path: path + "{{pascalCase name}}/index.tsx",
          templateFile: "templates/c/index.tsx.hbs",
        },
      ];
      return actions;
    },
  });
  plop.setHelper("trailingSlash", function (text) {
    return text ? `${text}/` : "";
  });
};
