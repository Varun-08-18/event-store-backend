import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EventDocument = HydratedDocument<Event>;

@Schema({ timestamps: true })
export class Event {
  @Prop({ required: true })
  eventType: string;

  @Prop({ type: Object, required: true })
  payload: Record<string, any>;
}

export const EventSchema = SchemaFactory.createForClass(Event);
