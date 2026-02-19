# 🌲 Project Author: David Theuri.
# Project Name: Wanderlog.


> **A minimalist, Earth-toned travel archive built for documenting journeys with a "homey" digital feel.**

This project is a browser-based travel diary that allows users to log their favorite global destinations, landmarks, and seasonal recommendations. Built with a focus on **User Experience (UX)** and **Local Persistence**, it aims to feel more like a personal leather-bound journal than a cold database.

---

## 🎨 Design Philosophy: "The Digital Cabin"

Unlike the high-contrast, aggressive interfaces of modern social media, this site utilizes an **Earth-Tone / Woody** color palette.

* **Roomy Layout:** Purposely designed with generous padding to create a "breathable," stress-free environment.
* **Organic Tones:** A curated selection of forest greens, deep browns, and warm creams to evoke a sense of nostalgia.
* **Tactile UI:** Includes a "Beautifully Styled" remove button and interactive elements that provide immediate visual feedback.

---

## 🚀 Key Features

### 📍 The "You Were Here" Signature
My favorite engineering touch in this project. Upon clicking the **Submit** button, the application doesn't just save data—it explicitly logs a confirmation of the user's presence.
* **Unified Logic:** I integrated this check-in feature directly into the submission trigger to keep the UI clean and the "one-click" experience intact.

### 💾 Persistent Memory
* **Local Storage Integration:** Uses the Web Storage API to ensure your travel logs remain saved in the browser even after a page refresh or a full restart.
* **Zero Latency:** By avoiding external API calls, the "Log -> Save -> Display" loop is instantaneous.

### 🛠️ Effortless CRUD Management
* **Detailed Logging:** Capture the country, specific landmarks, and the best time of year to visit.
* **Memory Management:** A custom-designed delete feature allows for the removal of entries while maintaining the aesthetic flow of the page.

---

## 🛠️ Technical Stack

| Layer | Technology | Role |
| :--- | :--- | :--- |
| **Structure** | HTML5 | Semantic document mapping and input handling. |
| **Styling** | CSS3 | Custom Flexbox/Grid layouts & Woody color variables. |
| **Logic** | JavaScript (ES6+) | DOM Manipulation & Local Storage CRUD operations. |

---

## ⚙️ Getting Started

Since this is a lightweight, client-side application, there is no complex installation required.

1.  **Clone the Repository:**
    ```bash
    git clone [https://davidtheuri.github.io/Wanderlog/](https://github.com/)[David Theuri]/[Wanderlog].git
    ```
2.  **Launch the App:**
    Simply open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).
3.  **How to Log:**
    Fill out the destination details and hit **Submit**. Your entry will be saved locally and the "You Were Here" signature will be triggered.

---

## 🧠 Technical Challenges Overcome

* **State Management:** Developing a system to parse and stringify JSON data from `localStorage` without losing data integrity during user sessions.
* **Visual Consistency:** Ensuring the "roomy" feel of the layout remained stable even as the list of travel entries grew vertically.

---

## 📝 License
Distributed under the MIT License.