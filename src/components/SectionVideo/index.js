export default function SectionVideo() { 
  return (
    <section
      id="sobre"
      className="container-fluid sectionVideo mt-5 p-4 py-5 p-md-5 d-flex flex-column flex-lg-row justify-content-around align-items-center gap-5"
    >
      <video
        className="sectionVideo__video mx-3 rounded-4 bg-white shadow"
        controls
        loop
        type="video/mp4"
        poster="../assets/Logo_Vertical.png"
        src="../assets/video.mp4"
      ></video>
      <div className="sectionVideo__text">
        <span className="text-uppercase">Sobre nós</span>
        <h2 className="fw-bold mt-2">Check.SaúdeMental</h2>
        <p>
          Nosso objetivo é melhorar sua saúde mental e recuperar seu equilíbrio com os nossos serviços. <br/> Nossa missão é restaurar sua felicidade e bem-estar. Embarque nessa jornada conosco e liberte-se de traumas e dores emocionais. Vamos te ajudar a melhorar seus relacionamentos pessoais e a lidar com o estresse e a ansiedade. Assim como, recuperar a confiança e a autoestima. E ainda, a lidar com a pressão no trabalho. Juntos, vamos aprender a gerenciar as suas emoções.
        </p>
        <small>
          "Sempre tem alguém que não vê o seu valor. Não permita que essa pessoa
          seja você mesmo"
        </small>
      </div>
    </section>
  );
}
