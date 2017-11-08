function ItemDetailsController($mdBottomSheet, $log, PlantationDataService){
  var self = this;
  self.$mdBottomSheet = $mdBottomSheet;
  self.$log = $log;
  PlantationDataService
        .loadPlantations()
        .then( function( plantations ) {
          self.plantations = [].concat(plantations);
          self.selectedPlantation = plantations[0];
        });
  self.plantationGrid = [{}, {id:'01', desc:'Sensor de agua de la zona norte de la plantacion', sensor:'agua', alarm:'NO', estado:'ok', hum:'10%'}, {}, {}, {}, {}, {}, {sensor:'bug', estado:'ok'}, {}, {},
  {},{},{},{},{}, {sensor:'bug', estado:'error'}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {}, {sensor:'agua', estado:'warn'}, {}, {}, {}];
  
  self.selectSensor = function(bucket) {
      if (bucket.id){
        self.selected.name = "Sensor";
        self.selectedSensor = bucket;
      }
  }

  self.closeSensor = function() {
    self.selected.name = 'Estado de la plantacion';
  }

}





export default ItemDetailsController;

