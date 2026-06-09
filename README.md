# <p align="center">🔮 𝕹𝕺𝖃'𝖘 𝕲𝖄𝕸</p>

---

### 🚀 About The Project
**NOX's GYM** is a comprehensive Full-Stack web platform designed for commercial gyms and fitness centers. It provides gym members with elite workout programs (like Arnold Split and PPL) while integrating interactive 3D exercise angles. 

The platform features a dedicated functional system that allows users to request custom workout plans by submitting their name, notes, and specific fitness goals, which are safely stored in the backend database.

### 🛠️ Tech Stack
* **Frontend:** React.js (Vite Edition) + Tailwind CSS (Sleek Dark Mode UI)
* **Backend:** Python (FastAPI / Flask)
* **Database:** SQLite3 (SQL)

---

### ✨ Core Features & Architecture

#### 1. Custom Plan Requests & User Feedback
* **User Onboarding:** Forms to collect member names, fitness levels, and specific goals.
* **Feedback System:** Users can submit custom notes or requests for tailored training routines.
* **Dynamic Training Cards:** Displays active custom plans (e.g., "Plan A: Hypertrophy", "Plan B: Strength") linked directly to the user's profile.

#### 2. The Workout Atlas
* **Pro Routines:** Built-in Arnold Split and Push-Pull-Legs (PPL) structures.
* **Biomechanical Precision:** Visual guides showing execution forms and ideal isolation angles.

#### 3. Database Schema (SQLite3)
* **`users` Table:** Stores member profiles, names, and authentication data.
* **`plan_requests` Table:** Tracks user feedback, notes, and requested workout plans.
* **`exercises` Table:** Holds data for exercise variations, angles, and media links.

---

### 📂 Project Structure
* `/frontend` - React.js source code, components, and Tailwind styles.
* `/backend` - Python server scripts, API routes, and database models.
* `/database` - SQLite3 `.db` file and migration scripts.
