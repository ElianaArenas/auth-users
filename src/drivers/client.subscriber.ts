import { Injectable } from '@nestjs/common';

import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Client, User } from './schemas';


@EventSubscriber()
@Injectable()
export class ClientSubscriber implements EntitySubscriberInterface<Client> {


  listenTo() {
    return Client;
  }

  async afterInsert(event: InsertEvent<Client>) {

    
    await event.manager.getRepository(User)
    .createQueryBuilder()
        .insert()
        .into(User)
        .values({
          username: `prueba${event.entity.dni}`,
          password:"frererds",
          role:"client",
          client: event.entity.dni
      })
        .execute()
    
    // console.log(event.entity.dni);
    
    

  }

}