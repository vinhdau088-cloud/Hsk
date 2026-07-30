"use client";

export default function SearchBar() {

  return (
    <section className="card">

      <h2 style={{fontSize:"28px"}}>
        🔍 Tìm kiếm tiếng Trung
      </h2>

      <div
        style={{
          display:"flex",
          gap:"15px",
          marginTop:"20px",
          flexWrap:"wrap"
        }}
      >

        <input
          placeholder="Nhập chữ Hán, Pinyin hoặc nghĩa..."
          style={{
            flex:1,
            minWidth:"250px",
            padding:"16px",
            borderRadius:"15px",
            border:"1px solid #ddd",
            color:"#333",
            fontSize:"16px"
          }}
        />

        <select
          style={{
            padding:"16px",
            borderRadius:"15px",
            color:"#333"
          }}
        >
          <option>Tất cả</option>
          <option>HSK 1</option>
          <option>HSK 2</option>
          <option>HSK 3</option>
          <option>HSK 4</option>
          <option>HSK 5</option>
          <option>HSK 6</option>
        </select>

        <button className="btn-primary">
          Tìm kiếm
        </button>

      </div>

    </section>
  );
}
