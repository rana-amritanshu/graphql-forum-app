## Forum App
### Prisma & GraphQL
---

### Requirements
 - docker
 - npm
 - node
 - prisma (npm i -g prisma)
---

### Instructions
#### DB, DB - Client & Node environment
  - cp dev.env.example dev.env
  - Run (sudo) **docker-composer up (-d)** from root folder
  - the above command will setup **postgres DB**(localhost:8880), **pgAdmin 4** (localhost:8881)
  - Access pgadmin on localhost:8881, username: user@example.com, password: 123456
  
#### Prisma Server
  - cd primsa
  - change the networks: name in the **prisma/docker-compose.yml** accordingly, refer root docker-compose.yml file & cross check with **(sudo) docker network ls**
  - run (sudo) docker-compose up (-d) from the prisma folder
  - run **export PRISMA_MANAGEMENT_API_SECRET=<managementApiSecret from prisma/docker-compose.yml>**
  - run **prisma deploy** from prisma folder to migrate the schema
  - run **prisma token** to generate Authorization token
  - accessible on localhost:4466/forum/dev from browser
  - In the HTTP HEADERS TAB add {"Authorization": "Bearer <token generated by prisma token command>"}
  