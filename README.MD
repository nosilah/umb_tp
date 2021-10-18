# TEST PROJECT 
---
---
## 1. Project setup 
```
npm run app
```
## 2. Create and start containers with project
```
docker-compose up -d
```

## 3. Run migrations 

```
docker exec -it portalapi php artisan migrate
```


## 4. Install passport secret-key
Only after successfully runed migrations, for auth-service in portalapi I use laravel/passport and you have to run the commands necessary to prepare Passport for use
```
docker exec -it portalapi php artisan passport:install
``` 

---
 
## **Additional notes**
* ###   **show routing map**

```
docker exec -it portalapi php artisan route:list
```
* ###   **for testing portalapi**

for example in postaman you can use http://localhost:8081/ + url form routing map

* ### **SMTP server**
As an SMTP server I use locally [Mailhog](http://localhost:8025), you can check received  messages by address <a href="http://localhost:8025">http://localhost:8025 </a>

---
###   **Project includes**
```
├── docker
│   ├── mysql
│   └── nginx
├── docker-compose.yml
├── package.json
├── portal
│   ├── babel.config.js
│   ├── dist
│   ├── Dockerfile
│   ├── node_modules
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   ├── README.md
│   ├── server
│   └── src
├── portalApi
│   ├── app
│   ├── artisan
│   ├── bootstrap
│   ├── composer.json
│   ├── composer.lock
│   ├── config
│   ├── database
│   ├── package.json
│   ├── phpunit.xml
│   ├── public
│   ├── README.md
│   ├── resources
│   ├── routes
│   ├── server.php
│   ├── storage
│   ├── tests
│   ├── vendor
│   └── webpack.mix.js
└── README.MD
```
