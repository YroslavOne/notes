import { v4 as uuidv4 } from 'uuid';



const ArrayNotes = [
  {
    id: uuidv4(),
    title: 'notes',
    description: 'Lorean lkfmsklfmse',
    tag: ['shopping', 'business', 'other things'],
    trash: false,
    favorites: false,
    // key: 1,
  },
  {
    id: uuidv4(),
    title: 'notes2',
    description: 'lorean lkfmsklfmse',
    tag: ['shopping'],
    trash: false,
    favorites: true,
    // key: 2,
  },
  {
    id: uuidv4(),
    title: 'notes3',
    description: 'Lorean lkfmsklfmse',
    tag: ['shopping'],
    trash: true,
    favorites: false,
    // key: 3,
  },
  {
    id: uuidv4(),
    title: 'notes4',
    description: 'Lorean lkfmsklfmse Lorean lkfmsklfmse Lorean lkfmsklfmse Lorean lkfmsklfmse Lorean lkfmsklfmse Lorean lkfmsklfmse',
    tag: ['shopping'],
    trash: false,
    favorites: true,
    // key: 4,
  },
];
export default ArrayNotes;
