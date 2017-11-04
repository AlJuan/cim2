// Load the custom app ES6 modules

import MenuDataService from 'src/users/services/MenuDataService';

import ItemsList from 'src/users/components/list/ItemsList';
import UserDetails from 'src/users/components/details/UserDetails';

// Define the Angular 'users' module

export default angular
  .module("users", ['ngMaterial'])

  .component(ItemsList.name, ItemsList.config)
  .component(UserDetails.name, UserDetails.config)

  .service("MenuDataService", MenuDataService);
