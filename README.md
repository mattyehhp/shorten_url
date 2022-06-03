# shorten_url


## 環境建置
1. Node.js@14.16.0
2. Express@4.18.1
3. Express-handlebars@3.0.0
4. Mongoose@5.9.7
5. nanoid@3.3.4
6. valid-url@1.0.9

## 安裝步驟
1. git clone 

2. 安裝Node.js 

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

3. 安裝npm套件

```bash
npm install express@4.18.1 express-handlebars@3.0.0 mongoose@5.9.7 nanoid valid-url
```

4. 設定環境變數  
MONGODB_URI = mongodb+srv://你的帳號:你的密碼@cluster0.rwy64fu.mongodb.net/shorten_url?retryWrites=true&w=majority
LC_CTYPE=UTF-8  

5. Testing 

```bash 
npm run dev
```