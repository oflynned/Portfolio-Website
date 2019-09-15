const path = require("path");
const projects = require("./src/common/portfolio");

exports.createPages = ({actions}) => {
    const {createPage} = actions;
    const component = path.resolve(`./src/components/templates/project.js`);
    return new Promise(resolve => {
        projects.forEach(project => {
            const formattedTitle = project.title
                .toLowerCase()
                .replace(/ /g, "-");
            const path = `/portfolio/${formattedTitle}`;
            createPage({
                path,
                component,
                context: {
                    project: Object.assign({}, project, {formattedTitle})
                }
            })
        });
        resolve();
    })
};
