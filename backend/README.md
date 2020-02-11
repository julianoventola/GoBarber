# GoBarber - Backend (Windows)

- express - Used to run the server
- sucrase - Enable to use import from/ export default in js files (dev dependence)
- nodemon - User to auto restart server when change anything (dev dependence - sucrase runs before it)
- eslint - Used to keep a pattern in code lines (dev dependence -Airbnb pattern - vscode eslint extension required to work)
- prettier - Used to keep default format on documents (dev dependence)
  - eslint-config-prettier - Makes prettier works with eslint (dev dependence)
  - eslint-plugin-prettier - Makes prettier works with eslint (dev dependence)
  - Run: yarn eslint --fix src --ext .js - This will fix all .js in folder
- sequelize - Used as ORM for databases, Javascript instead SQL
  - Migration - for version control in database(create, update, delete in database)
- sequelize-cli - Used to controll migrations
- pg - Used to work with postgres
- pg-hstore - Used to work with postgres and sequelize
- bcryptjs - Used to hash all passwords
- jsonwebtoken - Used for JWT session auth
- Yup - Used for schema (fields required) validation
- Multer - Used to handle multipartformdata / Files
- date-fns - Used to handle dates and hours
- mongoose - Used to work with mongo db
- nodemailer - Used to send emails (used with mailtrap.io)
  - You must use you credentials from mailtrap.io
- express-handlebars - Used to create templates HTML + Javascript for emails
- nodemailer-express-handlebars - Used to work nodemailer with templates
- bee-queue - Used to work with Background jobs(Queues)
- sentry/node - Used to track errors in the server
- express-async-errors - Used to enable express to send async errors through sentry
- youch - Used to handle request errors
- dotenv - Used to create environment variables to improve security and default configurations

# Docker

- Install docker: https://docs.docker.com/install/
  \*All docker's containers must be running with the correct names

- POSTGRES:

  - Run: docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432
  - \*If docker container stops, run: docker start database
  - See all running dockers, run: docker ps
    - Port 5432 must be free for docker
    - Dont install postgress let it by docker
  - Postgres - as main database (docker container)
    - Postbird - software for postgres database(create a new database for gobarber)

- MONGO DB:

  - Run: docker run --name mongobarber -p 27017:27017 -d -t mongo
  - Mongo - as noSQL database for Notifications(docker container)
    - Mongo db Compass community - software for mongo database

- REDIS:

  - Run: docker run --name redisbarber -p 6379:6379 -d -t redis:alpine
  - Redis - as noSQL database for Background jobs - Queues(docker container)

# Sequelize

- Creating User model
  - yarn sequelize migration:create --name=create-users
  - yarn sequelize db:migrate - For creation
  - yarn sequelize db:migrate:undo OR yarn sequelize db:migrate:undo:all - For rollback

# Sentry

- Create a new project in sentry.io (express)
  - yarn add @sentry/node@5.12.2 OR npm install @sentry/node@5.12.2
  - configure YOUR project's dsn

# How to start

- Run: yarn OR npm install
- Run: yarn dev OR npm dev
- Run: yarn queue OR npm queue (for background jobs - keep it running with server)
