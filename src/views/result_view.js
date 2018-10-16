const PubSub = require('../helpers/pub_sub')

const ResultView = function(element) {
  this.element = element
}

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:instruments-ready', (event) => {
    const instrument = event.detail;
    this.render(instrument);
  });
};

ResultView.prototype.render = function (instrument) {
  this.element.innerHTML = '';
  
  const header = document.createElement('h1')
  header.textContent = instrument.name
  this.element.appendChild(header)

  const paragraph = document.createElement('p')
  paragraph.textContent = instrument.description
  this.element.appendChild(paragraph)

  const list = document.createElement('ul')
  list.textContent = instrument.instruments
  this.element.appendChild(list)
};

module.exports = ResultView;
