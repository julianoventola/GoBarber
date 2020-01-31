# GoBarber - Backend (Windows)

- express - Used to run the server
- sucrase - Enable to use import from/ export default in js files (dev dependence)
- nodemon - User to auto restart server when change anything (dev dependence - sucrase runs before it)
- eslint - Used to keep a pattern in code lines (dev dependence -Airbnb pattern - vscode eslint extension required to work)
- prettier - Used to keep default format on documents (dev dependence)
  - eslint-config-prettier - Makes prettier works with eslint (dev dependence)
  - eslint-plugin-prettier - Makes prettier works with eslint (dev dependence)
  - Run: yarn eslint --fix src --ext .js - This will fix all .js in folder

# Docker

- Install docker: https://docs.docker.com/install/
- Run: docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432
- \*If docker container stops run: docker start database
- See all running dockers, run: docker ps

  - Port 5432 must be free for docker
  - Dont install postgress let it by docker

- Postgress - as main database (docker container)
  - Postbird - software for postgress database(create a new database for gobarber)

# Sequelize - ORM - Javascript instead SQL

- ## Migration - for version control in database(create, update, delete in database)

# How to start

- Run: yarn OR npm install
- Run: yarn dev OR npm dev
