import React, { Component } from 'react'
import "./OpenPdfButton.scss"

export default class OpenPdfButton extends Component {
    // Méthode de classe pour ouvrir le PDF
    openPdf = () => {
      window.open('/CV_Kiara_Drouin.pdf', '_blank');
    }
  
    render() {
      return (
        <button onClick={this.openPdf} className='downloadbutton'>
            <p className='content'>Download My resume</p>
          
        </button>
      );
    }
  }