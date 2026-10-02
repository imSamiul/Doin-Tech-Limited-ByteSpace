interface FilterPill {
  label: string;
  active?: boolean;
  more?: boolean;
}

export const filterRows: FilterPill[][] = [
  [
    { label: 'Featured', active: true },
    { label: 'Music' },
    { label: 'Drawing & Painting' },
    { label: 'Marketing' },
    { label: 'Animation' },
    { label: 'Social Media' },
    { label: 'UI/UX Design' },
    { label: 'Creative Marketing' },
  ],
  [
    { label: 'Digital Illustration' },
    { label: 'Film & Video' },
    { label: 'Crafts' },
    { label: 'Freelance & Entrepreneurship' },
    { label: 'Graphic Design' },
    { label: 'Photography' },
  ],
  [
    { label: 'Productivity' },
    { label: 'Web Development' },
    { label: 'Data Science' },
    { label: 'Cooking' },
    { label: '+ More', more: true },
  ],
];
