import { HttpModule, Module } from "@nestjs/common";
import { CollectibleController } from "./CollectibleController";

@Module({
    imports: [HttpModule],
    controllers: [CollectibleController],
    providers: [],
})
export class CollectibleModule {}
