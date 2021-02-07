# 餐廳清單(Restaurant List)

  - 此專案使用 Node.js + Express + MongoDB 
  - 可供使用者分類、瀏覽、新增、編輯、刪除支出紀錄。

## 功能描述 (features)
  - 首頁可一次瀏覽所有支出並看見支出總額
  - 可以新增一筆支出
  - 可以於新增後編輯所有屬性
  - 可以刪除任何支出
  - 可選擇下拉選單篩選支出類別並看見類別支出總額

## 專案畫面
![home](/public/photos/home.jpg)
![new](/public/photos/new.jpg)
![edit](/public/photos/edit.jpg)

## 環境建置與需求 (prerequisites)
```
Node.js 10.15.0
```
## 安裝與執行步驟 (installation and execution)

**1. 將本專案存放至本機(下列方法2擇1)**
  - 打開終端機輸入 git clone https://github.com/emilycodeee/expense-tracker.git
  - 點選 Download ZIP 下載

**2. 進入專案資料夾(restaurant_list)使用終端機安裝相關套件**

```
npm install
```
**3. 載入seed data**
```
npm run seed
```
**4. 使用nodemon，啟動專案伺服器**
```
npm run dev
```
**5. 終端機出現下列字串代表伺服器成功啟動**

Express is listening on http://localhost:3000

**6. 透過瀏覽器瀏覽專案**

打開瀏覽器在網址列輸入 localhost:3000 即可瀏覽

## 環境建置

- Node.js v14.15.1 -執行環境
- Express v4.17.1 -框架
- Express-handlebars v5.2.0 -模板引擎
- mongoDB Community Serve v4.2.12 -資料庫
- mongoose v5.11.14 -ODM
- body-parser v1.19.0
- method-override v3.0.0

