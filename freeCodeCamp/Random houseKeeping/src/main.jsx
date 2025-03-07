import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { Fragment } from 'react';
import './main.css';
const root = createRoot(document.getElementById('root'));
import Header from './Header';
import Footer from './Footer';
import UL from './UL';


function Page() {
  return (
    <Fragment>
      <div className="container">
        <Header />
        <UL />
        <Footer />
      </div>
    </Fragment>
  );
}

root.render(
  <StrictMode>
    <Page>Radhe Radhe</Page>
  </StrictMode>
);
