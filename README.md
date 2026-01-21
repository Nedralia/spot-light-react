# spot-light-effect-react

A React component that creates a spotlight effect on a canvas. Perfect for highlighting content or creating interactive visual effects in your React applications.

[![npm version](https://img.shields.io/npm/v/spot-light-react.svg)](https://www.npmjs.com/package/spot-light-react)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## ✨ Features
- Easy to use React component
- Customizable spotlight effect
- Works with any children content
- Lightweight and dependency-free (except React)

---

## 📦 Installation

```bash
npm install spot-light-effect-react
```

or

```bash
yarn add spot-light-effect-react
```

---

## 🚀 Usage

```jsx
import SpotLight from 'spot-light-effect-react';

function App() {
  return (
    <SpotLight>
      <div style={{ padding: 40 }}>
        <h1>Spotlight Effect!</h1>
        <p>This content is highlighted by the spotlight.</p>
      </div>
    </SpotLight>
  );
}
```

---

## 🛠️ Props

| Prop      | Type           | Description                |
|-----------|----------------|----------------------------|
| children  | ReactNode      | Content to highlight       |

---

## 🎨 Styling

The component comes with default styles. You can override them by targeting the following CSS classes:
- `.spot-light-react`
- `.spot-light-react-canvas`

---

## 🧑‍💻 Development

### Build

```bash
npm run build
```

### Start (watch mode)

```bash
npm start
```

---

## 📄 License

MIT © Nedralia
