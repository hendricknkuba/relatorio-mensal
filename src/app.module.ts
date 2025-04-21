import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import  { UserModule } from "./modules/user/user.module";
import  { ReportModule } from "./modules/report/report.module";
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [AuthModule, UserModule, ReportModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
