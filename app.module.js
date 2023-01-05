"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const apollo_1 = require("@nestjs/apollo");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const apollo_server_core_1 = require("apollo-server-core");
const path_1 = require("path");
const users_module_1 = require("./modules/users/users.module");
const tarjetas_module_1 = require("./modules/tarjetas/tarjetas.module");
const database_module_1 = require("./database/database.module");
const config_1 = require("@nestjs/config");
const enviroments_1 = require("./modules/enviroments");
const auth_module_1 = require("./auth/auth.module");
const clientes_module_1 = require("./modules/clientes/clientes.module");
const abonos_module_1 = require("./modules/abonos/abonos.module");
const config_2 = require("./config");
const Joi = require("joi");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const pubsub_module_1 = require("./modules/pubsub/pubsub.module");
const schedule_1 = require("@nestjs/schedule");
const cron_service_1 = require("./shared/services/cron/cron.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                sortSchema: true,
                playground: false,
                plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageLocalDefault)()],
                cors: {
                    origin: '*',
                    credentials: true,
                },
                subscriptions: {
                    'graphql-ws': true,
                    'subscriptions-transport-ws': true,
                },
            }),
            config_1.ConfigModule.forRoot({
                envFilePath: enviroments_1.enviroments[process.env.NODE_ENV] || '.env',
                load: [config_2.default],
                isGlobal: true,
                validationSchema: Joi.object({
                    API_KEY: Joi.number().required(),
                    POSTGRES_DB: Joi.string().required(),
                    POSTGRES_USER: Joi.string().required(),
                    POSTGRES_PASSWORD: Joi.string().required(),
                    POSTGRES_PORT: Joi.number().required(),
                    POSTGRES_HOST: Joi.string().hostname().required(),
                }),
            }),
            users_module_1.UsersModule,
            tarjetas_module_1.TarjetasModule,
            clientes_module_1.ClientesModule,
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            abonos_module_1.AbonosModule,
            pubsub_module_1.PubsubModule,
            schedule_1.ScheduleModule.forRoot(),
        ],
        providers: [
            {
                provide: 'PUB_SUB',
                useValue: new graphql_subscriptions_1.PubSub(),
            },
            cron_service_1.CronService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map