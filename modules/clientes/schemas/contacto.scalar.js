"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactoScalar = void 0;
const graphql_1 = require("graphql");
const ajv_1 = require("ajv");
const ajv = new ajv_1.default();
const ContactoSchema = {
    type: 'array',
    items: {
        type: 'number',
    },
};
const contactoValidate = ajv.compile(ContactoSchema);
function validateContacto(contacto) {
    if (!contactoValidate(contacto)) {
        throw new Error('Invalid Validator');
    }
    return contacto;
}
exports.ContactoScalar = new graphql_1.GraphQLScalarType({
    name: 'Contacto',
    serialize: (value) => validateContacto(value),
    parseValue: (value) => validateContacto(value),
    parseLiteral: (ast) => validateContacto(ast.kind),
});
//# sourceMappingURL=contacto.scalar.js.map