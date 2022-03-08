module.exports.run = async (client, message, args) => {

    // !clear aantal

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Je hebt geen toestemming.");

    if (!args[0]) return message.reply("Geef een aantaal op dat je wilt weg halen.");

    if (parseInt(args[0])) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if (parseInt(args[0]) == 1){
                message.channel.send("Ik heb 1 bericht verwijderd.").then(msg => {
                    setTimeout(() => {
                        msg.delete();
                    }, 3000);
                });
            } else {
                message.channel.send(`Ik heb ${parseInt(args[0])} berichten verwijderen`).then(msg => {
                    setTimeout(() => {
                        msg.delete();
                    }, 3000);
                });
            }

        }).catch (err => {
            return message.reply("Geef een getal groter dan 0 op.");
        });

    } else {
       return message.reply("Geef een getal op.");
    }
}
module.exports.help = {
    name: "clear",
    category: "general",
    description: "Verwijderd berichten"
}