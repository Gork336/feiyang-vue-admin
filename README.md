# feiyang-weixiu-admin

## 请求API

### POST  /login
  
发送数据格式：

```json
{
  "username":"1",   
  "password":"2",   
  "token":"10000000-aaaa-bbbb-cccc-000000000001"
}
```

返回数据格式：

```json
{
  "captchaValid":"true",
  "accountValid":"true",
  "token":"  "
}
```

### POST  /getUsers

### POST /getTechnicians
