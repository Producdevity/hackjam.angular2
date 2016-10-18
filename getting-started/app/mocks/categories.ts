export class Category {
  name: String;
  selected: Boolean;
}

const categories: Category [] = [
  { name: 'All', selected: true},
  { name: 'Web', selected: false},
  { name: 'Mobile', selected: false},
  { name: 'IoT', selected: false},
  { name: 'Data Engineering', selected: false},
];

export default categories;


