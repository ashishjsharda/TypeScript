const serviceConfig: Record<string, string | number | boolean> = {

    port: 3000,

    basePath: "http://localhost",

    enableStripePayments: false,

};

console.log(serviceConfig.port);
console.log(serviceConfig.basePath);
