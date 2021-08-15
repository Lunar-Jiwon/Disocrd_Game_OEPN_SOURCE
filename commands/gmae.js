const {Message} = require('discord.js');
const game = require('../functions/game_functions');
const {game_name} = require('../config.json')
module.exports = {
    name:game_name,
    description:`인자 : 시작, 참가, 나가기, 설명`,
    /**
     * @param {Message} message
     */
    async execute(message,args){
        switch(args[0]){
            case "시작":
                game.Game_Ready(message,message.author.id)
                break;
            case "참가":
                game.Player_Join(message,message.author.id)
                break;
            case "나가기":
                break;
            case "설명":
                break;
            default:
                
                break;
        }
    }
}