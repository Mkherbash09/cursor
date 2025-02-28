# Al Kharbash Investment Co. Website

A modern, minimalist one-page website for **Al Kharbash Investment Co.** featuring real estate investment and property management services.

## Features

- 🚀 **Modern, responsive design** optimized for all devices
- 🎥 **Left sidebar** with company name, video section, and introduction
- 📄 **Main content area** with informational sections
- 📩 **Interactive contact form** for inquiries
- 🗺️ **Google Maps integration** for location display
- 🔍 **SEO optimized** for better online visibility
- ⚡ **Fast and lightweight** with Next.js and Tailwind CSS
- 🛠️ **Easy customization** for future enhancements

---

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Animations**: Motion One
- **Forms**: React Hook Form
- **Maps**: Google Maps API
- **Icons**: Heroicons, Lucide
- **Deployment**: Vercel

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (18.x or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/alkharbash-website.git
   cd alkharbash-website
   ```

2. **Install dependencies:**
   ```sh
   npm install  # or yarn install
   ```

3. **Run the development server:**
   ```sh
   npm run dev  # or yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
alkharbash-website/
├── public/          # Static assets (favicon, images, etc.)
├── src/
│   ├── components/  # Reusable UI components
│   ├── pages/       # Next.js pages
│   ├── styles/      # Global styles
│   ├── utils/       # Helper functions
│   ├── hooks/       # Custom React hooks
│   ├── config/      # Configuration settings
│   └── data/        # Static data
├── .env.local       # Environment variables
├── package.json     # Project metadata & dependencies
└── README.md        # Project documentation
```

---

## Best Practices

### Performance Optimization
- Enable Next.js **Image Optimization** (`next/image`)
- Use **lazy loading** for images and videos
- Minimize JavaScript and CSS using **code splitting**

### SEO & Accessibility
- Implement **meta tags** for SEO in `_app.tsx`
- Use **semantic HTML** for better accessibility
- Add **Open Graph** and **Twitter Card** metadata

### Security & Compliance
- Use `.env.local` to store API keys securely
- Ensure **HTTPS** and secure cookies in production
- Implement **rate limiting** on form submissions

---

## Deployment

### Deploy to Vercel

1. **Install Vercel CLI (if not installed):**
   ```sh
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```sh
   vercel login
   ```

3. **Deploy the project:**
   ```sh
   vercel
   ```

Your website will be live at `https://your-project-name.vercel.app/`

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`feature-xyz`)
3. Make your changes
4. Submit a pull request

---

## License

This project is licensed under the **MIT License**.

---

## Contact

For inquiries, reach out via email at `contact@alkharbash.com` or visit [Al Kharbash Investment Co.](https://alkharbash.com).

