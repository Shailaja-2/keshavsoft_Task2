# TechFlow - Task 2

A modern website built with Nunjucks templating and Vite bundler to eliminate code repetition from Task 1.

## 🛠️ Technology Stack

**Templating Engine:** Nunjucks  
**Bundler:** Vite  
**Framework:** Bootstrap 5

# Why These Choices?

**Nunjucks** - Lets me write the navigation and footer once instead of copying them to every page. Template inheritance makes the code much cleaner.

**Vite** - Super fast development with instant hot reload. Much simpler to set up than Webpack or Gulp.

# 📁 Project Structure

```
techflow-task2/
├── src/
│   ├── templates/
│   │   ├── layouts/base.njk       # Main template
│   │   ├── partials/              # Header & footer
│   │   └── pages/                 # Page content
│   ├── assets/                    # CSS, JS, images
│   ├── index.html
│   ├── about.html
│   └── contact.html
├── dist/                          # Build output
├── package.json
└── vite.config.js
```

# 🚀 Quick Start

**Install dependencies:**

```bash
npm install
```

**Run development server:**

```bash
npm run dev
```

Opens at http://localhost:5173

# 🎯 What Changed from Task 1?

| Task 1                    | Task 2              |
| ------------------------- | ------------------- |
| Navigation copied 3 times | Written once        |
| Footer copied 3 times     | Written once        |
| CSS inline in HTML        | External CSS file   |
| No build process          | Automated with Vite |
| Manual browser refresh    | Hot reload          |

**Result:** Much easier to maintain and update!

# ⏱️ Time Taken

About 9 hours over 2 days:

- Setup & learning: 2 hours
- Template conversion: 5 hours
- Testing & fixes: 1.5 hours
- Documentation: 0.5 hours

# 🤔 What I Learned

**Main Challenge:** Understanding how template paths work in Vite. Took some trial and error to get it right.

**Solution:** Read the Vite docs carefully and used absolute paths (`/assets/`) instead of relative paths.

**Key Takeaway:** Templates are way better than copying code. This is how real projects are structured.

![TechFlow Screenshot](https://raw.githubusercontent.com/Shailaja-2/keshavsoft_Task2/main/src/assets/images/techFlow.png)
