import { EntityManager } from "@mikro-orm/postgresql";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { MikroORM } from "@mikro-orm/core";
const em = await MikroORM.init<PostgreSqlDriver>({
    entities: ['./dist/entities/'],
    entitiesTs: ['./src/entities/'],
    dbName: 'ash-db',
    type: 'postgresql',
    host: 'localhost',
    port: 5432,
    user: '***',
    password: '***',
    debug: true,
    
});

console.log(em.em);
