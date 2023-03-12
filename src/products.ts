export type productType =
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

export interface IProductDetail {
  name: string
  type: productType
  designer: string
  description: string[]
  color: string
  panels: {
    src: string[]
    captions?: string[]
    space?: boolean
    large?: boolean
  }[]
  cards?: {
    name: string
    price: number
  }[]
  square?: boolean
}

interface IProductDetails {
  [key: string]: IProductDetail
}

const id = [
  'cherry-sofa',
  'figura-chair',
  'inlay-chair',
  'bourbon-desk',
  'copal-sofa',
  'kitsune-armchair',
  'kile-coffee-table',
  'pensive-armchair',
  'com-dining-chair',
  'portobello-sofa-wooden-base',
  'scatter-cushion',
  'neuf-side-table'
]

const products: IProduct[] = [
  { id: id[0], name: 'Cherry', type: 'Sofa', large: true },
  { id: id[1], name: 'Figura', type: 'Dining Chair' },
  { id: id[2], name: 'Inlay', type: 'Dining Chair' },
  { id: id[3], name: 'Bourbon', type: 'Desk' },
  { id: id[4], name: 'Copal', type: 'Sofa', large: true },
  { id: id[5], name: 'Kitsune', type: 'Armchair' },
  { id: id[6], name: 'Kile', type: 'Coffee Table', large: true },
  { id: id[7], name: 'Pensive', type: 'Armchair' },
  { id: id[8], name: 'Com', type: 'Dining Chair' },
  { id: id[9], name: 'Portobello', type: 'Sofa (wood base)', large: true },
  { id: id[10], name: 'Papa', type: 'Scatter Cushion' },
  { id: id[11], name: 'Neuf', type: 'Side Table' }
]

