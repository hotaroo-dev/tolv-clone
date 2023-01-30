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
  [key: string]: {
    name: string
    type: productType
    large?: boolean
  }
}

interface IText {
  text: string
  links: string[]
}
export const products: IProduct = {
  vprlp4: { name: 'Cherry', type: 'Sofa', large: true },
  blp8pl: { name: 'Figura', type: 'Dining Chair' },
  e3cpag: { name: 'Inlay', type: 'Dining Chair' },
  e99n3o: { name: 'Bourbon', type: 'Desk' },
  jfd8kg: { name: 'Copal', type: 'Sofa', large: true },
  jlbc0o: { name: 'Kitsune', type: 'Armchair' },
  junck8: { name: 'Kile', type: 'Coffee Table', large: true },
  k2650o: { name: 'Mooli', type: 'Coffee Table' },
  limd1o: { name: 'Com', type: 'Dining Chair' },
  mgueu2: { name: 'Portobello', type: 'Sofa (wood base)', large: true },
  rah0no: { name: 'Papa', type: 'Scatter Cushion' },
  saf448: { name: 'Neuf', type: 'Side Table' }
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
