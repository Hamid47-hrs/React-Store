import Category from "./Category";
import CustomerReviews from "./CustomerReviews";
import FeaturedProducts from "./FeaturedProducts";
import Hero from "./Hero";
import NewsTeller from "./NewsLetter";
import SpecialOffer from "./SpecialOffer";

function Home() {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <Category />
      </section>
      <section>
        <FeaturedProducts />
      </section>
      <section>
        <SpecialOffer />
      </section>
      <section>
        <CustomerReviews />
      </section>
      <section>
        <NewsTeller />
      </section>
    </div>
  );
}

export default Home;
