import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventStoreService } from './event-store.service.js';

@Controller('event-store')
export class EventStoreController {
  constructor(
    private readonly eventStoreService: EventStoreService,
  ) {}

  @Post('email')
  storeEmail(
    @Body()
    payload: {
      from: string;
      to: string;
      subject: string;
      body: string;
    },
  ) {
    return this.eventStoreService.storeEmail(payload);
  }

  @Get('events')
  getEvents() {
    return this.eventStoreService.getEvents();
  }
}
