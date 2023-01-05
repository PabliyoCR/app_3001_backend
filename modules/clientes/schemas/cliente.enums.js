"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zona = void 0;
const graphql_1 = require("@nestjs/graphql");
var Zona;
(function (Zona) {
    Zona["grecia"] = "Grecia";
    Zona["sarchi"] = "Sarch\u00ED";
    Zona["naranjo"] = "Naranjo";
    Zona["palmares"] = "Palmares";
    Zona["san_ramon"] = "San Ram\u00F3n";
})(Zona = exports.Zona || (exports.Zona = {}));
(0, graphql_1.registerEnumType)(Zona, {
    name: 'Zona',
});
//# sourceMappingURL=cliente.enums.js.map