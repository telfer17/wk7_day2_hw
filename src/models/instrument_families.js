const PubSub = require('../helpers/pub_sub')

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:item-clicked', (event) => {
    const selectedInstrument = event.detail
    const instrument = this.find(selectedInstrument)
    PubSub.publish('InstrumentFamilies:instruments-ready', data)
  })
};

InstrumentFamilies.prototype.find = function (data) {
  const foundData = this.data.find((currentData) => {
    return currentData.name === data
  });
  return foundData;
};





module.exports = InstrumentFamilies;
