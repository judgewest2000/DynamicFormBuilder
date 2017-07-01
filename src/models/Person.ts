import { Address } from './Address';
import { Vehicle } from './Vehicle';
export interface Person {
    firstName: string;
    lastName: string;
    height: number;
    age: number;
    vehicles: Vehicle[];
    address: Address;
}