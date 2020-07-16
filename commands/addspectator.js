const functions = require('../modules/functions')

exports.run = (client, message, args) => {
  if(client.voiceChannels.length === 0) {
    message.channel.send("You have not started a session yet! Please run the =newsession command.")
    return
  }
  if (args.length === 0) {
    message.channel.send("Please provide a name to add.");
    return;
  }
  args.forEach((spectator) => {
    functions.addParticipant(spectator, message, client.currentSpectators, "spectators");
  });
};