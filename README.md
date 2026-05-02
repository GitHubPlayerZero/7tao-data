# JSON Server

- [專案拷貝來源](https://github.com/gonsakon/json-server-vercel)

由於 Vercel 無法長時間保留資料，所以此專案會用來部署於 **Render** 或 **Zeabur**，故將 Vercel 相關設定移除。<br>
原說明亦不再適用於本專案，因此移除之。

---

## 於 Render 或 Zeabur 運行

下載此專案後，上傳到自己的 GitHub，再於 [Render](https://render.com/) 或 [Zeabur](https://zeabur.com/zh-TW/) 中部署專案即可使用。

---

## 本機運行

下載後若想運行於本機，請先安裝套件：

```javascript
npm i
```

<br>

### 腳本說明

- `npm run start`<br>
  啟動 Node Server 作為 JSON Server 服務，異動資料時**不會**實際寫入 db.json，**具有身份驗證功能**。<br>
  **註：** 部署於 Render／Zeabur 的運行方式屬於此種，因此資料不會實際寫入 db.json，只會暫存於 Render／Zeabur 中，當有休眠或重啟伺服器時即會釋放。
- `npm run watch`<br>
  直接啟動 JSON Server 服務，**本機**須安裝 json-server 套件於**全域**，資料**會**實際寫入 db.json，本身**不**具有身份驗證功能。
- `npm run auth`<br>
  啟動 JSON Server Auth 服務（本身亦為 JSON Server 服務），須於**此專案中**安裝 json-server、json-server-auth 套件，資料**會**實際寫入 db.json，**具有身份驗證功能**。

<br>

### JSON Server URL

http://localhost:3000/

---

## server.js 說明

**server.js** 是一個 **Node.js 後端伺服器文件**，用於設置和運行 JSON Server，以下是主要功能。

<br>

### 核心用途
- **建立 RESTful API 伺服器**：使用 `json-server` 套件，可以快速從 db.json 文件創建模擬 API。
- **提供數據接口**：允許前端應用通過 HTTP 請求（GET、POST、PUT、PATCH、DELETE）操作 JSON 數據。

<br>

### 主要功能模塊

| 功能 | 說明 |
|------|------|
| **CORS** | 允許跨域請求，使前端應用可以從不同域名訪問伺服器 |
| **JSON Server Router** | 將 db.json 中的數據轉換為 REST API 端點 |
| **認證中間件** | 使用 `json-server-auth` 提供用戶認證功能 |
| **中間件** | 應用默認的中間件（日誌記錄、靜態文件等） |
| **端口監聽** | 在指定端口（默認 3000）上運行伺服器 |

<br>

### 運作流程
1. 引入依賴套件（CORS、JSON Server、認證模塊）
2. 讀取 db.json 數據文件
3. 設置中間件和路由
4. 於端口啟動伺服器
5. 匯出伺服器實例供其他模塊使用

這種設置常用於 Vue 或 React 前端開發時，作為本地開發環境的 **模擬後端 API**。
