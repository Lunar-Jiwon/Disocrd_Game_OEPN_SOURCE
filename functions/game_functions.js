var Joined_Players = [];
exports.Joined_Players = Joined_Players
var IsGameReady = false;
var IsGamePlaying = false;
const {client} = require('../index');
const {Message, User} = require('discord.js')
const {game_start_time} = require('../config.json')
const messages = require('../functions/return_messages');
const {set_Permission_alllock,set_Permission_lock_user,set_Permission_unlock_user} = require('../discord_functions/set_channel_permissions')
var Timer;

module.exports = {
    Player_Join:async function(message,user){
        if(IsGamePlaying) return
        if(!IsGameReady) return messages.game_messages.not_game_ready(message);
        
    },
    Game_Ready:async function(message,user){
        if(IsGamePlaying) return
        if(IsGameReady) return messages.game_messages.already_game_ready(message);
        IsGameReady = true;
        Game_Start();
        return messages.game_messages.player_join(message,user)
    },
    Game_On_Message:async function(message){
        if(!IsGamePlaying || IsGameReady) return
        // 게임 시작 후 작동할 코드
    }
}

async function Game_Start(){
    Timer = setTimeout((async function(){
        IsGameReady = false;
        IsGamePlaying = true;
        // set_Permission_alllock() -- 채널 사용자 전체에게 
        // set_Permission_lock_user(유저 데이터) -- 유저 배열을 이용해서 채널에 채팅을 못치게 한다 유저 데이터 : [유저1아이디, 유저2아이디];
        // set_Permission_unlock_user(유저 아이디) -- 특정 유저 아이디만 채널에 채팅을 못치게 한다
    }),game_start_time)
}