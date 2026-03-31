# JSON Server with Zeabur

- [專案拷貝來源](https://github.com/gonsakon/json-server-vercel)

由於 Vercel 無法長時間保留資料，所以此專案會用來部署於 **Zeabur**，故將 Vercel 相關設定移除。<br>
原說明亦不再適用於本專案，因此移除之。

---

## 於 Zeabur 運行

下載此專案後，上傳到自己的 GitHub，再於 [Zeabur](https://zeabur.com/zh-TW/) 中部署專案即可使用。

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
  **註：** 部署於 Zeabur 的運行方式屬於此種，因此資料不會實際寫入 db.json，只會暫存於 Zeabur 中，當有休眠或重啟伺服器時即會釋放。
- `npm run watch`<br>
  直接啟動 JSON Server 服務，**本機**須安裝 json-server 套件於**全域**，資料**會**實際寫入 db.json，本身**不**具有身份驗證功能。
- `npm run auth`<br>
  啟動 JSON Server Auth 服務（本身亦為 JSON Server 服務），須於**此專案中**安裝 json-server、json-server-auth 套件，資料**會**實際寫入 db.json，**具有身份驗證功能**。

<br>

### JSON Server URL

http://localhost:3000/
