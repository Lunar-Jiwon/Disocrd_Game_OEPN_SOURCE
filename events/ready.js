const client = require('../index').client;
const messages = require('../functions/return_messages');
const {server_id,channel_id} = require('../config.json');
client.on('ready',()=>{
    console.log(messages.bot_messages.ready.message);
    module.exports.channel = client.guilds.cache.get(server_id).channels.cache.get(channel_id)
})

