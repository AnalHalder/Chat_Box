
---

# 💬 Chat Box

A  **chat application** built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**.  
This supports **user authentication**, **group management**, and **messaging**, all secured via **JWT tokens**.

---

## 📚 Features

- User authentication (Signup / Login / Logout) using **JWT** and **cookies**  
- **Protected routes** using custom **middleware (`protectRoute`)**
- **Create, Rename, Delete Groups** (admin-only actions)
- **Send Messages** (between users and inside groups)
- **Get groups joined by a user**

---

## 🏗️ Project Structure

```
/src
  /controllers
    auth.controller.js
    group.controller.js
    message.controller.js
  /middlewares
    auth.middleware.js
  /models
    user.model.js
    group.model.js
    message.model.js
  /routes
    auth.routes.js
    group.routes.js
    message.routes.js
  index.js
.env
package.json
```

---

## 🛠️ Tech Stack

- **Backend**: Express.js, Node.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JWT
- **Other Tools:** bcrypt, dotenv

---
## 📬 API Endpoints

| Method | Route                         | Description                      |
|--------|-------------------------------|----------------------------------------------------|
| POST   | `/api/auth/signup`             | Register a new user                               |
| POST   | `/api/auth/login`              | Login user and set HTTP-only JWT cookie           |
| POST   | `/api/auth/logout`             | Logout user by clearing the JWT cookie            |
| POST   | `/api/group/creategroup`       | Create a new group (auth required)                |
| PATCH  | `/api/group/renamegroup`       | Rename a group (only group admin)                 |
| DELETE | `/api/group/deletegroup`       | Delete a group (only group admin)                 |
| GET    | `/api/group/getGroupsByUser`   | Get all groups where user is a member             |
| POST   | `/api/message/send/:id`        | Send a message to a user or a group               |
| GET    | `/api/message/:id`             | Get all messages between user and receiver/group  |

---

## ⚙️ How to Run Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/chat-box.git
   cd chat-box
   ```

2. **Install Backend Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**

   Create a `.env` file in the root:

   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   NODE_ENV=development
   PORT=5000
   ```

4. **Start the Server**
   ```bash
   npm start
   ```

5. Backend will run on `http://localhost:5000`

---


## 🛡️ Authentication Flow

- User signs up or logs in
- Backend sends a **JWT token** inside an **HTTP-only cookie**
- Protected routes use the token to **authenticate** and **authorize** users

---
## 🙌 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---