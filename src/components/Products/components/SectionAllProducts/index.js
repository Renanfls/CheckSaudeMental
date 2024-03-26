import Carousel from "react-bootstrap/Carousel";
import { loadsProducts } from "../../../../services/loadsData";
import Products from "../Product";

export default function SectionAllProducts() {
  const products = loadsProducts();

  return (
    <section id="produtos">
      <div className="title ps-5 ms-5 my-5">
        <h2 className="fw-bold">Produtos</h2>
      </div>
      {/* LIST ALL PRODUCTS */}
      <Carousel fade className="carousel-container my-5 d-block d-md-none">
        {products.list.map((product) =>
          product.all.map((productAll) => (
            <Carousel.Item key={productAll.id.toString} className="p-3">
              <Products
                className="d-flex justify-content-center"
                {...productAll}
              ></Products>
            </Carousel.Item>
          ))
        )}
      </Carousel>
      {products.list.map((product) => (
        <div
          key={product.all.indexOf}
          className="container-fluid justify-content-center flex-wrap gap-3 d-none d-md-flex"
        >
          {product.all.map((productAll) => (
            <Products {...productAll}></Products>
          ))}
        </div>
      ))}
    </section>
  );
}
