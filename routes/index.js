const main = (app, client) => {
  /* GET home page. */
  app.get('/', function (req, res) {
    res.render('index', {
      title: 'nodejs-tasmota'
    });
  });

  app.get('/control/on', function (req, res) {
    const fullTopic = `tasmota/cmnd/tasmota-1/POWER`
    client.publish(fullTopic, "ON");
    res.send('Turn on!')
  })

  app.get('/control/off', function (req, res) {
    const fullTopic = `tasmota/cmnd/tasmota-1/POWER`
    client.publish(fullTopic, "OFF");
    res.send('Turn off!')
  })
}

module.exports = main;