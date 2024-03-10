export default function Parceiros() {
  return (
    <section className="container__parceiros">
      <div className="parceiros__conteudo">
        <span>nossos parceiros</span>
        <h2>Lorem Ipsum is simply dummy text of the...</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting.
        </p>
      </div>

      <div className="parceiros__conteudo-card">
        <div>
          <img
            src="../../../public/assets/Hotmart-logo-02.svg"
            alt="logo hortsmart"
          />
          <p>Lorem Ipsum is simply dummy text of the</p>
          <span>saiba mais</span>
        </div>

        <div className="parceiros__conteudo-card">
          <img
            src="../../../public/assets/eduzz-logo-01.svg"
            alt="logo eduzz"
          />
          <p>Lorem Ipsum is simply dummy text of the</p>
          <span>saiba mais</span>
        </div>

        <div className="parceiros__conteudo-card">
          <img
            src="../../../public/assets/kiwify-logo-03.svg"
            alt="logo kiwify"
          />
          <p>Lorem Ipsum is simply dummy text of the</p>
          <span>saiba mais</span>
        </div>
      </div>
    </section>
  );
}
