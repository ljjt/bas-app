import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

app.http("hello", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "hello",
  handler: async (req: HttpRequest, ctx: InvocationContext): Promise<HttpResponseInit> => {
    const name = req.query.get("name") ?? "world";
    return {
      status: 200,
      jsonBody: { message: `Hello, ${name}!`, node: process.version }
    };
  }
});