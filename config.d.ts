declare const _default: (() => {
    postgres: {
        database: string | undefined;
        port: number;
        password: string | undefined;
        username: string | undefined;
        host: string | undefined;
    };
    apiKey: string | undefined;
    jwtSecret: string | undefined;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    postgres: {
        database: string | undefined;
        port: number;
        password: string | undefined;
        username: string | undefined;
        host: string | undefined;
    };
    apiKey: string | undefined;
    jwtSecret: string | undefined;
}>;
export default _default;
