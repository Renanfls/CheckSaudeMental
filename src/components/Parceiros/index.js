export default function Parceiros() {
  return (
    <section className="container__parceiros container-fluid">
      <div className="container__agrupados row row-cols-1 row-cols-lg-2 ">
        <div className="parceiros__conteudo col mb-4 mb-md-0">
          <span className="text-uppercase">nossos parceiros</span>
          <h2 className="parceiros__conteudo-titulo mt-1">
            Lorem Ipsum is simply dummy text of the...
          </h2>
          <p className="mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting.
          </p>
        </div>

        <div className="container__cards  col">
          <div className="d-flex flex-wrap gap-3">
            <div className="parceiros-card shadow p-4 rounded-5 col">
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

            <div className="parceiros-card shadow p-4 rounded-5 col">
              <img src="./assets/eduzz-logo-01.svg" alt="logo eduzz" />
              <p className="my-3">Lorem Ipsum is simply dummy text of the</p>
              <a href="/" className="p-2 px-3 rounded-5">
                saiba mais
              </a>
            </div>

            <div className="parceiros-card shadow p-4 rounded-5 col">
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
