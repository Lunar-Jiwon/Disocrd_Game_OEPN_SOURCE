const client = require('../index').client;
const {Message, MessageEmbed,TextChannel} = require('discord.js');
const Color = {RED:"#ff3636",GREEN:"#36ff4a",BLUE:"#3683ff"};
module.exports = {
    /**
     * 
     * @param {Message} message 
     * 
     */
    reply:async function(message,title,description,fields,type){
        var Embed = new MessageEmbed();
        Embed.setTitle(title);
        Embed.setDescription(description);
        if(fields) Embed.addFields(fields);
        switch(type){
            case "RED":
                Embed.setColor(Color.RED);
                break;
            case "GREEN":
                Embed.setColor(Color.GREEN);
                break;
            case "BLUE":
                Embed.setColor(Color.BLUE);
                break;
        }
        return await message.reply({embeds:[Embed]});
    },
    /**
     * 
     * @param {Message} message 
     * @param {TextChannel} channel
     */
    send:async function(channel,title,description,fields,type){
        var Embed = new MessageEmbed();
        Embed.setTitle(title);
        Embed.setDescription(description);
        if(fields) Embed.addFields(fields);
        switch(type){
            case "RED":
                Embed.setColor(Color.RED);
                break;
            case "GREEN":
                Embed.setColor(Color.GREEN);
                break;
            case "BLUE":
                Embed.setColor(Color.BLUE);
                break;
        }
        return await channel.send({embeds:[Embed]});
    }
}