const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Risponde con pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Risponde con le informazioni del server!'),
	new SlashCommandBuilder().setName('user').setDescription('Risponde con le informazioni dell\'utente!'),
	new SlashCommandBuilder().setName('links').setDescription('Risponde con tutti i link utili!'),
	new SlashCommandBuilder().setName('godot').setDescription('Risponde il link di Godot Engine Italia!'),
	new SlashCommandBuilder().setName('godot_download').setDescription('Risponde il link per scaricare Godot!'),
	new SlashCommandBuilder().setName('godot_doc').setDescription('Risponde il link per leggere la documentazione di Godot!'),
	new SlashCommandBuilder().setName('jam').setDescription('Risponde con i bottoni per la jam!'),
	new SlashCommandBuilder().setName('r').setDescription('Reset del bot! Solo per amministratori.')

]
.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
