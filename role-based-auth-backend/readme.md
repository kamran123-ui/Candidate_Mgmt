# 1 stp clone the project 
 git clone https://github.com/kamran123-ui/Candidate_Mgmt.git

# 2 stp create the project the foleder 
 
  cd role-based-auth-backend
  es tarh dikhana chahiye candidate_mgmt/role-based-auth-backend then 
  npm init -y will be create a package.json file

# 2 stp reuire package install
  npm install express mongoose bcryptjs jsonwebtoken cors dotenv
  npm install --save-dev nodemon
  
  Ye kya karega:
 
  express → server framework

  mongoose → MongoDB se connect hone ke liye

  bcryptjs → password hash karne ke liye

  jsonwebtoken (JWT) → token generate karne ke liye

  cors → frontend se request allow karne ke liye

  dotenv → secret keys ko .env me store karne ke liye

  nodemon → auto server restart during development

# 3 create the folder structure 
  
  role-based-auth-backend/
 ┣ config/
 ┃ ┗ db.js
 ┣ middleware/
 ┃ ┗ authMiddleware.js
 ┣ models/
 ┃ ┗ User.js
 ┣ routes/
 ┃ ┣ adminRoutes.js
 ┃ ┗ candidateRoutes.js
 ┣ server.js
 ┗ .env

# 4 run ke liye 
candidate_mgmt\role-based-auth-backend then
npm run start
