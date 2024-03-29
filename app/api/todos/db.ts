export interface ITodo {
  text: string;
  completed: boolean;
}

const todosMap = new Map<number, ITodo>();

todosMap.set(1, { text: "hi", completed: false });

let id = 1;

export const getTodos = (id?: number) => {
  if (id) {
    if (todosMap.has(id)) {
      return { id, ...todosMap.get(id) };
    } else return null;
  }

  return Array.from(todosMap, ([key, value]) => ({ ...value, id: key }));
};

export const createTodo = (todo: any) => {
  const newtodo = {
    text: todo,
    completed: false,
  };
  todosMap.set(++id, newtodo);
};

export function DeleteTodo(id: number) {
  todosMap.delete(id);
}
export function updateTodo(id: number, body: ITodo) {
  if (todosMap.has(id)) {
    const prevTodo = todosMap.get(id)!;
    todosMap.set(id, { ...prevTodo, ...body });
  }
}
