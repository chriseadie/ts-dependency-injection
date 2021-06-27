
import { Driver } from './Controllers/Driver/Driver';
import { register } from './DIRegister/register';
import di from './DIService/DependencyInjectionService';

register()

var driver = di.GetService<Driver>("driver");

driver.drive();