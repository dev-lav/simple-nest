import {
    Controller,
    Get,
    Query,
    Request
} from "@nestjs/common";
import { IApiResponse } from "src/common/utils/IApiResponse";
import { CollectibleEntity } from "../../entities/CollectibleEntity";

@Controller("collectibles")
export class CollectibleController {

    @Get()
    async getList(): Promise<IApiResponse> {
        
        const getData = await CollectibleEntity.findAll({
            order: [
                ['collectible_name', 'ASC']
            ]
        });

        return {
            data: getData,
            message: "success get collectibles data",
        };
    }

}