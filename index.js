const {Client,Intents,Collection} = require('discord.js');
const client = new Client({intents:[Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MEMBERS]})
const {token} = require('./config.json');
module.exports = {client,Collection}
require('./functions/commands_require').start()
client.login(token)
