# Habit Tracker Jerry

React-based habit tracking app (German language UI) built with Create React App.

## Commands

- `npm start` — Start dev server
- `npm test` — Run Jest tests in watch mode (use `CI=true npm test` for single run)
- `npm run update-snapshots` — Update Jest snapshot tests
- `npm run build` — Production build
- `npm run storybook` — Launch Storybook on port 9001

## Architecture

- **Framework**: React 16 with class components
- **Styling**: Emotion (CSS-in-JS) via `react-emotion`
- **Dates**: Moment.js, German format (DD.MM.YYYY)
- **State**: Local React state in `App.js` — no external state management
- **Testing**: Jest + Enzyme with snapshot tests

### Project structure

```
src/
  components/    — Reusable UI components (ToggleButton, CounterButton, DateSwitch, HabitList)
  data/          — Static habit definitions (habits.js)
  styles/        — Global CSS-in-JS styles
  App.js         — Main app component, owns all state and history logic
  index.js       — Entry point
stories/         — Storybook stories
```

### Habit data model

Habits are defined in `src/data/habits.js` with `type` (`toggle` | `count`), `category` (`good` | `bad`), and a unique `id`. History is tracked per-date in App state.

## Conventions

- All UI text is in German
- Components are class-based React components
- Styled components use Emotion's `styled()` API
- Tests live alongside components as `*.spec.js` or `*.test.js` files with `__snapshots__/` directories
