"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GastoScalar = void 0;
const graphql_1 = require("graphql");
const ajv_1 = require("ajv");
const ajv = new ajv_1.default();
const GastoSchema = {
    type: 'object',
    properties: {
        concepto: { type: 'string' },
        monto: { type: 'number' },
        descripcion: { type: 'string' },
    },
    required: ['concepto', 'monto'],
};
const gastoValidate = ajv.compile(GastoSchema);
function validateGasto(gasto) {
    if (!gastoValidate(gasto)) {
        throw new Error('Invalid Validator');
    }
    return gasto;
}
exports.GastoScalar = new graphql_1.GraphQLScalarType({
    name: 'Gasto',
    serialize: (value) => validateGasto(value),
    parseValue: (value) => validateGasto(value),
    parseLiteral: (ast) => validateGasto(ast.kind),
});
//# sourceMappingURL=gasto.scalar.js.map