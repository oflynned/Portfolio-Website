/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    plugins: [
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                google: {
                    families: ["Roboto", "Quicksand", "Open Sans"],
                },
            },
        },
        {
            resolve: "gatsby-plugin-favicon",
            options: {
                logo: "./src/assets/images/favicon.png",
            },
        },
        "gatsby-plugin-react-helmet",
    ]
};
