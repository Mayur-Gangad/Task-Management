
# 📝 Task Management Board  

A simple **Jira-like Task Management Board** built with **React** supporting **drag-and-drop**, **localStorage persistence**, and **task tagging**.  

---

## 🚀 Features
- Add, edit, and delete tasks easily  
- Drag and drop tasks between statuses  
- LocalStorage integration to persist tasks  
- Tag support (e.g., DEV, QA, Docs)  
- Responsive UI for desktop & mobile  
- Simple and clean interface  

---

## 🛠 Tech Stack
- **React.js** – UI Library  
- **CSS3** – Styling  
- **LocalStorage** – Data persistence  

---

## 📸 Screenshots  
### Dashboard View
![Dashboard Screenshot](./screenshots/dashboard.png)  

### Drag and Drop
![Drag and Drop Screenshot](./screenshots/dragdrop.png)  


---

## 📦 Installation  

### 1. Clone the repository  
```bash
https://github.com/Mayur-Gangad/Task-Management.git
cd your-repo-name
```

### 2. Install dependencies  
```bash
npm install
```

### 3. Start the development server  
```bash
npm run dev
```

---

## 🏃‍♂️ Usage  

- Add tasks using the input form  
- Drag tasks between columns:  
  - **Ready for Development** → **In Progress** → **Ready to Test** → **Closed**  
- Tags help categorize tasks (e.g., DEV, QA, Docs)  
- Data stays saved in **localStorage** even after refresh  

---

## 📂 Folder Structure
```
.
├── src
│   ├── components
│   │   └── DropArea
│   │   ├── Tag
│   │   ├── TaskCard
│   │   ├── TaskColumns
│   │   ├── TaskForm
|   |   
|   |   
│   ├── Constants
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   
├── public
│   
└── README.md
```

---

## 🛡 License  
This project is licensed under the MIT License.  

---

## 🙌 Acknowledgements  
- Inspired by **Jira Board**  
- Built with ❤️ using React.js  
