import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GqlApiUsersComponent} from './gql-api-users/gql-api-users.component';
import {RestApiUsersComponent} from './rest-api-users/rest-api-users.component';

const routes: Routes = [{
  path: 'rest',
  component: RestApiUsersComponent
}, {
  path: 'gql',
  component: GqlApiUsersComponent
}, {
  path: '**',
  redirectTo: 'rest'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
