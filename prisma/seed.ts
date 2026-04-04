
import { PrismaClient } from '../src/app/generated/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const adapter = new PrismaMariaDb({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: 'rootpassword',
  database: 'agri_db',
});

const prisma = new PrismaClient({ adapter });

