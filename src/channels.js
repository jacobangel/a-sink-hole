const csp = require('js-csp');

/**
 * This is the most basic example from the js-csp docs.
 */
function getChannel(argus) {
  const chopper = csp.chan();
  csp.go(function*() {
    yield csp.put(chopper, argus + ' ' + Math.random());
    yield csp.timeout(1000);
  });
  return chopper;
}

function useChannel(channel) {
  csp.go(function*() {
    const ch = channel;
    console.log('It got: ' + (yield csp.take(ch)));
  });
}

module.exports = {
  run() {
    useChannel(getChannel('hello man'));
  },
};
