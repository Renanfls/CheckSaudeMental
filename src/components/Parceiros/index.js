export default function Parceiros() {
  return (
    <section
      id="parceiros"
      className="container__parceiros container-fluid px-4 px-md-5 py-5"
    >
      <div className="container__agrupados row row-cols-1 row-cols-xl-2 align-items-center gap-4 gap-xl-0">
        <div className="parceiros__conteudo col">
          <span className="text-uppercase">nossos parceiros</span>

          <h2 className="parceiros__conteudo-titulo mt-2 fw-bold">
            Explore o Melhor do Conhecimento com Nossos Parceiros!
          </h2>

          <p className="mt-4">
            Líderes no fornecimento de conteúdo educacional e serviços de
            qualidade. Com uma vasta gama de produtos e recursos, essas
            plataformas oferecem uma experiência única para aqueles que buscam
            aprender, crescer e alcançar seus objetivos.
          </p>
        </div>

        <div className="container__cards col">
          <div className="row gap-4 gap-xl-5 justify-content-center ">
            {/* Card Hotmart */}
            <div className="parceiros-card shadow p-4 rounded-5 col-6 gap-3">
              <img
                className="img-fluid "
                src="./assets/Hotmart-logo-02.svg"
                alt="logo hotmart"
              />
              <p className="my-3">
                Cursos Online, Ebooks, Treinamentos em vídeo...
              </p>
              <a
                href="https://hotmart.com/pt-br"
                className="p-2 px-5 rounded-5"
                target="_blank"
                rel="noreferrer"
              >
                saiba mais
              </a>
            </div>

            {/* Card Eduzz */}
            <div className="parceiros-card shadow p-4 rounded-5 col-6 gap-3">
              <img src="./assets/eduzz-logo-01.svg" alt="logo eduzz" />
              <p className="my-3">Produtos Digitais e Físicos, Mentorias...</p>
              <a
                href="https://www.eduzz.com/pt-br"
                className="p-2 px-5 rounded-5"
                target="_blank"
                rel="noreferrer"
              >
                saiba mais
              </a>
            </div>

            {/* Card kiwify */}
            <div className="parceiros-card shadow p-4 rounded-5 col-6 gap-3">
              <img src="./assets/kiwify-logo-03.svg" alt="logo kiwify" />
              <p className="my-3">
                Cursos Online, Ebooks, Treinamentos em vídeo...
              </p>
              <a
                href="https://kiwify.com.br"
                className="p-2 px-5 rounded-5"
                target="_blank"
                rel="noreferrer"
              >
                saiba mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
