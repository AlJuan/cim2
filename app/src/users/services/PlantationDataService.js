function PlantationDataService($q) {
  var plantations = [
    {
      name: 'Plantacion 1'
    },  
    {
      name: 'Plantacion 2',
    }
  ];

  // Promise-based API
  return {
    loadPlantations: function() {
      // Simulate async nature of real remote calls
      return $q.when(plantations);
    }
  };
}

export default ['$q', PlantationDataService];