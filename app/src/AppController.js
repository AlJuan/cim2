/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(MenuDataService, PlantationDataService, $mdSidenav) {
  var self = this;

  self.selected     = null;
  self.items        = [ ];
  self.selectItem   = selectItem;
  self.toggleList   = toggleUsersList;

  // Load all registered users

  MenuDataService
        .loadMenu()
        .then( function( menu ) {
          self.items    = [].concat(menu);
          self.selected = menu[0];
        });

  function toggleUsersList() {
    $mdSidenav('left').toggle();
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectItem ( item ) {
    self.selected = angular.isNumber(item) ? $scope.items[item] : item;
  }
}

export default [ 'MenuDataService', 'PlantationDataService', '$mdSidenav', AppController ];
