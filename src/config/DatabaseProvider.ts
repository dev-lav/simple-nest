import { Sequelize } from "sequelize-typescript";
import { databaseConfig } from "./DatabaseConfig";
import { CollectibleEntity } from "../entities/CollectibleEntity";

class DatabaseProviders {
    private readonly _primeSequelize = new Sequelize({
        ...databaseConfig[process.env.NODE_ENV],
        ...{ database: process.env.DB_NAME, logging: false },
    });
    private _databaseProviders = [
        {
            provide: "PRIME",
            useFactory: async () => {
                const config = {
                    ...databaseConfig[process.env.NODE_ENV],
                    ...{ database: process.env.DB_NAME, logging: false },
                };
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const sequelize = new Sequelize(config);

                // init model to sequelize
                sequelize.addModels([
                    CollectibleEntity
                ]);

                await sequelize.sync();
                return sequelize;
            },
        }
    ];

    getDatabaseProviders() {
        return this._databaseProviders;
    }

    getPrimeSequelize() {
        return this._primeSequelize;
    }
}

export const databaseProviders = new DatabaseProviders().getDatabaseProviders();
export const primeDatabase = new DatabaseProviders().getPrimeSequelize();
