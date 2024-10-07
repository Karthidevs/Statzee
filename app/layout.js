import { Navigator } from "./_components/Navigator";
import "./_style/globals.css";

export const metadata = {
  title: {
    template: "%s | Statze",
    default: "Statze",
  },
  description: "Teachers work less Student read more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen  flex flex-col relative">
          <Navigator />
          <main className="flex-1 grid ">{children}</main>
        </div>
      </body>
    </html>
  );
}
