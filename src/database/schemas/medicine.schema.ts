import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import mongoose, { Document } from "mongoose";

@Schema()
export class Medicine extends Document {
    @Prop({
        type: String,
        required: true,
        trim: true,
        unique: true,
    })
    name: string

    @Prop({
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 100,
    })
    description: string

    @Prop({
        type: Date,
        required: true,
        default: null
    })
    expireAt: Date

    @Prop({
        type: Number,
        required: true,
        default: 0
    })
    quantity: number


    // images
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
        type: [
            {
                public_id: String,
                pathUrl: String
            }
        ]
    })
    images: [
        {
            public_id: String,
            pathUrl: String
        }
    ];

    @Prop({
        type: String,
        default: null,
    })
    folderId: string;

    // relations
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    })
    categoryId: mongoose.Schema.Types.ObjectId

}

export const medicineSchema = SchemaFactory.createForClass(Medicine)