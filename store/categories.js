const categories = [
  {
    id: 1,
    title: "Furniture",
    value: "furniture",
    icon: "floor-lamp",
    backgroundColor: "#fc5c65",
    color: "white",
  },
  {
    id: 2,
    title: "Cars",
    value: "cars",
    icon: "car",
    backgroundColor: "#fd9644",
    color: "white",
  },
  {
    id: 3,
    title: "Cameras",
    value: "cameras",
    icon: "camera",
    backgroundColor: "#fed330",
    color: "white",
  },
  {
    id: 4,
    title: "Games",
    value: "games",
    icon: "cards",
    backgroundColor: "#26de81",
    color: "white",
  },
  {
    id: 5,
    title: "Clothing",
    value: "clothing",
    icon: "shoe-heel",
    backgroundColor: "#2bcbba",
    color: "white",
  },
  {
    id: 6,
    title: "Sports",
    value: "sports",
    icon: "basketball",
    backgroundColor: "#45aaf2",
    color: "white",
  },
  {
    id: 7,
    title: "Movies & Music",
    value: "movies & music",
    icon: "headphones",
    backgroundColor: "#4b7bec",
    color: "white",
  },
  {
    id: 8,
    title: "Books",
    value: "books",
    icon: "book-open-variant",
    backgroundColor: "#a55eea",
    color: "white",
  },
  {
    id: 9,
    title: "Other",
    value: "others",
    icon: "application",
    backgroundColor: "#778ca3",
    color: "white",
  },
];

const getCategories = () => categories;

const getCategory = (value) => {
  return categories.find((category) => category.value === value);
};

module.exports = {
  getCategories,
  getCategory,
};
