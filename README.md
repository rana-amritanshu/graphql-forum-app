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
  - Run (sudo) **docker-composer up (-d)** from root folder
  - the above command will setup **postgres DB**(localhost:8880), **pgAdmin 4** (localhost:8881)
  - Access pgadmin on localhost:8881, username: user@example.com, password: 123456
  
#### Prisma Server
  - cd primsa
  - change the networks: name in the **prisma/docker-compose.yml** accordingly, refer root docker-compose.yml file & cross check with **(sudo) docker network ls**
  - run (sudo) docker-compose up (-d) from the prisma folder
  - run **prisma deploy** from prisma folder
  - accessible on localhost:4466 from browser
  