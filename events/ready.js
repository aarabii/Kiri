const express = require("express")
const app = express()
const client = require("../index");


client.on("ready", () =>
    console.log(`${client.user.tag} is up and ready to go!`)
);

    const Servers = client.guilds.cache.size;
    
    const Members = client.users.cache.size;

    const array = [
      `.help or /help`,
      `New Application <3`,
      `.support or /support to contact with DEVs`
    ];
      


      setInterval(() => {
        const random = Math.floor(Math.random() * array.length); 
    
        client.user.setActivity(array[random], { type: "WATCHING" });

    }, 5000);


 app.get("/", (req, res) => {
   res.send("Lets's Fucking Go xD!")
 })

 app.listen(3000, () => {
   console.log('READY');
 })
  

