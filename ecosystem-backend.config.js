require('dotenv').config();

module.exports = {
	  apps: [
		      {
			            name: "backend-service",
			            script: "./backend/app.js",
			          },
		    ],

	  deploy: {
		      production: {
			            user: process.env.DEPLOY_USER,
			            host: process.env.DEPLOY_HOST,
			            ref: process.env.DEPLOY_REF || "origin/master",
			            repo: "https://github.com/randomu3/web-plus-pm2-deploy.git",
			            path: `${process.env.DEPLOY_PATH}/backend`,
			            "post-deploy":
			              "npm install && cp ../.env . && pm2 reload ecosystem.config.js --env production",
			          },
		    },
};

