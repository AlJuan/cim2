// Load the custom app ES6 modules

import MenuDataService from 'src/users/services/MenuDataService';

import ItemsList from 'src/users/components/list/ItemsList';
import ItemDetails from 'src/users/components/details/ItemDetails';

// Define the Angular 'users' module

export default angular
  .module("items", ['ngMaterial'])

  .component(ItemsList.name, ItemsList.config)
  .component(ItemDetails.name, ItemDetails.config)

  .service("MenuDataService", MenuDataService);
