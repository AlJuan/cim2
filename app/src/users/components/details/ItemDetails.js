import ItemDetailsController from './ItemDetailsController'

export default {
  name : 'userDetails',
  config : {
    bindings         : {  selected: '<' },
    templateUrl      : 'src/users/components/details/ItemDetails.html',
    controller       : [ '$mdBottomSheet', '$log', ItemDetailsController ]
  }
};