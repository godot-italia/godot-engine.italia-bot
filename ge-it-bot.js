var Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
   console.log("Connected as "+client.user.tag)
   client.user.setActivity("Godot Engine")
})

client.login("NTQ0OTY0MjEwMDgyNDQ3MzYz.D0Sxnw.GZzwVATXVOaqKP52W01OOb0DwQw")

client.on('guildMemberAdd',member => {
  const channel = "544927111564230658"
  client.channels.get(channel).send(':mega: Diamo il benvenuto a ' + member.user.username + ', nuovo godoter italiano! <:godot:545213465099239434>')

  member.addRole("544953909563621376")

  member.send("Benvenuto nel server Discord di Godot Engine - Italia! Se riscontri problemi, contatta lo staff in privato o nei canali appositi. Per sapere quali comandi puoi effettuare, utilizza `!comandi`.")
})

client.on('message', message => {
  var channelID
  if(message.content === ('!links')) {
        channelID = message.channel.id
        client.channels.get(channelID).send(":globe_with_meridians:  __Questa e' la lista di tutti i nostri link!__ :globe_with_meridians:  \n<:facebook:545206318936489994> **Facebook:**  https://www.facebook.com/groups/1926189904375792/ \n<:telegram:545206371784589323> **Telegram:** https://t.me/joinchat/Ga4KigwWn53t2RRfoaPSKg \n:arrow_forward:  **Discord:** https://discordapp.com/invite/SETvpGJ \n:globe_with_meridians: **Sito Web:** https://godotengineitalia.com/")
  }
  else if (message.content === ('!comandi')) {
    channelID = message.channel.id
    client.channels.get(channelID).send(':mag_right: Lista dei miei comandi:\n`!comandi` lista dei comandi (questa)\n`!links` ottieni tutti i nostri link \n`!godot` sito web ufficiale di Godot Engine\n`!godot_download` tutte le pagine di download di godot\n`!godot_doc` documentazione ufficiale di Godot Engine (inglese)\n`!jam` usa il Bot per trovare i partecipanti della Jam attuale e creare dei gruppi')
  }
  else if (message.content === ('!godot')) {
    channelID = message.channel.id
    client.channels.get(channelID).send('<:godot:545213465099239434> **Sito web ufficiale di Godot Engine:** https://godotengine.org/')
  }
  else if (message.content === ('!godot_download')) {
    channelID = message.channel.id
    client.channels.get(channelID).send('<:godot:545213465099239434> **Pagina relativa ai download di Godot Engine:**\n`Windows` https://godotengine.org/download/windows\n`Linux` https://godotengine.org/download/linux\n`Max OS` https://godotengine.org/download/osx')
  }
  else if (message.content === ('!godot_doc')) {
    channelID = message.channel.id
    client.channels.get(channelID).send('<:godot:545213465099239434> **Documentazione ufficiale di Godot Engine (inglese):** https://docs.godotengine.org/en/3.0/')
  }
  else if (message.content === ('!jam')) {
    channelID = message.channel.id
    client.channels.get(channelID).send("⬇️ **Partecipi alla Jam? Scegli il tuo ruolo!** ⬇️\n")
    .then(() => client.channels.get(channelID).send("Partecipante:"))
    .then((msg) => msg.react('✋'))
    .then(() => client.channels.get(channelID).send("In cerca di gruppo:"))
    .then((msg) => msg.react('🤝'))
    .then(() => { const embed = new Discord.RichEmbed()
      .setTitle('Godot Engine Italia')
      .setColor('0x0000ff')
      .setDescription('Prima Game Jam di GodotEngine – Italia')
      .setURL('https://godotengineitalia.com/prima-game-jam-della-community-godot-italia/')
      .setThumbnail('https://images-ext-1.discordapp.net/external/jqW2frvIPtpHlckjYIw-B_Va_3w1fxAQM7y6VldbZfA/https/godotengineitalia.com/wp-content/uploads/2019/06/copertina-game_jam.jpg')
      client.channels.get(channelID).send(embed)
    })
    //.then(() => client.channels.get(channelID).send("Utente Regolare:"))
    //.then((msg) => msg.react('👤'))
  }


 // reboot
 else if(message.content === '<?RESET'){
   resetBot(message.channel)
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

function resetBot(channel) {
  channel.send('Resetting...')
  .then( msg => client.destroy())
  .then(() => client.login("NTQ0OTY0MjEwMDgyNDQ3MzYz.D0Sxnw.GZzwVATXVOaqKP52W01OOb0DwQw"))
}

// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- comando per JAM
