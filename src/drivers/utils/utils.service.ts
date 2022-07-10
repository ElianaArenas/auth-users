import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {

  /**
   * Create chunks to divide a large array
   * @param array 
   * @param chunkSize 
   * @returns 
   */
  getArrayAsChunks(array, chunkSize):Array<any> {
    let result = [];
    const data = array.slice(0);
    while (data[0]) {
      result.push(data.splice(0, chunkSize));
    }
    return result;
  };

}
