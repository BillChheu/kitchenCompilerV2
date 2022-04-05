const Recipe = require("../../models/Recipe")

const {PythonShell} = require("python-shell")


module.exports = {

    Mutation: {
        async addRecipe(_,{url}) {
           /* const exec = require("child_process").exec;
            const pythonProcess = exec("python", ["../../scripts/scraper.py"])

            pythonProcess.stdout.on("data", (data) => {
                console.log(data); 
            
            }) */

            PythonShell.run("scripts/scraper.py", null, (err, results) => {
                if (err)
                    throw err;
                console.log(results);
            })

        }
    }

}