import uid from 'uid'

export default [
  { text: 'Sport gemacht', type: 'toggle', id: uid(), category: 'good' },
  {
    text: 'Gesund gegessen',
    type: 'toggle',
    id: uid(),
    category: 'good',
  },
  { text: 'Abends gelernt', type: 'toggle', id: uid(), category: 'good' },
  {
    text: 'Im Kurs beteiligt',
    type: 'toggle',
    id: uid(),
    category: 'good',
  },
  {
    text: 'Liter Wasser getrunken',
    type: 'count',
    id: uid(),
    category: 'good',
  },
  {
    text: 'Fragen im Kurs gestellt',
    type: 'count',
    id: uid(),
    category: 'good',
  },
  {
    text: 'Alkohol getrunken',
    type: 'toggle',
    id: uid(),
    category: 'bad',
  },
  {
    text: 'Nicht-Bio-Fleisch gegessen',
    type: 'toggle',
    id: uid(),
    category: 'bad',
  },
  { text: 'Zigaretten geraucht', type: 'count', id: uid(), category: 'bad' },
]
