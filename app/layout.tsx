import "../styles/globals.css";
import Header from "./Header";
import Provider from "./Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Provider>
        <body className="transition-all duration-700 bg-gray-100 dark:bg-zinc-900">
          <Header />
          <div className="max-w-6xl mx-auto">{children}</div>
        </body>
      </Provider>
    </html>
  );
}
