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

    try {
      //After a client is created a user is created
      await event.manager.getRepository(User)
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
          username: `user${event.entity.dni}`,
          password: `Mwvsd.${Math.random()}452_`,
          role: "client",
          client: event.entity.dni
        })
        .execute()
    } catch (error) {
      throw new Error(error);
    }


  }

}