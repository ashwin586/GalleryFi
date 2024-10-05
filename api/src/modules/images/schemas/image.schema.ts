import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ImageDocument = HydratedDocument<Image>;

@Schema()
export class Image {
  @Prop()
  url: string;

  @Prop({ default: Date.now })
  uploadedAt: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  userId: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
