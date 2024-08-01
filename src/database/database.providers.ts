import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mssql',
      host: 'your_sql_server_host',
      port: 1433,
      username: 'sa',
      password: process.env.DATABASE_PASSWORD,
      database: 'your_database_name',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      options: {
        encrypt: false,
        enableArithAbort: true,
      },
    }),
  },
];
