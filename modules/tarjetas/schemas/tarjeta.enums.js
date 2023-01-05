"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumeroCuotas = exports.Interes = exports.DiaPago = exports.StatusTarjeta = void 0;
const graphql_1 = require("@nestjs/graphql");
var StatusTarjeta;
(function (StatusTarjeta) {
    StatusTarjeta["nueva"] = "Nueva";
    StatusTarjeta["pendiente"] = "Pendiente";
    StatusTarjeta["refinanciada"] = "Refinanciada";
    StatusTarjeta["pagada"] = "Pagada";
    StatusTarjeta["archivada"] = "Archivada";
})(StatusTarjeta = exports.StatusTarjeta || (exports.StatusTarjeta = {}));
(0, graphql_1.registerEnumType)(StatusTarjeta, {
    name: 'StatusTarjeta',
});
var DiaPago;
(function (DiaPago) {
    DiaPago["diario"] = "Diario";
    DiaPago["lunes"] = "Lunes";
    DiaPago["martes"] = "Martes";
    DiaPago["miercoles"] = "Miercoles";
    DiaPago["jueves"] = "Jueves";
    DiaPago["viernes"] = "Viernes";
    DiaPago["sabado"] = "Sabado";
    DiaPago["domingo"] = "Domingo";
    DiaPago["quincenal"] = "Quincenal";
})(DiaPago = exports.DiaPago || (exports.DiaPago = {}));
(0, graphql_1.registerEnumType)(DiaPago, {
    name: 'DiaPago',
});
var Interes;
(function (Interes) {
    Interes[Interes["veinte"] = 20] = "veinte";
    Interes[Interes["treinta"] = 30] = "treinta";
    Interes[Interes["cuarenta"] = 40] = "cuarenta";
})(Interes = exports.Interes || (exports.Interes = {}));
(0, graphql_1.registerEnumType)(Interes, {
    name: 'Interes',
});
var NumeroCuotas;
(function (NumeroCuotas) {
    NumeroCuotas[NumeroCuotas["veinticuatro"] = 24] = "veinticuatro";
    NumeroCuotas[NumeroCuotas["treinta"] = 30] = "treinta";
})(NumeroCuotas = exports.NumeroCuotas || (exports.NumeroCuotas = {}));
(0, graphql_1.registerEnumType)(NumeroCuotas, {
    name: 'NumeroCuotass',
});
//# sourceMappingURL=tarjeta.enums.js.map