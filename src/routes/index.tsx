import { createFileRoute } from '@tanstack/react-router';
import { useTodos } from '@/hooks/useTodos';
import { TodoInput } from '@/components/TodoInput';
import { TodoList } from '@/components/TodoList';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const remaining = todos.filter((t) => !t.completed).length;

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <h1 className="mb-5 text-xl font-semibold text-slate-900">My Todos Changed 3</h1>
        <div className="mb-4">
          <TodoInput onAdd={addTodo} />
        </div>
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        {todos.length > 0 && (
          <p className="mt-5 text-center text-xs text-slate-400">
            {remaining} of {todos.length} remaining
          </p>
        )}
      </div>
    </div>
  );
}
