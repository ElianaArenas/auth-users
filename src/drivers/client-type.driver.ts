import { ICommonDriver } from "./common-type.driver";

export abstract class IClientDriver extends ICommonDriver{

  abstract createMany(data:Array<any>);
  
}