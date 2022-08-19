# godot-engine.italia-bot

Creare il file `./config.json` con il seguente formato
```json
{
    "token":"<token del bot>",
    "clientId":"<id del bot>",
    "guildId":"<id del server>"
}
```

### Node
se si ha `node` installato, lanciare i comandi
```bash
$> node i
$> node index.js
```

### Docker
se si ha `docker` installato, lanciare i comandi
```bash
$> docker build . -t geita/discord-bot
$> docker run --name geita-discordbot -d geita/discord-bot
```