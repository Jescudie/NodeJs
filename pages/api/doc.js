import { withSwagger } from 'next-swagger-doc';
const swaggerHandler = withSwagger({
openApiVersion: '3.0.0',
title: 'Mon API Filmographique',
version: '1.0.0',
apiFolder: 'pages/api',
});
export default swaggerHandler();