## 🤝 Contributing Translations

We welcome contributions to translate Velvra! Follow these steps:

### 1. Fork the Repository

1. Click **Fork** on this repository’s page.
2. This creates your copy under your GitHub account.

---

### 2. Clone Your Fork

In your terminal:

```bash
git clone https://github.com/YOUR-USERNAME/locale.git
cd locale
```

> Replace `YOUR-USERNAME` with your GitHub username.

---

### 3. Create a Translation Branch

Create a new branch before editing:

```bash
git checkout -b translation/LANG
```

Example (Arabic):

```bash
git checkout -b translation/ar
```

---

### 4. Edit Translation File

Inside the repository you’ll see language files like:

```text
ar.js
en.js
ja.js
```

Open the file you want to translate (or create a new one if needed), then edit the strings to your target language.

⚠️ Don’t change keys — only update the text values.

---

### 5. Commit Your Work

```bash
git add .
git commit -m "Add/Update TRANSLATION for [LANG]"
```

Replace `[LANG]` with the language name (e.g., Arabic).

---

### 6. Push to Your Fork

```bash
git push origin translation/ar
```

---

### 7. Open a Pull Request

Go to your fork on GitHub and click **Compare & pull request**.
Give your PR a clear title like:

```
[Arabic] Translate locale file
```

Provide a description of what you translated.

---

### 🔁 Review & Merge

Maintainers will review your submission. You may be asked for revisions before merging.

- [![Crowdin](https://badges.crowdin.net/velvra/localized.svg)](https://crowdin.com/project/velvra)

---

## Contributors

<a href="https://github.com/Velvra/locale/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Velvra/locale" />
</a>
