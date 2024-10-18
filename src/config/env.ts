
export const envConfig = {
    mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/test',
    port: parseInt(process.env.PORT, 10) || 3000,
    jwtSecret: process.env.JWT_SECRET || 'default_secret',
};