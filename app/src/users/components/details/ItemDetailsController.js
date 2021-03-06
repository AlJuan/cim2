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


  self.dailyChart = {
    labels: ["9/11/2017", "10/11/2017", "11/11/2017", "12/11/2017", "13/11/2017", "14/11/2017", "15/11/2017", "16/11/2017"],
    series: ['Medicion', 'WARN','ERROR'],
    colors: ["rgb(63,146,255)","rgb(255,255,0)","rgb(255,0,0)", "rgb(0,0,0)"],
    data: [
      [10, 12, 10, 14, 11, 8, 15, 16],
      [10, 10, 10, 10, 10, 10, 10, 10],
      [5, 5, 5, 5, 5, 5, 5, 5]
    ],
    options: {
      legend: {
        display: true
      },                                                                                             
      scales: {
        yAxes: [{id: 'y-axis-1', type: 'linear', position: 'left', ticks: {min: 0, max:30}}]
      }
    }
  };

self.generalChart = {
    labels: ["9/11/2017", "10/11/2017", "11/11/2017", "12/11/2017", "13/11/2017", "14/11/2017", "15/11/2017", "16/11/2017"],
    series: ['Medicion', 'WARN','ERROR'],
    colors: ["rgb(63,146,255)","rgb(255,255,0)","rgb(255,0,0)"],
    data: [
      [30, 30, 28, 24, 29, 28, 30, 28],
      [0, 0, 0, 4, 0, 2, 0, 1],
      [0, 0, 2, 2, 1, 0, 0, 1]
    ],
    options: {
      legend: {
        display: true
      }
    }
  };


self.dailyChartNut = {
    labels: ["9/11/2017", "10/11/2017", "11/11/2017", "12/11/2017", "13/11/2017", "14/11/2017", "15/11/2017", "16/11/2017"],
    series: ['Medicion', 'WARN','ERROR'],
    colors: ["rgb(63,146,255)","rgb(255,255,0)","rgb(255,0,0)", "rgb(0,0,0)"],
    data: [
      [10, 12, 10, 14, 11, 8, 5, 0],
      [8, 8, 8, 8, 8, 8, 8, 8],
      [5, 5, 5, 5, 5, 5, 5, 5]
    ],
    options: {
      legend: {
        display: true
      },                                                                                             
      scales: {
        yAxes: [{id: 'y-axis-1', type: 'linear', position: 'left', ticks: {min: 0, max:30}}]
      }
    }
  };

  self.dailyChartBug = {
    labels: ["9/11/2017", "10/11/2017", "11/11/2017", "12/11/2017", "13/11/2017", "14/11/2017", "15/11/2017", "16/11/2017"],
    series: ['Medicion', 'WARN','ERROR'],
    colors: ["rgb(63,146,255)","rgb(255,255,0)","rgb(255,0,0)", "rgb(0,0,0)"],
    data: [
      [10, 12, 10, 14, 18, 19, 20, 24],
      [20, 20, 20, 20, 20, 20, 20, 20],
      [25, 25, 25, 25, 25, 25, 25, 25]
    ],
    options: {
      legend: {
        display: true
      },                                                                                             
      scales: {
        yAxes: [{id: 'y-axis-1', type: 'linear', position: 'left', ticks: {min: 0, max:50}}]
      },
      elements: {line: {fill: false}}
    }
  };



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
  };

  self.closeSensor = function() {
    self.selected.name = 'Estado de la plantacion';
  };

  self.selectReporte = function(ev) {
    self.selected.name = 'Reportes';
  };

  self.selectReporteGeneral = function(ev) {
    self.selected.name = 'Reporte General';
  };

  self.closeReporteGeneral = function(ev) {
    self.selected.name = 'Estado de la plantacion';
  };

  self.closeReporte = function() {
    self.selected.name = 'Sensor';
  };

  var originatorEv;

    self.openMenu = function($mdMenu, ev) {
      originatorEv = ev;
      $mdMenu.open(ev);
    };

}

export default ItemDetailsController;