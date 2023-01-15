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
  name: string
  type: productType
  large?: boolean
}

export const products: IProduct[] = [
  { name: 'Cherry', type: 'Sofa', large: true },
  { name: 'Figura', type: 'Dining Chair' },
  { name: 'Inlay', type: 'Dining Chair' },
  { name: 'Bourbon', type: 'Desk' },
  { name: 'Copal', type: 'Sofa', large: true },
  { name: 'Kitsune', type: 'Armchair' },
  { name: 'Kile', type: 'Coffee Table', large: true },
  { name: 'Mooli', type: 'Coffee Table' },
  { name: 'Com', type: 'Dining Chair' },
  { name: 'Portobello', type: 'Sofa (wood base)', large: true },
  { name: 'Papa', type: 'Scatter Cushion' },
  { name: 'Neuf', type: 'Side Table' }
]
