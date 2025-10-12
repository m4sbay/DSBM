# DSBM - Design System Business Management

Dashboard analisis komponen design sistem dari 75 perusahaan menggunakan HTML, Tailwind CSS, dan JavaScript.

## 🚀 Fitur

- **Dashboard Interaktif**: Analisis komponen UI dari 75 perusahaan
- **Dark Mode**: Toggle tema gelap/terang dengan perubahan instan
- **Pencarian & Filter**: Cari perusahaan berdasarkan nama, design system, atau komponen
- **Analisis Frekuensi**: Lihat komponen UI yang paling banyak digunakan
- **Responsive Design**: Tampilan optimal di desktop dan mobile
- **Export Data**: Download data dalam format CSV

## 📊 Data Perusahaan

Project ini menganalisis komponen design sistem dari 75 perusahaan ternama termasuk:

- **Tech Giants**: Adobe (Spectrum), Google (Material Design), Microsoft (Fluent 2)
- **E-commerce**: Amazon (Cloudscape), eBay (Evo), Shopify (Polaris)
- **Finance**: IBM (Carbon), Salesforce (Lightning)
- **Dan banyak lagi...**

## 🛠️ Teknologi

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Build Tool**: Tailwind CLI
- **Icons**: Heroicons (SVG)
- **Hosting**: Vercel (Recommended)

## 📁 Struktur Project

```
dsbm/
├── index.html          # Halaman utama
├── script.js           # Logic aplikasi
├── input.css           # Tailwind input
├── output.css          # Compiled CSS
├── tailwind.config.js  # Konfigurasi Tailwind
├── package.json        # Dependencies
└── README.md          # Dokumentasi
```

## 🚀 Cara Menjalankan

### Prerequisites

- Node.js (v14 atau lebih baru)
- npm atau yarn

### Installation

```bash
# Clone repository
git clone https://github.com/username/dsbm.git
cd dsbm

# Install dependencies
npm install

# Build CSS
npm run build

# Development dengan watch mode
npm run build-css
```

### Development

```bash
# Watch mode untuk perubahan CSS
npm run build-css

# Build production
npm run build
```

## 📈 Analisis Data

### Metode Perhitungan Frekuensi

```
Frekuensi Komponen = Jumlah Perusahaan yang Menggunakan Komponen / Total Perusahaan × 100%
```

### Contoh

- **Button**: 73/75 perusahaan = 97%
- **Cards**: 72/75 perusahaan = 96%
- **Modal**: 71/75 perusahaan = 95%

## 🎨 Dark Mode

Project mendukung dark mode dengan:

- Toggle button di pojok kanan atas
- Perubahan tema instan tanpa delay
- Persistent storage menggunakan localStorage
- Auto-detect system preference

## 📱 Responsive Design

- **Desktop**: Layout 4 kolom (sidebar + main content)
- **Tablet**: Layout 2 kolom
- **Mobile**: Layout 1 kolom dengan sidebar collapsible

## 🔧 Konfigurasi

### Tailwind CSS

```javascript
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./script.js", "./*.html", "./*.js"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 📊 Data Structure

### Perusahaan Object

```javascript
{
  id: 1,
  name: "Adobe",
  designSystem: "Spectrum",
  source: "https://spectrum.adobe.com/",
  biography: "Placeholder - Biografi perusahaan akan diisi nanti",
  components: ["Action bar", "Action button", "Alert banner", ...],
  industry: "tech"
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push ke GitHub
2. Connect ke Vercel
3. Auto-deploy setiap push

### Netlify

1. Drag & drop folder project
2. Auto-deploy dengan custom domain

### GitHub Pages

1. Push ke GitHub
2. Enable GitHub Pages di settings
3. Deploy dari main branch

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Author

**Maulana Bayu**

- GitHub: [@maulanabayu](https://github.com/maulanabayu)

## 🙏 Acknowledgments

- Tailwind CSS untuk styling framework
- Heroicons untuk icon set
- 75 perusahaan untuk data design system
- Vercel untuk hosting platform

## 📞 Contact

Project Link: [https://github.com/maulanabayu/dsbm](https://github.com/maulanabayu/dsbm)

---

⭐ Star repository ini jika project ini membantu Anda!
