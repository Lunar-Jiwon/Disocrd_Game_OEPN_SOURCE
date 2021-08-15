const fs = require('fs');
const index = require('../index')
const Collection = index.Collection;
const commands = new Collection();
module.exports = {
    commands:commands,
    start:async function() {
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`../commands/${file}`)
            commands.set(command.name, command)
        }
        fs.readdirSync('./events').filter(file => file.endsWith('.js')).forEach(event => {
            require(`../events/${event}`)
        })
    }
}