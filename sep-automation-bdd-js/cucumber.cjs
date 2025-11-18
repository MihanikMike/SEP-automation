/**
 * This configuration object is used to set up and customize the Cucumber.js testing framework.
 * It provides options for parallel execution, paths to feature files, step definitions, hooks,
 * report formats, snippet interface, and world parameters.
 */
module.exports = {
  
  default: {
    /**
     * Number of workers to run in parallel.
     * @type {number}
     */
    parallel: 1,

    /**
     * Glob patterns for feature files.
     * @type {string[]}
     */
    paths: ["./features/**/*.feature"], // path to the feature files

    /**
     * Glob patterns for step definition files and hooks.
     * @type {string[]}
     */
    import: ["./steps/**/*.js", "./hooks/**/*.js"], // path to the step definitions and hooks

    /**
     * Report formats to be generated.
     * @type {string[]}
     */
    format: [
      "progress-bar",
      "json:reports/cucumber-report.json",
      "html:reports/cucumber-report.html",
    ],

    /**
     * Additional options for report formats.
     * @type {object}
     * @property {string} snippetInterface - The interface for generating snippets.
     */
    formatOptions: { snippetInterface: "async-await" },

    /**
     * Parameters to be passed to the world constructor.
     * @type {object}
     */
    worldParameters: {
      ...process.env,
    },
  },
  
};
