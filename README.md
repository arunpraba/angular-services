# Services and Dependency injection

Few Important concents in angular Services
Angular Services and Dependency injection

## Services

Services are the class. which contains common functions, repetative Logics

## Dependency Injection

Its a Mechanism to connect components to Service

## useClass

Its a way to provide service to Module. It will create the new Instance

`providers: [
  {
  provide: PeopleService,
  useClass: PeopleService
  }
]`

## useExisting

Its a way to update old service wIth newService in Module. It will overwrIte old service

`providers: [
InventorsService,
  {
  provide: PeopleService,
  useExisting: InventorsService
  }
]`

## useValue

Its a way to pass the object as service in Module.

const simpleEmployee = {
getPeople() {
return new EmployeeService().getPeople();
}
};

`providers: [
  {
  provide: EmployeeService,
  useValue: simpleEmployee
  },
]`

## useFactory

Its a way to pass the value to the service in Module.

`const value = new EmployeeService();
const simpleReturn = () => {
return value.getPeople();
};`

`providers: [
  {
  provide: ManService,
  useFactory: simpleReturn
  }
]`

## @SkipSelf()

It will skip dependency check in component level

`constructor(
@SkipSelf()
private inventorService:InventorService) {
this.inventor = this.inventorService.getPeople()
}`

## @Host(),

It will check dependency in component level

`constructor(
@Host()
private inventorService:InventorService) {
this.inventor = this.inventorService.getPeople()
}`

## @Optional()

It will check dependency, if not available then It will provide `null` value

`constructor(
@Optional()
private inventorService:InventorService) {
this.inventor = this.inventorService.getPeople()
}`
