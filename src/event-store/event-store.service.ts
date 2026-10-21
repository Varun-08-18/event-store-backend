
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, EventDocument } from './event.schema.js';

@Injectable()
export class EventStoreService {
  constructor(
    @InjectModel(Event.name)
    private eventModel: Model<EventDocument>,
  ) {}

  async storeEmail(payload: {
    from: string;
    to: string;
    subject: string;
    body: string;
  }) {
    const event = new this.eventModel({
      eventType: 'EmailReceived',
      payload,
    });

    return event.save();
  }

  async getEvents() {
    return this.eventModel.find().exec();
  }
}
