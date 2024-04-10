/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'ReceitasController.searchRecipes')
  Route.get('logout', 'UsuariosController.logout').as('auth.logout')
}).middleware('auth')

Route.get('register', 'UsuariosController.registerPage').as('auth.register.show')
Route.get('login', 'UsuariosController.loginPage').as('auth.login.show')

Route.post('register', 'UsuariosController.register').as('auth.register')
Route.post('login', 'UsuariosController.login').as('auth.login')
