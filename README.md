
# Karnabhag High School Website

A modern, responsive web application built for **Karnabhag High School**, located in Manda, Naogaon. This project was designed to simplify the school's online presence and make important information like notices, teacher/staff lists, and updates accessible.

## 🚀 Live Demo

- [Live Link](https://khs-edu.netlify.app/)

---

## 📌 Features

- 🗣️ **Language** – This website is built entirely in **Bangla (Bengali)** for native accessibility.
- 🏠 **Homepage** – Introduction and overview of the school
- 📢 **Notice Page** – Public notices for students and guardians
- 👨‍🏫 **Teachers Page** – List of teaching staff with details
- 🧑‍💼 **Staff Page** – List of non-teaching staff
- 🔐 **Login Page** – Basic login system using hardcoded credentials (username & PIN)
- 📝 **Notice Upload Page** – Admins can upload new notices (connected to Supabase backend)

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, DaisyUI, React Router
- **Backend**: Supabase (for database and file storage)
- **Auth**: Hardcoded (can be upgraded to Supabase Auth in the future)

---

## 📂 Folder Structure (Basic Overview)

```
src/
│
├── components/      # Reusable components (Navbar, Footer, etc.)
├── pages/           # Homepage, Notice, Teachers, Staff, Login, Upload
├── routes/          # React Router setup
├── supabase/        # Supabase client and API functions
├── App.jsx          # Main app entry point

```

---

## 🧠 Future Improvements

- Implement Supabase Auth for secure login
- Add real-time updates to notices
- Create a dashboard for managing teacher/staff info
- Add image upload for notices/teachers
- Responsive design for all screen sizes

---

## 📤 Deployment

- [Netlify](https://khs-edu.netlify.app/)

---

## 🤝 Credits

- Designed and developed by Utso Mondal
- Built for Karnabhag High School, Manda, Naogaon

---

## 📧 Contact

For suggestions or collaboration:
- Email: `utsomondal@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/utsomondal`
