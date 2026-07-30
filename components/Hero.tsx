export default function Hero() {
  return (
    <section
      style={{
        padding: "100px 20px",
        textAlign: "center",
        color: "white"
      }}
    >
      <h1
        style={{
          fontSize: "64px",
          fontWeight: "bold",
          lineHeight: 1.2
        }}
      >
        Học tiếng Trung
        <br />
        <span style={{ color: "#FFD54F" }}>
          thông minh hơn.
        </span>
      </h1>

      <p
        style={{
          marginTop: "30px",
          fontSize: "22px",
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        Học từ vựng, luyện thi HSK & TOCFL,
        nghe phát âm, luyện viết Hanzi và
        theo dõi tiến độ học tập.
      </p>

      <div
        style={{
          marginTop: "45px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >
        <button className="btn-primary">
          🚀 Bắt đầu học
        </button>

        <button className="btn-outline">
          📖 Luyện thi
        </button>
      </div>
    </section>
  );
}
