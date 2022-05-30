const fs = require('fs');

exports.mod = (mod_info) => {
    const modConfig = JSON.parse(fs.readFileSync(__dirname + '/mod.config.json'));

    logger.logInfo(`[MOD] ${modConfig.name}. Loading...`);

    for(const b in global._database.bots) {
        const botDifficultyFilePath = __dirname + '/db/bots/' + b + '/aiconfig.json';
        if(fs.existsSync(botDifficultyFilePath)) {
            var data = fs.readFileSync(botDifficultyFilePath, 'utf8');
            data = JSON.parse(data);
        
            global._database.bots[b].difficulty.easy = data;
            global._database.bots[b].difficulty.normal = data;
            global._database.bots[b].difficulty.hard = data;
            global._database.bots[b].difficulty.impossible = data;
    
            logger.logDebug(`[MOD] ${modConfig.name}; Applied ${b} ai config data`);
        }
    }

    logger.logSuccess(`[MOD] ${modConfig.name}; Complete.`);

}

