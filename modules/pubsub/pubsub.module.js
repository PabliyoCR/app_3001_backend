"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubsubModule = exports.PUB_SUB = void 0;
const common_1 = require("@nestjs/common");
const global_decorator_1 = require("@nestjs/common/decorators/modules/global.decorator");
const graphql_subscriptions_1 = require("graphql-subscriptions");
exports.PUB_SUB = 'PUB_SUB';
let PubsubModule = class PubsubModule {
};
PubsubModule = __decorate([
    (0, global_decorator_1.Global)(),
    (0, common_1.Module)({
        providers: [
            {
                provide: exports.PUB_SUB,
                useValue: new graphql_subscriptions_1.PubSub(),
            },
        ],
        exports: [exports.PUB_SUB],
    })
], PubsubModule);
exports.PubsubModule = PubsubModule;
//# sourceMappingURL=pubsub.module.js.map