# CV Builder

A modern React application that allows users to create, view, and style their resumes with ease.

##  Project Overview

CV Builder lets users:
- Fill out personal and professional experience information.
- View a styled, real-time preview of their resume.
- Toggle between light and dark themes for better accessibility and appearance.

##  Technologies Used

- **React** – For building the user interface.
- **React Router DOM** – For client-side routing.
- **Styled-Components** – For component-level styling with support for themes.
- **React Context** – For global state management (themes and CV data).

## 📁 Project Structure

```
src/
│
├── components/          # Reusable components like NavBar
├── context/             # ThemeContext and CvContext
├── pages/               # Main pages: EditorPage, PreviewPage, SettingsPage
├── styles/              # Global styles and theme definitions
├── App.jsx              # Defines routes and layout
└── main.jsx             # Entry point, wraps App with Providers
```

## 🧠 Key Features

- **Form-based editor**: Users can input personal info and add multiple job experiences.
- **Live preview**: Displays saved resume data in a readable and styled format.
- **Theme switcher**: Toggle between light and dark modes.
- **Context-based logic**: Centralized state management for CV data and UI theme.

##  Installation & Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/RINAT143482/cv-builder.git
   ```

2. Navigate to the project folder:
   ```bash
   cd cv-builder
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser at:
   ```
   http://localhost:3000/
   ```

##  Screenshots

(Add screenshots here later if you'd like.)

##  Live Demo

(If hosted online, you can paste the link here.)

##  License

This project is for educational purposes and currently has no license.