require('dotenv').config();

module.exports = {
	  apps: [
		      {
			            name: "backend-service",
			            script: "./backend/dist/app.js",
			          },
		    ],

	  deploy: {
		      production: {
			            user: process.env.DEPLOY_USER,
			            host: process.env.DEPLOY_HOST,
			            ref: process.env.DEPLOY_REF || "origin/master",
			            repo: "https://github.com/randomu3/web-plus-pm2-deploy.git",
			            path: `${process.env.DEPLOY_PATH}/backend`,
			      "post-deploy": "source ~/.nvm/nvm.sh && npm install && cp ../.env . && pm2 reload ecosystem-backend.config.js --env production",

			          },
		    },
};

