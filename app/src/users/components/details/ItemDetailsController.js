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
  self.plantationGrid = [
   {agua: {id:'01', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'02', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'03', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}
    }, 
  {agua: {id:'04', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'05', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'06', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}},
  {agua: {id:'07', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'08', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'09', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}}, 
  {agua: {id:'10', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'11', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'12', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}}, 
  {agua: {id:'13', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'14', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'15', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'SI', estado:'error', medic:'0%'}},
  {agua: {id:'16', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'17', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'18', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}},
  {agua: {id:'19', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'20', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'21', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}}, 
  {agua: {id:'22', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'23', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'24', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}},
  {agua: {id:'25', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'26', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'warn', medic:'24%'},
    nut: {id:'27', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}},
  {agua: {id:'28', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'29', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'30', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}}, 
    //COLUMNA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  {agua: {id:'31', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'32', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'33', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}}, 
  {agua: {id:'34', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'35', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'36', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}},
  {agua: {id:'37', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'38', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'39', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}}, 
  {agua: {id:'40', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'41', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'42', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}}, 
  {agua: {id:'43', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'44', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'45', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}},
  {agua: {id:'46', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'47', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'48', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}},
  {agua: {id:'49', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'50', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'51', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}}, 
  {agua: {id:'52', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'53', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'54', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}},
  {agua: {id:'55', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'56', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'57', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}},
  {agua: {id:'58', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'59', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'60', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}}, 
    //COLUMNA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   {agua: {id:'61', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'62', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'63', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}}, 
  {agua: {id:'64', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'65', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'66', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}},
  {agua: {id:'67', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'68', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'69', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}}, 
  {agua: {id:'70', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'71', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'72', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}}, 
  {agua: {id:'73', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'74', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'75', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}},
  {agua: {id:'76', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'77', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'78', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}},
  {agua: {id:'79', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'80', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'81', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}}, 
  {agua: {id:'82', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'83', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'84', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}},
  {agua: {id:'85', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'86', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'87', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}},
  {agua: {id:'88', desc:'Sensor de agua la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'10%'},
    bug: {id:'89', desc:'Sensor de plagas la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'0.02%'},
    nut: {id:'90', desc:'Sensor de nutrientes la zona norte de la plantacion', alarm:'NO', estado:'ok', medic:'5%'}} 
    //COLUMNA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   ];
  
  self.selectSensor = function(bucket) {
      self.selected.name = "Sensor";
      self.selectedSensor = bucket;
  }

  self.closeSensor = function() {
    self.selected.name = 'Estado de la plantacion';
  }

  var originatorEv;

    self.openMenu = function($mdMenu, ev) {
      originatorEv = ev;
      $mdMenu.open(ev);
    };

}

export default ItemDetailsController;