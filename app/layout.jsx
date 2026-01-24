import './globals.css';
import { ThemeProvider } from './providers/ThemeProvider';
import { LanguageProvider } from './providers/LanguageProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollTopImmediate';
import ScrollToTopButton from './components/ScrollTop';
import Raccourcis from './components/Raccourcis';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata = {
  title: 'Safety Cards',
  description: 'Safety Cards - Ressources de prévention et bien-être étudiant',
  icons: {
    icon: `${basePath}/favicon-32x32.png`,
  },
};

// Script pour éviter le flash de thème au chargement
const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      var isModeSoiree = window.location.pathname.includes('mode-soiree') || 
                         window.location.pathname.includes('contacts-urgence') || 
                         window.location.pathname.includes('plan-soiree');
      if (theme === 'dark' || isModeSoiree) {
        document.body.classList.add('dark-mode');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <LanguageProvider>
          <ThemeProvider>
            <ScrollToTop />
            <Header />
            <Raccourcis />
            <main>{children}</main>
            <ScrollToTopButton />
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
