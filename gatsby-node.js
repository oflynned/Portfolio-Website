const path = require("path");
const projects = require("./src/common/portfolio");

exports.createPages = ({actions}) => {
    const {createPage} = actions;
    const template = path.resolve(`./src/components/templates/project.js`);
    return new Promise((resolve, reject) => {
        projects.forEach(project => {
            const title = project.title.toLowerCase().replace(/ /g, "-");
            createPage({
                path: `/portfolio/${title}`,
                component: template,
                context: {
                    project
                },
            })
        });
        resolve();
    })
};
