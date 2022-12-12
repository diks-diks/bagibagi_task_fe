const Footer = () => {
  return (
    <footer className="w-100 position-fixed bottom-0" style={{ height: 54 }}>
      <div
        xs={11}
        style={{ width: "95%" }}
        className="bg-warning h-100 d-flex flex-column justify-content-center"
      >
        <p
          className="text-center text-white p-0 m-0"
          style={{ fontSize: 18, fontWeight: "400" }}
        >
          Copyright &copy; 2020 Dewe Tour - Your Name - NIS. All Rights reserved
        </p>
      </div>
      <div
        className="position-fixed end-0 bottom-0"
        style={{
          width: "7%",
          marginBottom: "-5px",
        }}
      >
        <img
          src="./img/leaf-footer.png"
          alt="leaf footer"
          className="w-100"
        />
      </div>
    </footer>
  );
};

export default Footer;
