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
          Nosso objetivo é Disponibilizar uma variedade de produtos digitais e
          físicos, cuidadosamente selecionados para promover o seu bem-estar
          emocional e digital.
        </p>
        <small>
          "Sempre tem alguém que não vê o seu valor. Não permita que essa pessoa
          seja você mesmo"
        </small>
      </div>
    </section>
  );
}
