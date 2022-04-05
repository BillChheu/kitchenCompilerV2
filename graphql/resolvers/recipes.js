const {parse} = require("recipe-ingredient-parser-v3")
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

            const options = {
                args: [url]
            }

            PythonShell.run("scripts/scraper.py", options, (err, results) => {
                if (err)
                    throw err;
                console.log(results)
           //     const temp = parse(results[2], "eng")
              //  console.log(temp)
                
            })

        }
    }

}