import { Account, Client, Databases, Functions } from 'react-native-appwrite';

const client = new Client();

const LOCAL_ENDPOINT = process.env.EXPO_PUBLIC_APPWRITE_LOCAL_FUNCTION_ENDPOINT!;
const CLOUD_ENDPOINT = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!;

const IS_LOCAL_TESTING = process.env.EXPO_PUBLIC_LOCAL_TEST === 'true';

const ENDPOINT = IS_LOCAL_TESTING ? LOCAL_ENDPOINT : CLOUD_ENDPOINT;

client
    .setEndpoint(ENDPOINT)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
    .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_NAME!);

export const account = new Account(client);
export const databases = new Databases(client);
export const functions = new Functions(client);