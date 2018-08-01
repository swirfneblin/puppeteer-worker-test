const runner = require('./helperpuppeteer');

(async () => {
    const _instance = new runner();
    await _instance.init('http://www.google.com');
    await _instance.screenshot('open');
    await _instance.destroy();

    await _instance.init('https://www.vivaolinux.com.br/dica/Desvendando-o-comando-DATE');
    await _instance.screenshot('open');

    await _instance.destroy();

    console.log('Finalizado!');
})();