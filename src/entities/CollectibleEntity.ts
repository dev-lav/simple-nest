import {
    Model,
    Table,
    Column,
    DataType,
    CreatedAt,
    UpdatedAt,
    BelongsToMany,
    IsUUID
} from "sequelize-typescript";
import Sequelize from "sequelize";

interface ICollectibleModel {
    id: number;
    collectible_uuid: string;
    collectible_category: string;
    collectible_name: string;
    collectible_type: string;
    ipfs_media_path: string;
    token_address: string;
    token_id: number;
}

@Table({ tableName: "collectibles", timestamps: false })
export class CollectibleEntity
    extends Model<ICollectibleModel, ICollectibleModel>
    implements ICollectibleModel {
    @Column({
        field: "id",
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER,
    })
    id: number;

    @IsUUID(4)
    @Column({
        field: "collectible_uuid",
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
    })
    collectible_uuid!: string;

    @Column({
        field: "collectible_category",
        allowNull: true,
        type: DataType.STRING(25),
    })
    collectible_category: string;

    @Column({
        field: "collectible_name",
        allowNull: true,
        type: DataType.STRING(25),
    })
    collectible_name: string;

    @Column({
        field: "collectible_type",
        allowNull: true,
        type: DataType.STRING(10),
    })
    collectible_type: string;

    @Column({
        field: "ipfs_media_path",
        allowNull: true,
        type: DataType.STRING(100),
    })
    ipfs_media_path: string;

    @Column({
        field: "token_address",
        allowNull: true,
        type: DataType.STRING(100),
    })
    token_address: string;

    @Column({
        field: "token_id",
        allowNull: true,
        type: DataType.INTEGER,
    })
    token_id: number;
}