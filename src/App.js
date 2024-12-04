import React from "react";
import PdfDownload from "./pdf/PdfDownload";
import PdfButton from "./pdfpages/PdfButton";
import { Page_1 } from "./pdfpages/Page_1";
import Header from "./pdf/Header";

const App = () => {
  return (
    <div>
      <Header/>
      <PdfButton/>
      <Page_1/>
      <p>
        paragram lorem lorem lorem lorem lorem lotemlorem lj ljdsljfsdj
        fsdjflsdjflksjfksdkf sd
      </p>
    
    </div>
  );
};

export default App;
