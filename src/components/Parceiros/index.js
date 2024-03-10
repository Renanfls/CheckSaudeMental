export default function Parceiros() {
  return (
    <section className="container__parceiros container-fluid ms-3 ms-md-5 px-lg-5 pt-lg-5">
      <div className="container__agrupados row row-cols-1 row-cols-xl-2 align-items-center">
        <div className="parceiros__conteudo col mb-4 mb-md-0">
          <span className="text-uppercase">nossos parceiros</span>

          <h2 className="parceiros__conteudo-titulo mt-1 fw-bold">
            Lorem Ipsum is simply dummy text of the...
          </h2>

          <p className="mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting.
          </p>
        </div>

        <div className="container__cards  col mt-4 mt-lg-0">
          <div className="row gap-3 justify-content-center justify-content-xl-evenly">
            <div className="parceiros-card shadow p-4 rounded-5 col-6">
              <img
                className="img-fluid "
                src="./assets/Hotmart-logo-02.svg"
                alt="logo hortsmart"
              />
              <p className="my-3">Lorem Ipsum is simply dummy text of the</p>
              <a href="/" className="p-2 px-3 rounded-5">
                saiba mais
              </a>
            </div>

            <div className="parceiros-card shadow p-4 rounded-5 col-6">
              <img src="./assets/eduzz-logo-01.svg" alt="logo eduzz" />
              <p className="my-3">Lorem Ipsum is simply dummy text of the</p>
              <a href="/" className="p-2 px-3 rounded-5">
                saiba mais
              </a>
            </div>

            <div className="parceiros-card shadow p-4 rounded-5 col-6">
              <img src="./assets/kiwify-logo-03.svg" alt="logo kiwify" />
              <p className="my-3">Lorem Ipsum is simply dummy text of the</p>
              <a href="/" className="p-2 px-3 rounded-5">
                saiba mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
