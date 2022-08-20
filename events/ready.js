const express = require("express")
const app = express()
const client = require("../index");


client.on("ready", () =>
    console. log(`${client.user.tag} is up and ready to go!`)
);

 app.get("/", (req, res) => {
   res.send("Lets's Fucking Go xD!")
 })

 app.listen(3000, () => {
   console.log('READY');
 })
  

