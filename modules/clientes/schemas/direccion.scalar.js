"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DireccionScalar = void 0;
const graphql_1 = require("graphql");
const ajv_1 = require("ajv");
const ajv = new ajv_1.default();
const DireccionSchema = {
    type: 'object',
    properties: {
        latitud: { type: 'number' },
        longitud: { type: 'number' },
    },
    required: ['latitud', 'longitud'],
};
const direccionValidate = ajv.compile(DireccionSchema);
function validateDirecion(direccion) {
    if (!direccionValidate(direccion)) {
        throw new Error('Invalid Validator');
    }
    return direccion;
}
exports.DireccionScalar = new graphql_1.GraphQLScalarType({
    name: 'Direccion',
    serialize: (value) => validateDirecion(value),
    parseValue: (value) => validateDirecion(value),
    parseLiteral: (ast) => validateDirecion(ast.kind),
});
//# sourceMappingURL=direccion.scalar.js.map