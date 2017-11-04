/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(MenuDataService, $mdSidenav) {
  var self = this;

  self.selected     = null;
  self.users        = [ ];
  self.selectUser   = selectUser;
  self.toggleList   = toggleUsersList;

  // Load all registered users

  MenuDataService
        .loadMenu()
        .then( function( menu ) {
          self.users    = [].concat(menu);
          self.selected = menu[0];
        });

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  function toggleUsersList() {
    $mdSidenav('left').toggle();
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectUser ( user ) {
    self.selected = angular.isNumber(user) ? $scope.users[user] : user;
  }
}

export default [ 'MenuDataService', '$mdSidenav', AppController ];
