"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConceptoGasto = void 0;
const graphql_1 = require("@nestjs/graphql");
var ConceptoGasto;
(function (ConceptoGasto) {
    ConceptoGasto["gasolina"] = "Gasolina";
    ConceptoGasto["salario"] = "Salario";
    ConceptoGasto["recargas"] = "Recargas";
    ConceptoGasto["ahorros"] = "Ahorros";
    ConceptoGasto["otros"] = "Otros";
})(ConceptoGasto = exports.ConceptoGasto || (exports.ConceptoGasto = {}));
(0, graphql_1.registerEnumType)(ConceptoGasto, {
    name: 'ConceptoGasto',
});
//# sourceMappingURL=user.enums.js.map