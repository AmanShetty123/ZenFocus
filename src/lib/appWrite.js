import { Client, Account } from 'react-native-appwrite';

const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68340a030002718c053c')
    .setPlatform('com.company.zenfocus');

const account = new Account(client);

export {client, account};