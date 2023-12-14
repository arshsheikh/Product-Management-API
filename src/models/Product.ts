import { Document, Schema, model } from 'mongoose';

export interface IProduct extends Document {
  productName: string;
  productImage: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

const productSchema = new Schema({
  productName: String,
  productImage: String,
  description: String,
  quantity: Number,
  unitPrice: Number,
});

export const Product = model<IProduct>('Product', productSchema);

