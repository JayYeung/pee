const express = require('express')
const app = express()
const port = 3000
const { spawn, execSync } = require('node:child_process');





// app.use("/", (req,res) => {
//     res.redirect("/index.html");
// })

app.use("/api/count", (req, res) => {
    // On Windows Only...
    // const bat = spawn('C:/Users/Jay_Y/AppData/Local/Programs/Python/Python310/python.exe', ['a.py']);
    const out = execSync('C:/Users/Jay_Y/AppData/Local/Programs/Python/Python310/python.exe a.py');

    // var out = "";

    res.json({data: JSON.parse(out.toString())});

});
app.use(express.static('public'))
// app.get('/', (req, res) => {
//     res.send('<html> Hello World!')
//     // On Windows Only...
//     // const { spawn } = require('node:child_process');
//     // const bat = spawn('C:/Users/Jay_Y/AppData/Local/Programs/Python/Python310/python.exe', ['a.py']);

//     // bat.stdout.on('data', (data) => {
//     //     res.send(data.toString());
//     // });

//     // bat.stderr.on('data', (data) => {
//     //     console.error(data.toString());
//     // });

//     // bat.on('exit', (code) => {
//     //     console.log(`Child exited with code ${code}`);
//     // });
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})