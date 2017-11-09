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
  self.plantationGrid = [{}, {id:'01', desc:'Sensor de agua de la zona norte de la plantacion', sensor:'agua', alarm:'NO', estado:'ok', hum:'10%'}, {}, {}, {}, {}, {}, {id:'02', desc:'Sensor de plagas de la zona noreste de la plantacion',sensor:'bug', estado:'ok',  alarm:'NO', medic:"0.01%"}, {}, {},
  {},{},{},{},{}, {id:'03', desc:'Sensor de plagas de la zona media de la plantacion',sensor:'bug', estado:'warn',  alarm:'NO', medic:'2%'}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {}, {id:'04', desc:'Sensor de agua de la zona sur de la plantacion', sensor:'agua', estado:'error' , alarm:'SI', hum:'10%'}, {}, {}, {}];
  
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