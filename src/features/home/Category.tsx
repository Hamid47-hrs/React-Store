import { Link } from "react-router-dom";

interface ICategory {
  id: number;
  name: string;
  image: string;
}

const categories: ICategory[] = [
  {
    id: 1,
    name: "men's Clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  },
  {
    id: 2,
    name: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
  },
  {
    id: 3,
    name: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
  },
  {
    id: 4,
    name: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
  },
];

function Category() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              to={`/product?category=${category.name}`}
              key={category.id}
              className="relative group rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="w-full h-40 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="mx-auto h-full object-cover group-hover:scale-150 transition-transform duration-400 group-hover:rotate-5"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 py-2 text-center flex justify-center items-center">
                  <span className="text-gray-200 font-semibold text-2xl drop-shadow-md drop-shadow-blue-950">
                    {category.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;
