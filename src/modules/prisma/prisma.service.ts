import { PrismaClient } from 'generated/prisma';

export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://admin:secret@localhost:5432/myrelatorio_db?schema=public',
        },
      },
    });
  }
}
