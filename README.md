# feiyang-weixiu-admin

## 登陆页面-login1

包含请求：POST  /login
发送数据格式：{"username":"1","password":"2","token":"10000000-aaaa-bbbb-cccc-000000000001"}

```javascript
axios
      .post("/login", JSON.stringify(loginForm))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## npm包
