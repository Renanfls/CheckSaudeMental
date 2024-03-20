function Projects({
  background,
  logo,
  user,
  title,
  link,
  value,
}) {
  return (
    <section className="container-product rounded-4 p-3 mb-4 d-flex flex-column shadow">
      <img src={background} alt={title} className="photos rounded-3" />
      <div className="d-flex flex-column mt-3">
        <img src={logo} alt={logo} className="logo" />
        <small className="user mt-1 fw-light text-lowercase">{user}</small>
      </div>
      <h5 className="title-product fw-medium my-3 h-100 text-lowercase text-center ">
        {title}
      </h5>
      <p className="price fw-bold fs-5 text-center">R$ {value}</p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        class="p-2 px-5 rounded-3 d-flex align-items-center justify-content-center gap-2"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_61_8)">
            <path
              d="M12.5 1.67114C13.4946 1.67114 14.4484 2.06623 15.1517 2.76949C15.8549 3.47275 16.25 4.42658 16.25 5.42114V6.17114H8.75V5.42114C8.75 4.42658 9.14509 3.47275 9.84835 2.76949C10.5516 2.06623 11.5054 1.67114 12.5 1.67114ZM17.75 6.17114V5.42114C17.75 4.02876 17.1969 2.6934 16.2123 1.70883C15.2277 0.724266 13.8924 0.171143 12.5 0.171143C11.1076 0.171143 9.77226 0.724266 8.78769 1.70883C7.80312 2.6934 7.25 4.02876 7.25 5.42114V6.17114H2V21.1711C2 21.9668 2.31607 22.7299 2.87868 23.2925C3.44129 23.8551 4.20435 24.1711 5 24.1711H20C20.7956 24.1711 21.5587 23.8551 22.1213 23.2925C22.6839 22.7299 23 21.9668 23 21.1711V6.17114H17.75Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_61_8">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.5 0.171143)"
              />
            </clipPath>
          </defs>
        </svg>
        Comprar
      </a>
    </section>
  );
}

export default Projects;
