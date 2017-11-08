import ItemDetailsController from './ItemDetailsController'

export default {
  name : 'itemDetails',
  config : {
    bindings         : {  selected: '<' },
    templateUrl      : 'src/users/components/details/ItemDetails.html',
    controller       : [ '$mdBottomSheet', '$log', 'PlantationDataService', ItemDetailsController ]
  }
};