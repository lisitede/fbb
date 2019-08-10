const forge = require('node-forge');
// const md5 = require('vanilla.js/node-forge/md5');
// const sha1 = require('vanilla.js/node-forge/sha1');
// const sha256 = require('vanilla.js/node-forge/sha256')


module.exports.handler = function (req, resp, context) {
  const bits = req.queries.bits ? parseInt(req.queries.bits, 10) : 2048;

  const rsa = forge.pki.rsa;
  const pki = forge.pki;

  const keypair = rsa.generateKeyPair({ bits, e: 0x10001 });
  // console.log(keypair);

  const pub = pki.publicKeyToPem(keypair.publicKey)
    .replace('-----BEGIN PUBLIC KEY-----', '')
    .replace('-----END PUBLIC KEY-----', '')
    .replace(/\s/g, '');
  // console.log(pub);

  const prv = pki.privateKeyToPem(keypair.privateKey)
    .replace('-----BEGIN RSA PRIVATE KEY-----', '')
    .replace('-----END RSA PRIVATE KEY-----', '')
    .replace(/\s/g, '');
  // console.log(prv);

  const rest = {
    code: 0,
    message: 'ok',
    data: {
      bits,
      pub,
      prv,
    }
  };

  resp.setHeader('Content-Type', 'application/json');
  resp.send(JSON.stringify(rest, null, 2));
};
