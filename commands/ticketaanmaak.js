const discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    message.delete()

     var embed = new discord.MessageEmbed()
     .setTitle("Ticket maken")
     .setColor("#0086ff")
     .setDescription(" Maak een ticket aan door de command +ticket [reden] uit te voeren! Voer deze command uit in het kanaal ticket aanmaak")

        message.channel.send({ embeds: [embed] });
}

module.exports.help = {
    name: "help"
}