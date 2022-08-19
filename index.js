var Discord = require('discord.js')
const { token } = require('./config.json')

const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds] })

client.once('ready', () => {
   console.log("Connected as %s",client.user.tag)
   client.user.setActivity("Godot Engine")
})

client.login(token)

client.on('guildMemberAdd',member => {
  const channel = "544927111564230658"
  client.channels.get(channel).send('📣 Diamo il benvenuto a ' + member.user.username + ', nuovo godoter italiano! <:godot:545213465099239434>')

  member.addRole("544953909563621376")

  member.send("Benvenuto nel server Discord di Godot Engine - Italia! Se riscontri problemi, contatta lo staff in privato o nei canali appositi. Per sapere quali comandi puoi effettuare, utilizza `!comandi`.")
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;
  console.log('Received command: %s', commandName)
  if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
  else if (commandName === ('links')) {
    await interaction.reply(":globe_with_meridians:  __Questa e' la lista di tutti i nostri link!__ :globe_with_meridians:  \n<:facebook:545206318936489994> **Facebook:**  https://www.facebook.com/groups/1926189904375792/ \n<:telegram:545206371784589323> **Telegram:** https://t.me/joinchat/Ga4KigwWn53t2RRfoaPSKg \n:arrow_forward:  **Discord:** https://discordapp.com/invite/SETvpGJ \n:globe_with_meridians: **Sito Web:** https://godotengineitalia.com/")
  }
  else if (commandName === ('godot')) {
    await interaction.reply('<:godot:545213465099239434> **Sito web ufficiale di Godot Engine:** https://godotengine.org/')
  }
  else if (commandName === ('godot_download')) {
    await interaction.reply('<:godot:545213465099239434> **Pagina relativa ai download di Godot Engine:**\n`Windows` https://godotengine.org/download/windows\n`Linux` https://godotengine.org/download/linux\n`Max OS` https://godotengine.org/download/osx')
  }
  else if (commandName === ('godot_doc')) {
    await interaction.reply('<:godot:545213465099239434> **Documentazione ufficiale di Godot Engine (inglese):** https://docs.godotengine.org/en/3.0/')
  }
  else if (commandName === ('jam')) {
    
    await interaction.reply("⬇️ **Partecipi alla Jam? Scegli il tuo ruolo!** ⬇️\n")
    .then(() => await interaction.reply("Partecipante:"))
    .then((msg) => msg.react('✋'))
    .then(() => await interaction.reply("In cerca di gruppo:"))
    .then((msg) => msg.react('🤝'))
    .then(() => { const embed = new Discord.RichEmbed()
      .setTitle('Godot Engine Italia')
      .setColor('0x0000ff')
      .setDescription('Prima Game Jam di GodotEngine – Italia')
      .setURL('https://godotengineitalia.com/prima-game-jam-della-community-godot-italia/')
      .setThumbnail('https://images-ext-1.discordapp.net/external/jqW2frvIPtpHlckjYIw-B_Va_3w1fxAQM7y6VldbZfA/https/godotengineitalia.com/wp-content/uploads/2019/06/copertina-game_jam.jpg')
      await interaction.reply(embed)
    })
    .then(() => await interaction.reply("Utente Regolare:"))
    .then((msg) => msg.react('👤'))
  }


 // reboot
 else if(commandName === 'r'){
  if (interaction.member.roles.cache.find(role => role.id === '544923339182047233')) {
    resetBot(interaction)
  } else {
    await interaction.reply('⛔ Non hai i permessi!')
  }
 }

})

client.on('messageReactionAdd', (reaction,user) => {
  if ( user.id !== reaction.message.author.id){
    // ------------------------- per la jam
  //  if ( reaction.message.channel.id === "544991102000955402" ){
       if (reaction.emoji.name === '✋') {
         client.channels.get(reaction.message.channel.id).send('<@'+user.id+'> parteciperà alla Jam')
         user.send("Hai ottenuto il ruolo *partecipante* per la Jam di Godot Engine Italia. Se vuoi rimuovere questo ruolo, rimuovi la reazione sul nostro Discord.\n")
         reaction.message.guild.members.get(user.id).addRole("621140407094607883")
       }

       if (reaction.emoji.name === '🤝') {
         client.channels.get(reaction.message.channel.id).send('<@'+user.id+'> sta cercando un gruppo')
         user.send("Hai ottenuto il ruolo *in cerca di gruppo* per la Jam di Godot Engine Italia. Se vuoi rimuovere questo ruolo, rimuovi la reazione sul nostro Discord.\n")
         reaction.message.guild.members.get(user.id).addRole("621145999112667166")
       }

    //   if (reaction.emoji.name === '👤') {
         //client.channels.get(reaction.message.channel.id).send('<@'+user.id+'> sta leggendo un libro...')
      //   reaction.message.guild.members.get(user.id).removeRole("621140407094607883")
    //   }
  //   }
   }
})

client.on('messageReactionRemove', (reaction,user) => {
 if ( user.id !== reaction.message.author.id){
   // ------------------------- per la jam
  // if ( reaction.message.channel.id === "544991102000955402" ){
      if (reaction.emoji.name === '✋') {
      //  client.channels.get(reaction.message.channel.id).send('<@'+user.id+'> parteciperà alla Jam')
      //  user.send("Hai ottenuto il ruolo *partecipante* per la Jam di Godot Engine Italia. Se vuoi rimuovere questo ruolo, reagisci ad 'utente regolare' sul nostro Discord.")
        reaction.message.guild.members.get(user.id).removeRole("621140407094607883")
      }

      if (reaction.emoji.name === '🤝') {
      //  client.channels.get(reaction.message.channel.id).send('<@'+user.id+'> sta cercando un gruppo')
        reaction.message.guild.members.get(user.id).removeRole("621145999112667166")
      }

   //   if (reaction.emoji.name === '👤') {
        //client.channels.get(reaction.message.channel.id).send('<@'+user.id+'> sta leggendo un libro...')
     //   reaction.message.guild.members.get(user.id).removeRole("621140407094607883")
    //  }
  //  }
  }
})
//Comando per comandi

async function resetBot(interaction) {
  await interaction.reply('Resetting...')
  client.destroy()
  client.login(token)
}

// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- comando per JAM
