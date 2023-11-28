const Discord = require('discord.js');
const client = new Discord.Client({ 

	intents:[
		Discord.GatewayIntentBits.Guilds,
		Discord.GatewayIntentBits.GuildMembers
  	]
});

// Resto del código del bot aquí...
client.on('ready', () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

client.on('message', message => {
	console.log(`Llego hasta aqui`);
  const sourceChannelID = '697814297098846240'; // Reemplaza con el ID del canal de origen
  const botChannelID = '818925124484333581'; // Reemplaza con el ID del canal donde está el bot

  console.log(`Mensaje recibido en el canal: ${message.channel.id}`); // Para verificar el canal del mensaje

  if (message.channel.id === sourceChannelID && message.author.id !== client.user.id) {
    console.log(`Mensaje del canal de origen detectado: ${sourceChannelID}`);
    
    const botChannel = client.channels.cache.get(botChannelID);

    if (botChannel) {
      botChannel.send(`[${message.author.tag}] ${message.content}`);
      console.log('Mensaje copiado al canal del bot.');
    } else {
      console.log('No se pudo encontrar el canal del bot.');
    }
  }
});

client.on('error', console.error); 

client.login('MTE3ODY5ODM3MTU2MTcwNTU5Mg.G0ZK6I.a1jGrzMxO9zWIdAj2YgqST-HedBIvrpGycqu9Q');
