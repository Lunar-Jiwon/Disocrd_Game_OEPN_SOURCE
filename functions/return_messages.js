const {send,reply} = require('../discord_functions/message_reply_send');
const {game_name,prefix} = require('../config.json')
var {Joined_Players} =  require('../functions/game_functions')
const bot_messages = {
    ready:{message:"봇이 준비되었습니다."},
    not_found_error:{message:"알 수 없는 오류가 발생했습니다."}
}

const game_messages = {
    not_game_ready:(message)=>{
        return reply(message,game_name,`아직 게임이 시작되지 않았습니다\n**${prefix}${game_name} 시작** 명령어를 통해 게임을 시작시켜주세요.`,undefined,"RED")
    },
    player_join:(message,plr)=>{
        Joined_Players.push(plr)
        var join_plr_text = "";
        Joined_Players.forEach(plr=>{
            join_plr_text = join_plr_text + `<@${plr}>\n`
        })
        return reply(message,game_name,`<@${plr}>님이 게임에 참가하였습니다.`,{name:"참가자 목록",value:join_plr_text},"GREEN")
    },
    already_game_ready:(message)=>{
        return reply(message,game_name,`이미 게임이 시작되었으며, 참가하려면 **${prefix}${game_name} 참가** 명령어로 참가해주세요.`,undefined,"RED");
    },
    already_game_join:(message)=>{
        return reply(message,game_name,`이미 게임에 참가하셨습니다.\n나가시려면 **${prefix}${game_name} 나가기** 명령어로 나가기를 해주세요`,undefined,"RED");
    }
}


module.exports = {
    bot_messages:bot_messages,
    game_messages:game_messages 
}