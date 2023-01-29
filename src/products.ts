type productType =
  | 'Sofa'
  | 'Sofa (wood base)'
  | 'Dining Chair'
  | 'Desk'
  | 'Armchair'
  | 'Coffee Table'
  | 'Side Table'
  | 'Scatter Cushion'

interface IProduct {
  id: string
  name: string
  type: productType
  large?: boolean
}

const randomId = () => Math.random().toString(32).slice(-6)

export const products: IProduct[] = [
  { id: randomId(), name: 'Cherry', type: 'Sofa', large: true },
  { id: randomId(), name: 'Figura', type: 'Dining Chair' },
  { id: randomId(), name: 'Inlay', type: 'Dining Chair' },
  { id: randomId(), name: 'Bourbon', type: 'Desk' },
  { id: randomId(), name: 'Copal', type: 'Sofa', large: true },
  { id: randomId(), name: 'Kitsune', type: 'Armchair' },
  { id: randomId(), name: 'Kile', type: 'Coffee Table', large: true },
  { id: randomId(), name: 'Mooli', type: 'Coffee Table' },
  { id: randomId(), name: 'Com', type: 'Dining Chair' },
  { id: randomId(), name: 'Portobello', type: 'Sofa (wood base)', large: true },
  { id: randomId(), name: 'Papa', type: 'Scatter Cushion' },
  { id: randomId(), name: 'Neuf', type: 'Side Table' }
]

interface IText {
  text: string
  links: string[]
}

export const heroText: IText[] = [
  {
    text: 'Eyes rest from an afternoon in the sun. Smooth textures feel cool on bare feet and skin.',
    links: ['Kitsune sofa', 'armchair', 'I-O coffee table (steel base)']
  },
  {
    text: 'A sip of cocktail brings back memories of the beach.',
    links: ['Portobello armchair', 'foot stool (wood base)']
  },
  {
    text: 'Sunset is a good time to gather. Evening light bathes the space in warm tones and colours.',
    links: ['Copal', 'Fromage']
  }
]
