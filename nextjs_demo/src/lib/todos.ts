const API_URL = process.env.NEXT_PUBLIC_API_URL;


export async function getTodos() {
  const response = await fetch(`${API_URL}/todos`);

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return response.json();
}


export async function createTodo(data: {
  title: string;
  description: string;
}) {
  const response = await fetch(`${API_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });


  if (!response.ok) {
    throw new Error("Failed to create todo");
  }


  return response.json();
}


export async function updateTodo(
  id: number,
  data: {
    title?: string;
    description?: string;
  }
) {
  const response = await fetch(
    `${API_URL}/todos/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );


  if (!response.ok) {
    throw new Error("Failed to update todo");
  }


  return response.json();
}


export async function deleteTodo(id: number) {
  const response = await fetch(
    `${API_URL}/todos/${id}`,
    {
      method: "DELETE",
    }
  );


  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }
}