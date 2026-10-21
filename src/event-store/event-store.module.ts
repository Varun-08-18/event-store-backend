import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventStoreController } from './event-store.controller.js';
import { EventStoreService } from './event-store.service.js';
import { Event, EventSchema } from './event.schema.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Event.name, schema: EventSchema },
    ]),
  ],
  controllers: [EventStoreController],
  providers: [EventStoreService],
})
export class EventStoreModule {}
