import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { Document } from "mongoose";

@Schema()
export class Category extends Document {
    @Prop({
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        trim: true,
        unique: true,
    })
    name: string;

    @Prop({
        type: {
            public_id: String,
            pathUrl: String
        }
    })
    coverImage: {
        public_id: string;
        pathUrl: string;
    };

    @Prop({
        type: String,
        default: null,
    })
    folderId: string;
}

export const categorySchema = SchemaFactory.createForClass(Category)