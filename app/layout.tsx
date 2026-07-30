import "./globals.css";

export const metadata = {
  title: "Hanzi Master",
  description: "HSK & TOCFL Learning Platform",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="vi">

      <body>

        {children}

      </body>

    </html>

  );

}
