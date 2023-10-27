import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function peek(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);
    const secret = process.env.SecretObject || '{"msg":"no secret or environment variable found"}';
    //const name = request.query.get('name') || await request.text() || 'world';

    return { 
        headers: {
            'Content-Type': 'application/json'
        },
        body: `${secret}`
    };
};

app.http('peek', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: peek
});
