import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

import { Role } from "src/common/enums/role.enum";


@Schema()
export class User extends Document {
    @Prop({
        type: String,
        minlength: 2,
        maxlength: 50,
        trim: true,
        lowercase: true,
        required: true
    })
    name: string;

    @Prop({
        type: String,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        minlength: 5,
        maxlength: 255,
        trim: true,
        required: true,
        unique: true
    })
    email: string;

    @Prop({
        type: String,
        required: true
    })
    password: string;

    @Prop({
        type: [String],
        match: /^\+\d{1,3} \(\d{3}\) \d{3}-\d{4}$/
    })
    phoneNumbers: string[]

    @Prop({
        type: Date,
        required: true,
        default: null
    })
    bornAt: Date;

    @Prop({
        type: String,
        enum: ['male', 'female'],
        default: 'male',
    })
    gender: string

    @Prop({
        type: String,
        enum: Object.values(Role),
        default: Role.Patient,
    })
    role: string;

    // email verification
    @Prop({
        type: Boolean,
        default: false,
    })
    isVerified: boolean;

    @Prop({
        type: {
            code: { type: String, default: null },
            expiresAt: { type: Date, default: null },
            reason: { type: String, default: null },
            tempMail: { type: String, default: null }
        }
    })
    verificationCode: {
        code: string;
        expiresAt: Date;
        reason: string;
        tempMail: string;
    }

    // token
    @Prop({
        type: String,
        default: null
    })
    refreshToken: string;


    // 2FA
    @Prop({
        type: String,
        default: null
    })
    '2faSecret': string | null;

    @Prop({
        type: Boolean,
        default: false
    })
    '2faEnabled': boolean | false;

}

export const UserSchema = SchemaFactory.createForClass(User);
