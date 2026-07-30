export default function Navbar() {
  return (
    <header
      style={{
        width: "100%",
        background: "#8B1E72",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0,0,0,.15)"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "80px"
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}
        >
          <span style={{ fontSize: "32px" }}>🐉</span>

          <h2
            style={{
              fontWeight: "bold",
              fontSize: "28px"
            }}
          >
            Hanzi Master
          </h2>
        </div>

        {/* Menu */}
        <nav
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center"
          }}
        >
          <a href="/">Trang chủ</a>

          <a href="/hsk">HSK</a>

          <a href="/tocfl">TOCFL</a>

          <a href="/dictionary">Từ điển</a>

          <a href="/exam">Luyện thi</a>

          <button
            className="btn-primary"
            style={{
              padding: "12px 24px"
            }}
          >
            Đăng nhập
          </button>
        </nav>
      </div>
    </header>
  );
}
