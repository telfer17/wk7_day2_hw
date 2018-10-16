const instrumentData = require('./data/instrument_data');
const InstrumentFamilies = require('./models/instrument_families');
const SelectView = require('./views/select_view');
const ResultView = require('./views/result_view');

    document.addEventListener('DOMContentLoaded', () => {
      const instrumentsDataModel = new InstrumentFamilies(instrumentData);
      instrumentsDataModel.bindEvents()

      const selectElement = document.querySelector('#instrument-families')
      const instrumentDropdown = new SelectView(selectElement)
      instrumentDropdown.bindEvents();

      const instrumentDiv = document.querySelector('#instrument-info')
      const instrumentView = new ResultView(instrumentDiv)
      instrumentView.bindEvents();

});

// document.addEventListener('DOMContentLoaded', function(){
// const selectElement = document.querySelector('select#animals-dropdown');
// const animalDropdown = new SelectView(selectElement);
// animalDropdown.bindEvents();
//
// const infoDiv = document.querySelector('div#animal-info')
// const animalInfoDisplay = new AnimalInfoView(infoDiv);
// animalInfoDisplay.bindEvents();
//
// const animalsDataSource = new Animals();
// animalsDataSource.bindEvents();
