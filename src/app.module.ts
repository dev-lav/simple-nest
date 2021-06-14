import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/DatabaseModule';
import { CollectibleModule } from './modules/collectibles/CollectibleModule';

@Module({
  imports: [DatabaseModule, CollectibleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
