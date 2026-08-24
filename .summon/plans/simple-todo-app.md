---
status: pending
title: Simple Personal Todo App
---

1. Create `src/types/todo.ts` defining a Todo type with an id, a text/title field, and a completed boolean flag. Outcome: a shared shape for todo items used across the app.

2. Create `src/hooks/useTodos.ts` implementing state management for the todo list: loading initial todos from the browser's local storage (empty list if none saved), adding a new todo, toggling a todo's completed state, deleting a todo, and persisting changes back to local storage whenever the list changes. Outcome: a reusable hook that fully manages the todo list and keeps it saved between visits.

3. Create `src/components/TodoInput.tsx`: a text input with an "Add" button (and support for pressing Enter) that calls a passed-in function to add a new todo, then clears the input. Outcome: a clean input row for creating new tasks.

4. Create `src/components/TodoItem.tsx`: displays a single todo's text with a checkbox/click target to toggle completed (shown with a strikethrough or faded style when done), and a delete button/icon to remove it. Outcome: a minimal, clear row for one task.

5. Create `src/components/TodoList.tsx`: renders the list of TodoItem components, and shows a friendly empty state message ("No tasks yet — add one above!") when there are no todos. Outcome: a complete list view that handles both empty and populated states.

6. Create `src/routes/index.tsx` as the main page: centers a minimal card/panel containing a title ("My Todos" or similar), the TodoInput, the TodoList, and a small footer summary showing how many tasks remain (e.g. "2 of 5 remaining"). Uses the useTodos hook to wire everything together. Outcome: a fully working single-page todo app.

7. Update `src/routes/__root.tsx` and `src/styles/global.css` as needed to set a minimal, clean visual foundation: neutral background color, centered layout, simple sans-serif typography, subtle borders/shadows, and generous spacing, avoiding bright colors or heavy decoration. Outcome: the app has a minimal, clean look consistent with the requested style.
