import { Document, Packer, Paragraph, TextRun } from 'docx'

export async function generateContractDocx(formData) {
  const doc = new Document({
    sections: [{
      children: [
        new Paragraph({ children: [new TextRun({ text: 'CONTRATO DE SERVICIOS', bold: true, size: 28 })] }),
        new Paragraph({ text: `Empresa: ${formData.empresa || '__________'}` }),
        new Paragraph({ text: `Contacto: ${formData.contacto || '__________'}` }),
        new Paragraph({ text: `Email: ${formData.email || '__________'}` }),
        new Paragraph({ text: `Presupuesto: $${formData.presupuesto || '0'} USD` }),
        new Paragraph({ text: `Fecha: ${new Date().toLocaleDateString()}` }),
        new Paragraph({ text: '... (términos y condiciones completos)' })
      ]
    }]
  })
  return await Packer.toBlob(doc)
}
