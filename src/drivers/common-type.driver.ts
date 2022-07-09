export abstract class ICommonDriver{

  abstract create(data:any):Promise<any>
  abstract find(id:any):Promise<any>
  abstract findAll():Promise<any>
  abstract update(id: any,data:any):Promise<any>
  abstract delete(id: any):Promise<any>
  
}