const axios = require('axios');


module.exports.handler = function (req, resp, context) {
  axios.get('http://prop.lisitede.com/tenants/9511c8bb-4fc1-46df-a52a-8fa989443c0c/apps/league.v1.rsa.pub/envfile', { responseType: 'text' })
    .then(({ data }) => {
      const rest = {
        code: 0,
        message: 'ok',
        data: {
          spk: data.trim(),
        },
      };

      resp.setHeader('Content-Type', 'application/json');
      resp.send(JSON.stringify(rest, null, 2));
    })
    .catch((...args) => {
      console.error(args);
    });
};
