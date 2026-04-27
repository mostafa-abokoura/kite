import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'delivery_admin',
      password: 'secure_password_123',
      database: 'delivery_platform',
      entities: [], // We will add your User and Provider entities here later
      synchronize: true, // WARNING: True for local development only! Auto-creates database tables.
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
