import uid from 'uid'

export default [
  { text: 'Sport gemacht', checked: false, id: uid(), category: 'good' },
  {
    text: 'Gesund gegessen',
    checked: false,
    id: uid(),
    category: 'good',
  },
  { text: 'Abends gelernt', checked: false, id: uid(), category: 'good' },
  {
    text: 'Im Kurs beteiligt',
    checked: false,
    id: uid(),
    category: 'good',
  },
  {
    text: 'Liter Wasser getrunken',
    count: 0,
    id: uid(),
    category: 'good',
  },
  {
    text: 'Fragen im Kurs gestellt',
    count: 0,
    id: uid(),
    category: 'good',
  },
  {
    text: 'Alkohol getrunken',
    checked: false,
    id: uid(),
    category: 'bad',
  },
  {
    text: 'Nicht-Bio-Fleisch gegessen',
    checked: false,
    id: uid(),
    category: 'bad',
  },
  { text: 'Zigaretten geraucht', count: 0, id: uid(), category: 'bad' },
]
