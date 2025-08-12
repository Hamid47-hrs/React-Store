import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

interface IReview {
  id: number;
  name: string;
  text: string;
}

const reviews: IReview[] = [
  {
    id: 1,
    name: "John",
    text: "The product quality was fantastic! The packaging was neat and the delivery was fast.",
  },
  {
    id: 2,
    name: "Joel",
    text: "Excellent support and respectful service. I will definitely buy again.",
  },
  {
    id: 3,
    name: "David",
    text: "The discounts were truly valuable. Thank you for your great service.",
  },
  {
    id: 4,
    name: "Michel",
    text: "There's a great variety of products, and the shopping experience was very enjoyable.",
  },
];

function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Customer's Reviews
        </h2>
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-2000"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${reviews.length * 100}%`,
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                style={{ minWidth: "100%" }}
                className="w-full md:w-1/4 flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-xl shadow-md p-10 m-3 relative h-30 max-w-5xl flex flex-col justify-between">
                  <p className="text-gray-700 text-3xl">{review.text}</p>
                  <span className="absolute bottom-3 left-4 text-sm font-semibold text-gray-500 flex justify-end">
                    <Quote
                      style={{ rotate: "-180deg", marginRight: "10px" }}
                      fill="gray"
                      color="gray"
                      width="20"
                    />
                    {review.name}{" "}
                    <Quote
                      fill="gray"
                      color="gray"
                      width="20"
                      style={{ marginLeft: "10px" }}
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;
