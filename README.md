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

***

### POST  /getUsers

***

### POST /getTechnicians

### POST /addTechnician

发送数据格式：

```json
{
  "technician_id": "",
  "realname": "",
  "nickname": "",
  "phone_no": "",
  "qq_no": ""
}
```

### POST /deleteTechnician

发送数据格式: 字符串

### POST /updateTechnician

发送数据格式：

```json
{
  "technician_id": "",
  "realname": "",
  "nickname": "",
  "phone_no": "",
  "qq_no": ""
}
```

其中 `technician_id` 和 `realname` 不会改变，与数据库中相同
***

### POST /getOrders

***

### POST /getTotal

### POST /getCampusOrder

返回格式：

```json
{
  "JA":10,
  "WJ":9,
  "HX":8
}
```

### POST /getWeeklyOrder

返回格式：

```json
[
    {
        "day": "2023-07-31",
        "order_count": 6
    },
    {
        "day": "2023-08-01",
        "order_count": 4
    },
    {
        "day": "2023-08-02",
        "order_count": 6
    },
    {
        "day": "2023-08-03",
        "order_count": 5
    },
    {
        "day": "2023-08-04",
        "order_count": 5
    },
    {
        "day": "2023-08-05",
        "order_count": 0
    },
    {
        "day": "2023-08-06",
        "order_count": 0
    }
]
```
