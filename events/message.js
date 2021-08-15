const client = require('../index').client;
const commands = require('../functions/commands_require').commands
const {prefix} = require('../config.json');
client.on("messageCreate",async message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift();
    const command = await commands.get(commandName)
    if(!command) return
    try{
        command.execute(message,args) 
    }catch(error){ 
        console.log(error) 
    }
})