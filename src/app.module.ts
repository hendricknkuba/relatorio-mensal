import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import  { UserModule } from "./modules/user/user.module";
import  { ReportModule } from "./modules/report/report.module";

@Module({
  imports: [AuthModule, UserModule, ReportModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
