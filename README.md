
## 📄 README.md

```markdown
# 🐞 BugVault Lite

BugVault Lite is a full stack bug tracking application built for developers who value clean design and functional simplicity. Users can submit, view, edit, and delete bugs in real time through a responsive frontend and a robust backend powered by Node.js and MongoDB.

---

## 🚀 Features

- ✅ Submit bugs with title, description, and severity
- 🔄 Fetch and display bugs from MongoDB on page load
- ✏️ Edit bugs directly from the UI
- 🗑️ Delete bugs with one click
- 🎨 Clean, responsive frontend built with vanilla HTML/CSS/JS
- 🗃️ Backend API built with Express and Mongoose

---

## 🧱 Tech Stack

| Layer       | Technology            |
|------------|------------------------|
| Frontend    | HTML, CSS, JavaScript |
| Backend     | Node.js, Express      |
| Database    | MongoDB (local or Atlas) |
| Tools       | MongoDB Compass, Postman |

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/bugvault-lite.git
cd bugvault-lite
```

### 2. Install backend dependencies

```bash
cd server
npm install
```

### 3. Start MongoDB locally

Make sure MongoDB is installed and running:

```bash
mongod
```

Or connect to MongoDB Atlas if preferred.

### 4. Start the backend server

```bash
node app.js
```

### 5. Open the frontend

Use Live Server or open `client/index.html` directly in your browser.

---

## 🧪 API Endpoints

| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| GET    | `/api/bugs`          | Fetch all bugs      |
| POST   | `/api/bugs`          | Submit a new bug    |
| PUT    | `/api/bugs/:id`      | Update a bug        |
| DELETE | `/api/bugs/:id`      | Delete a bug        |

---

## 📁 Folder Structure

```
bugvault-lite/
├── client/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── server/
│   ├── app.js
│   └── routes/
│       └── bugs.js
```

---

## ✨ Future Enhancements

- Modal-based editing UI
- Severity-based filtering
- User authentication
- Cloud deployment (Render/Railway)
- Toast notifications and animations

---

## 👨‍💻 Author

**Vidya**  
Student at New Horizon College, Bengaluru  
Focused on full stack development and UI/UX polish  
Project-based learner and inventive thinker  
Built BugVault Lite to sharpen backend integration and frontend responsiveness

---

## 📜 License

This project is open-source and free to use under the MIT License.

---

## Working Video Link

https://drive.google.com/file/d/1xP_W0nuENP2fOowQtkTsRvAFk1chDJHV/view?usp=drive_link

---

