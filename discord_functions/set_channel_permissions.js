const {client} = require('../index');
const {channel_id,server_id} = require('../config.json')
const channel = client.guilds.cache.get(server_id).channels.cache.get(channel_id)
module.exports = {
    set_Permission_alllock:async function(){
        await channel.permissionOverwrites.set([{
            id: client.guilds.cache.get(serverid).roles.everyone.id,
            deny: ['SEND_MESSAGES'],
         }])
         await Channel.permissionOverwrites.edit(client.user.id, { SEND_MESSAGES: true })
    },
    set_Permission_unlock_user:async function(users){
        var data = [];
        users.forEach(user => {
            data.push({id:user,allow:['SEND_MESSAGES']})
        });
        await channel.permissionOverwrites.set(data)
        await Channel.permissionOverwrites.edit(client.user.id, { SEND_MESSAGES: true })
    },
    set_Permission_lock_user:async function(user){
        await Channel.permissionOverwrites.edit(user, { SEND_MESSAGES: true })
    }
}