import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Orange-Sun Homes Limited',
  description: 'Discover Your Dream Home with Orange-Sun Homes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-100">
        <Header />
        <main className="mt-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
