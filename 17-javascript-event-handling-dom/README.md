# ⚡ JavaScript Event Handling & DOM Project

This project demonstrates how JavaScript handles events in the DOM, including event bubbling, multiple event listeners, and keyboard interactions.

---

## 📘 Features

- Event bubbling demonstration using nested elements
- Control event flow using `stopPropagation()`
- Multiple event listeners:
  - Click
  - Double click
  - Right click (context menu)
- Keyboard event detection
- Dynamic content updates using DOM
- Usage of `setTimeout` and `clearTimeout`

---

## 🧠 Concepts Used

### 🔹 Event Handling
- addEventListener()
- click, dblclick, contextmenu events
- keydown event

### 🔹 Event Bubbling
- Understanding propagation
- stopPropagation() usage

### 🔹 DOM Manipulation
- getElementById()
- querySelector()
- innerHTML updates

### 🔹 Async JavaScript
- setTimeout()
- clearTimeout()

---

## 🚀 How It Works

### 1. Event Bubbling
- Clicking on child triggers parent events
- Controlled using `stopPropagation()`

### 2. Button Events
- Click → changes content
- Double click → different content
- Right click → shows alert

### 3. Keyboard Events
- Logs pressed key and keyCode in console

---

## 🧪 Example

- Click the child element → shows alert
- Double click the button → updates text
- Press any key → logs key info in console

---

## 🚀 Key Learnings

- How events propagate in the DOM
- Handling multiple user interactions
- Controlling event flow
- Working with keyboard and mouse events

---

## 📈 Future Improvements

- Add UI instead of alerts
- Show event logs on screen
- Improve styling with CSS
- Add event delegation example

---

## ✍️ Author

**Jimit Patel**