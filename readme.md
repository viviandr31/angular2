# MySQL
```javascript
var connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'root',
database: 'webpackcli',
port: 3306,
socketPath: '/tmp/mysql.sock'
});
```

# backend
In backend directory, run

`node app`

This will start to serve public folder and RESTful API.

```backend/public``` folder is a symbolic link to ```frontend/dist```

# frontend
In fronend directory, run

`ng build -prod`

This will compile and dump generated codes to ```frontend/dist``` directory

# browser
Go to `http://localhost:3000/`