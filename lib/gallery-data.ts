export interface GalleryItem {
  src: string;
  alt: string;
}

// Nur Fotos, die weder als Leistungsbild (lib/galabau.ts) noch als Referenz
// (lib/referenzen-data.ts) laufen. Die Galerie filtert Dubletten ohnehin heraus
// und blendet sich aus, sobald weniger als drei eigene Bilder uebrig bleiben.
export const galleryItems: GalleryItem[] = [
  {
    src: "/assets/acquisition/projekte/api-06-01.jpg",
    alt: "Baumkletterer mit Helm und Motorsäge entastet den Stamm eines Nadelbaums"
  },
  {
    src: "/assets/acquisition/projekte/api-04-01.jpg",
    alt: "Hausfassade nach dem Entfernen einer Kletterpflanze, die Haftwurzelreste sind noch sichtbar"
  }
];
