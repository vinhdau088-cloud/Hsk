import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="container">

        {/* Hero */}
        <section
          style={{
            padding: "80px 0",
            textAlign: "center"
          }}
        >
          <h1 className="title">
            Học tiếng Trung
            <br />
            thông minh hơn.
          </h1>

          <p className="subtitle" style={{ marginTop: 20 }}>
            Học HSK, TOCFL, Flashcards, Từ điển,
            luyện thi và theo dõi tiến độ.
          </p>

          <div
            style={{
              marginTop: 40,
              display: "flex",
              justifyContent: "center",
              gap: 20,
              flexWrap: "wrap"
            }}
          >
            <button className="btn-primary">
              🚀 Bắt đầu học
            </button>

            <button className="btn-outline">
              📚 Luyện thi
            </button>
          </div>
        </section>

        {/* Search */}
        <section className="card">

          <h2>🔍 Tìm kiếm từ vựng</h2>

          <div
            style={{
              display: "flex",
              gap: 15,
              marginTop: 20,
              flexWrap: "wrap"
            }}
          >
            <input
              placeholder="Nhập chữ Hán, Pinyin hoặc nghĩa..."
              style={{
                flex: 1,
                minWidth: 250,
                padding: 15,
                borderRadius: 10,
                border: "1px solid #ddd"
              }}
            />

            <button className="btn-primary">
              Tìm kiếm
            </button>
          </div>

        </section>

        {/* HSK */}
        <section style={{ marginTop: 50 }}>

          <h2 style={{ marginBottom: 25 }}>
            📚 Khóa học HSK
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: 20
            }}
          >
            {[1,2,3,4,5,6].map((i)=>(
              <div className="card" key={i}>

                <h3>HSK {i}</h3>

                <p style={{marginTop:10}}>
                  Học từ vựng, ngữ pháp và luyện đề.
                </p>

                <button
                  className="btn-primary"
                  style={{marginTop:20}}
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
