import { Client, Storage, ID } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject("64fe9e67d71d1c56225a") // Your project ID

const storage = new Storage(client);

export { client, storage, ID }