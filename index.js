var Discord = require('discord.js')
const { token } = require('./config.json')

const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds] })

client.once('ready', () => {
  console.log("Connected as %s", client.user.tag)
  client.user.setActivity("Godot Engine")
})

client.login(token)

client.on('guildMemberAdd', member => {
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
    await interaction.reply("🌐 __Questa e' la lista di tutti i nostri link!__ 🌐 \n✨ **Facebook:**  https://www.facebook.com/groups/1926189904375792/ \n✨ **Telegram:** https://t.me/joinchat/Ga4KigwWn53t2RRfoaPSKg \n✨ **Discord:** https://discordapp.com/invite/SETvpGJ \n✨ **Sito Web:** https://godotengineitalia.com/")
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

  // reboot
  else if (commandName === 'r') {
    if (interaction.member.roles.cache.find(role => role.id === '544923339182047233')) {
      resetBot(interaction)
    } else {
      await interaction.reply('⛔ Non hai i permessi!')
    }
  }

})

async function resetBot(interaction) {
  await interaction.reply('Resetting...')
  client.destroy()
  client.login(token)
}