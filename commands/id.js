const Discord = require ('discord.js')

exports.run = async (client ,message) => {
    message.delete().catch(O_o => {});


    message.channel.send(`Sua id é: ${message.author.id}`)

}