const productDetail: IProductDetails = {
  [id[0]]: {
    name: 'Cherry',
    type: 'Sofa',
    color: '#747b73',
    designer: 'Cameron Foggo',
    description: [
      'The mid-century inspired Cherry sofa has a sophisticated and elegant, yet casual feel. Soft plump cushions contrast with a strong linear frame, giving it a versatility that suits modern living. It works well as a family sofa with deep double cushions where all the family can gather comfortably, or as the centrepiece of a smart city apartment.'
    ],
    panels: [
      {
        src: ['cherry-2-seater'],
        captions: ['Cherry 2-seater in Finestre, Martini'],
        space: true
      },
      {
        src: ['cherry-3-seater-teal'],
        captions: ['Cherry 3-seater in Lombardia, Teal'],
        space: true
      },
      {
        src: ['cherry-chaise'],
        captions: ['Cherry chaise (LHF) and 1-arm (RHF) in Finestre, Nude'],
        space: true
      },
      {
        src: ['cherry-3-seater-oyster'],
        captions: ['Cherry 3-seater in Conte, Oyster']
      },
      { src: ['cherry-detail'], space: true },
      { src: ['cherry-chaise-lookbook'] }
    ],
    cards: [
      { name: 'cherry-2-seater', price: 100 },
      { name: 'cherry-3-seater-teal', price: 120 },
      { name: 'cherry-chaise', price: 145 },
      { name: 'cherry-3-seater-oyster', price: 125 }
    ]
  },
  [id[1]]: {
    name: 'Figura',
    type: 'Dining Chair',
    color: '#88d8bc',
    designer: 'Mentsen',
    description: [
      'Based on a traditional milking chair, Figura is a modern twist on utilitarian style. Crafted details like the curved supportive backrest and thick hand-finished seat make this solid wood chair a fitting homage to heritage woodworking methods. It is available in oak or walnut.'
    ],
    panels: [
      {
        src: ['figura-all-colors'],
        captions: ['Figura chair in black oak, walnut and light oak']
      },
      {
        src: ['figura-light-oak', 'figura-light-oak-back'],
        captions: ['Figura dining chair in light oak'],
        space: true
      },
      { src: ['figura-light-oak-detail'] },
      {
        src: ['figura-walnut'],
        captions: ['Joint detail of Figura dining chair in walnut']
      },
      {
        src: ['itamae-black-oak'],
        captions: ['Figura dining chairs and Itamae table in black oak']
      }
    ],
    cards: [
      { name: 'figura-chair', price: 80 },
      { name: 'figura-light-oak', price: 80 },
      { name: 'figura-walnut', price: 100 }
    ],
    square: true
  },
  [id[2]]: {
    name: 'Inlay',
    type: 'Dining Chair',
    color: '#d5c98c',
    designer: 'Ryota Yokozeki',
    description: [
      'The design for Ryota Yokozeki’s Inlay chair comes from a desire to achieve new and challenging forms in wood while still showing respect for the material. Similar to an elegant letter form, the chair has a curving plywood backrest that merges seamlessly with the solid wood arms and frame. It’s available with an upholstered or wood seat.'
    ],
    panels: [
      {
        src: ['inlay-light-oak', 'inlay-light-oak-left'],
        captions: [
          'Inlay chair in light oak and upholstered seat in Heritage, Saddle (leather)'
        ],
        space: true
      },
      {
        src: ['inlay-black-oak'],
        captions: [
          'Inlay chair in black oak and upholstered seat in Montana, Coal (leather)'
        ]
      },
      { src: ['inlay-lookbook'], space: true },
      { src: ['inlay-detail'] }
    ],
    cards: [
      { name: 'inlay-chair', price: 120 },
      { name: 'inlay-black-oak', price: 120 }
    ],
    square: true
  },
  [id[3]]: {
    name: 'Bourbon',
    type: 'Desk',
    color: '#d5c98c',
    designer: 'Mentsen',
    description: [
      'Bourbon is designed as a flexible home office desk or kitchen table, reflecting the way people live and work today. Under the writing surface is an open shelf with a pair of oak trays that can be used as loose drawers, or to help organise the desk top. The desk has a clean lightweight appearance that is created by the combination of oak top and slender metal legs.'
    ],
    panels: [
      { src: ['bourbon-detail'] },
      {
        src: ['bourbon-lookbook'],
        captions: [
          'Bourbon desk includes a pair of oak trays which can be stored under desk'
        ],
        space: true
      },
      {
        src: ['bourbon-and-figura-walnut'],
        captions: ['Bourbon desk in oak finish and Figura chair in walnut']
      }
    ],
    cards: [
      { name: 'bourbon-desk', price: 180 },
      { name: 'bourbon-and-figura-walnut', price: 260 }
    ],
    square: true
  },
  [id[4]]: {
    name: 'Copal',
    type: 'Sofa',
    color: '#f8b387',
    designer: 'Rui Alves',
    description: [
      'Designer Rui Alves intended the Copal family to be generous and inviting, like a good host. The sofa indeed offers a warm embrace, with a back that curves gently into the arms. The rounded oak legs create a play of angles at the base, and are characterised by a “through wedged tenon” joint, revealing expert craftsmanship.'
    ],
    panels: [
      {
        src: ['copal'],
        captions: [
          'Designer Rui Alves intended the Copal family to be generous and inviting, like a good host.'
        ],
        large: true
      },
      {
        src: ['copal-2-seater'],
        captions: ['Copal 2-seater in light oak'],
        space: true
      },
      {
        src: ['copal-3-seater'],
        captions: ['Copal 3-seater in black oak'],
        space: true
      },
      {
        src: ['copal-legs'],
        captions: ['Through wedged tenon joint'],
        space: true
      },
      { src: ['copal-detail'] }
    ],
    cards: [
      { name: 'copal-sofa', price: 240 },
      { name: 'copal-2-seater', price: 160 },
      { name: 'copal-3-seater', price: 260 }
    ]
  },
  [id[5]]: {
    name: 'Kitsune',
    type: 'Armchair',
    color: '#d8cdc7',
    designer: 'Mentsen',
    description: [
      'The smart upholstered Kitsune armchair has strong aesthetic characteristics. Mentsen, its designer, wanted to convey the idea of contrasting volumes and the shapes created by folding a cushion. Piped edges to the upholstery accentuate the sofa’s outline, giving graphic contrast to the soft forms. The back and armrests are connected delicately with contrasting hand stitches.'
    ],
    panels: [
      {
        src: ['kitsune'],
        captions: ['Kitsune armchair upholstered with fabric'],
        space: true
      },
      { src: ['kitsune-back'], space: true },
      {
        src: ['kitsune-leather'],
        captions: ['Kitsune armchair upholstered with Envy Walnut leather'],
        space: true
      },
      { src: ['kitsune-detail'], space: true }
    ],
    cards: [
      { name: 'kitsune-armchair', price: 120 },
      { name: 'kitsune-leather', price: 160 }
    ],
    square: true
  },
  [id[6]]: {
    name: 'Kile',
    type: 'Coffee Table',
    color: '#fdbf97',
    designer: 'Stine Aas',
    description: [
      'Kile is the Norwegian word for wedge, a joining technique Stine Aas has used to great effect in this simple wood coffee table. The table’s four plank-like legs appear to intersect the circular table top at different angles, a feature expressed where you see the two grains meet. The beauty of solid wood provides all the appeal here, with no fussy details to detract from the design.'
    ],
    panels: [
      {
        src: ['kile-light-oak'],
        captions: ['Kile coffee table low 90 in light oak'],
        space: true
      },
      {
        src: ['kile-low-90-light', 'kile-low-90-light-back'],
        captions: ['Kile coffee table low 90 in light oak'],
        space: true
      },
      {
        src: ['kile-low-60-black', 'kile-low-60-black-back'],
        captions: ['Kile coffee table low 60 in black oak'],
        space: true
      },
      {
        src: ['kile-tall-50-light', 'kile-tall-50-light-back'],
        captions: ['Kile coffee table tall 50 in light oak'],
        space: true
      },
      { src: ['kile-detail'] }
    ],
    cards: [
      { name: 'kile-low-90-light', price: 30 },
      { name: 'kile-low-60-black', price: 30 },
      { name: 'kile-tall-50-light', price: 40 }
    ],
    square: true
  },
  [id[7]]: {
    name: 'Pensive',
    type: 'Armchair',
    color: '#d8cdc7',
    designer: 'Cameron Foggo',
    description: [
      'Designer Cameron Foggo’s Pensive armchair deftly combines comfort and structure for a relaxing place to sit. It is characterised by thin planar arms, with soft seat and back cushions. Like the sofa of the same design, it has a wooden plinth base intersected by cylindrical wood legs.'
    ],
    panels: [
      {
        src: ['pensive-light-oak'],
        captions: ['Pensive armchair in light oak and West Lake, Diamond'],
        space: true
      },
      {
        src: ['pensive-light-oak-detail'],
        space: true
      },
      {
        src: ['pensive-black-oak'],
        captions: ['Pensive armchair in black oak and Montana leather, Coal']
      },
      {
        src: ['pensive-black-oak-leather'],
        captions: ['Pensive armchair in black oak and Montana leather, Coal'],
        space: true
      },
      {
        src: ['pensive-black-oak-leather-detail'],
        space: true
      }
    ],
    cards: [
      { name: 'pensive-light-oak', price: 160 },
      { name: 'pensive-black-oak-leather', price: 200 }
    ],
    square: true
  },
  [id[8]]: {
    name: 'Com',
    type: 'Dining Chair',
    color: '#747b73',
    designer: 'Mentsen',
    description: [
      'Com is an archetypal dining chair with sinuous curves and a pared down aesthetic.',
      'The ergonomic structure is a gently formed plywood shell on solid oak cylindrical legs. Both give the impression of sturdiness and warm materials. It’s a chair that’s casual enough for the dining room, the study, or the bedroom. Available with a seat upholstered in leather and fabric.'
    ],
    panels: [
      {
        src: ['com-light-oak', 'com-light-oak-back'],
        captions: [
          'Com chair in light oak and upholstered seat in Heritage, Saddle'
        ],
        space: true
      },
      { src: ['com-detail'] },
      { src: ['com-lookbook'], space: true }
    ],
    cards: [
      { name: 'com-dining-chair', price: 50 },
      { name: 'com-light-oak', price: 50 }
    ],
    square: true
  },
  [id[9]]: {
    name: 'Portobello',
    type: 'Sofa (wood base)',
    color: '#c6a170',
    designer: 'Mentsen',
    description: [
      'The Portobello sofa cuts an elegant figure from sweeping back to soft seat. A curved outer gives the impression of a mushroom’s dome, with the inner filling providing just the right balance between soft and firm. This generous two-seater has two options: a base of continuously bent steel, or solid oak.'
    ],
    panels: [
      {
        src: ['portobello-black-oak'],
        captions: [
          'Portobello W (wood base) sofa in black oak, upholstered in Hemp, Root'
        ]
      },
      {
        src: ['portobello-black-oak-front'],
        space: true
      },
      {
        src: ['portobello-black-oak-back'],
        space: true
      },
      {
        src: ['portobello-light-oak'],
        captions: ['Portobello W (wood base) sofa in light oak'],
        space: true
      },
      {
        src: ['portobello-light-oak-front'],
        space: true
      },
      {
        src: ['portobello-light-oak-back'],
        captions: ['Back detail of wooden base']
      }
    ],
    cards: [
      { name: 'portobello-light-oak', price: 200 },
      { name: 'portobello-black-oak', price: 200 }
    ]
  },
  [id[10]]: {
    name: 'Papa',
    type: 'Scatter Cushion',
    color: '#d5c98c',
    designer: 'Mentsen',
    description: [
      'A subtle line separates the surface of the Papa cushion into two halves. On the monotone version, the difference is achieved by rotating the fabric on one half of the cushion perpendicular to the other. Simply altering the direction of the weave creates a change that reflects how each half catches the light. The two-tone version offers a more definitive contrast.'
    ],
    panels: [
      {
        src: ['papa-500x500'],
        captions: ['Papa 500 x 500 mm in Westlake, Oatmeal/Java'],
        space: true
      },
      {
        src: ['papa-600x300'],
        captions: ['Papa 600 x 300 mm in Westlake, Oatmeal/Harbour Grey'],
        space: true
      },
      {
        src: ['papa-350x350'],
        captions: ['Papa 350 x 350 mm in Westlake, Oatmeal/Diamond'],
        space: true
      },
      { src: ['papa-detail'], space: true },
      {
        src: ['papa-500x500-teal'],
        captions: ['Papa 500 x 500 mm in Lombardia, Teal'],
        space: true
      },
      {
        src: ['papa-500x500-corten'],
        captions: ['Papa 500 x 500 mm in Lombardia, Corten'],
        space: true
      },
      {
        src: ['papa-600x300-greengold'],
        captions: ['Papa 600 x 300 mm in Lombardia, Greengold'],
        space: true
      },
      {
        src: ['papa-350x350-dove'],
        captions: ['Papa 350 x 350 mm in Lombardia, Dove'],
        space: true
      },
      {
        src: ['papa-with-cherry'],
        captions: ['Papa 350 x 350 mm in Lombardia, Dove with Cherry Sofa']
      },
      {
        src: ['papa-with-pensive-sofa'],
        captions: ['Papa monotone cushions with Pensive Sofa'],
        space: true
      }
    ],
    cards: [
      { name: 'papa-500x500', price: 25 },
      { name: 'papa-600x300', price: 30 },
      { name: 'papa-350x350', price: 20 },
      { name: 'papa-500x500-corten', price: 25 },
      { name: 'papa-600x300-greengold', price: 30 },
      { name: 'papa-350x350-dove', price: 20 }
    ]
  },
  [id[11]]: {
    name: 'Neuf',
    type: 'Side Table',
    color: '#8e8d92',
    designer: 'Rui Alves',
    description: [
      'The Neuf side and coffee tables have bold simplicity and elegantly refined outlines.  Like the daybed and lounge chair, this expression is achieved with a joint detail that sees one round section disappears into the other in an elegant peak.'
    ],
    panels: [
      {
        src: ['neuf-detail'],
        captions: [
          'The Neuf collection shares the unique joint detail developed by designer Rui Alves – where two round sections meet, one disappears into the other in an exquisitely formed peak.'
        ],
        space: true
      },
      {
        src: ['neuf-black-oak'],
        captions: ['Black marble top, black oak base']
      },
      {
        src: ['light-oak', 'black-oak'],
        captions: ['Light oak', 'Black oak'],
        space: true
      }
    ],
    cards: [
      { name: 'light-oak', price: 25 },
      { name: 'black-oak', price: 25 }
    ],
    square: true
  }
}

const getProducts = (q: string) => {
  return q === ''
    ? []
    : products.filter(product => product.id.includes(q.toLowerCase()))
}

export { products, productDetail, getProducts }
