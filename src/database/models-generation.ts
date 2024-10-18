import { MongooseModule } from "@nestjs/mongoose";

import { User, UserSchema } from "./schemas/user.schema";
import { Category, categorySchema } from "./schemas/category.schema";
import { Medicine, medicineSchema } from "./schemas/medicine.schema";

export const Model = MongooseModule.forFeature([
    { name: User.name, schema: UserSchema },
    { name: Category.name, schema: categorySchema },
    { name: Medicine.name, schema: medicineSchema },
]);