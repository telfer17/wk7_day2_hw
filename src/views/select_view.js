const PubSub = require('../helpers/pub_sub')

const SelectView = function(listItems) {
  this.listItems = listItems
}

SelectView.prototype.bindEvents = function () {
  this.listItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      const selectedData = event.target
      // console.log(selectedData);
      PubSub.publish('SelectView:item-clicked', selectedData)
    })
  })
};



module.exports = SelectView;
