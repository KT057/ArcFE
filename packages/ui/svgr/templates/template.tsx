const template = (variables, { tpl }) => tpl`
${variables.imports};
${variables.interfaces};
export const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);
`;

module.exports = template;
