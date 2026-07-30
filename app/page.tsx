import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <main className="container">

        {/* Tìm kiếm */}
        <section className="card">

          <h2>🔍 Tìm kiếm từ vựng</h2>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "20px",
              flexWrap: "wrap"
            }}
          >
            <input
              type="text"
              placeholder="Nhập chữ Hán, Pinyin hoặc nghĩa..."
              style={{
                flex: 1,
                minWidth: "250px",
                padding: "15px",
                borderRadius: "12px",
                border: "1px solid #ddd",
                fontSize: "16px"
              }}
            />

            <button className="btn-primary">
              Tìm kiếm
            </button>
          </div>

        </section>

        {/* Khóa học HSK */}
        <section style={{ marginTop: "50px" }}>

          <h2
            style={{
              marginBottom: "25px",
              color: "white"
            }}
          >
            📚 Khóa học HSK
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px"
            }}
          >

            {[1, 2, 3, 4, 5, 6].map((level) => (

              <div className="card" key={level}>

                <h3>HSK {level}</h3>

                <p style={{ marginTop: "10px" }}>
                  Học từ vựng, ngữ pháp, luyện nghe và luyện đề.
                </p>

                <button
                  className="btn-primary"
                  style={{ marginTop: "20px" }}
                >
                  Bắt đầu
                </button>

              </div>

            ))}

          </div>

        </section>

      </main>
    </>
  );
}
