export default function SectionVideo() {
  return (
    <section className="container-fluid sectionVideo mt-5 p-4 py-5 p-md-5 d-flex flex-column flex-lg-row justify-content-around align-items-center gap-5">
      <iframe
        className="sectionVideo__video mx-3 rounded-4 bg-white"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="sectionVideo__text">
        <h2 className="fw-bold">Lorem Ipsum is simply dummy text of the...</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting.
        </p>
      </div>
    </section>
  );
}
