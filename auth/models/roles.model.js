"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const graphql_1 = require("@nestjs/graphql");
var Role;
(function (Role) {
    Role["empleado"] = "empleado";
    Role["admin"] = "admin";
})(Role = exports.Role || (exports.Role = {}));
(0, graphql_1.registerEnumType)(Role, {
    name: 'Role',
});
//# sourceMappingURL=roles.model.js.map