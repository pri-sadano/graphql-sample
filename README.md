# graphql-sample

## frontend
```
$ cd frontend
$ cp .env.local.example .env.local
$ npm run dev
```

## backend
```
$ cd backend
$ cp .env.example .env
$ npm install
$ docker-composeup -d
$ npx prisma migrate deploy
$ npm run start:dev
``` 
```
$ open http://localhost:3000/
```