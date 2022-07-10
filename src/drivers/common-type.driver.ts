export abstract class ICommonDriver{

  abstract create(data?:any):Promise<any>
  abstract get(id:any):Promise<any>
  abstract getAll():Promise<any>
  abstract update(id: any,data:any):Promise<any>
  abstract delete(id: any):Promise<any>
  
}