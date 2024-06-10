const {buildModule} = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('Qudefi', (m) => {
  const qudefi = m.contract('Qudefi', [], {});

  return {qudefi};
});
