import { createTodo, getTodos } from "./db";

export async function GET() {
  console.log(Response.json(getTodos()));

  return Response.json(getTodos());
}
export async function POST(request: Request) {
  const body = await request.json();

  createTodo(body.text);
}