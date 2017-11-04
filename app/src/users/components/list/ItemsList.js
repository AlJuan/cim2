// Notice that we do not have a controller since this component does not
// have any specialized logic.

export default {
  name : 'itemsList',
  config : {
    bindings         : {  items: '<', selected : '<', showDetails : '&onSelected' },
    templateUrl      : 'src/users/components/list/ItemsList.html'
  }
};
