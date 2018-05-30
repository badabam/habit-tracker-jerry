import moment from 'moment'

export default function(state, action) {
  switch (action.type) {
    case 'TOGGLE_HABIT':
      return updateHistory(state, action.id, oldValue => !oldValue)

    case 'INCREASE_COUNT':
      return updateHistory(
        state,
        action.id,
        oldValue => (oldValue == null ? 1 : oldValue + 1)
      )

    case 'DECREASE_COUNT':
      return updateHistory(
        state,
        action.id,
        oldValue => (oldValue == null || oldValue === 0 ? 0 : oldValue - 1)
      )

    case 'CREATE_HABIT':
      return {
        ...state,
        habits: [...state.habits, action.habit],
      }

    case 'MOVE_DAY_LEFT':
      return {
        ...state,
        dayOffset: state.dayOffset - 1,
      }

    case 'MOVE_DAY_RIGHT':
      return {
        ...state,
        dayOffset: state.dayOffset + 1,
      }

    default:
      return state
  }
}

export function getCurrentDate(oldState) {
  return moment()
    .add(oldState.dayOffset, 'days')
    .format('DD.MM.YYYY')
}

function updateHistory(state, id, updateFunction) {
  const oldEntries = state.history[getCurrentDate(state)] || {}
  const oldValue = oldEntries[id]

  const updatedEntries = {
    ...oldEntries,
    [id]: updateFunction(oldValue),
  }

  return {
    ...state,
    history: {
      ...state.history,
      [getCurrentDate(state)]: updatedEntries,
    },
  }
}
