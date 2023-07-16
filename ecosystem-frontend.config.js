require('dotenv').config();

module.exports = {
	  apps: [
		      {
			            name: "frontend-service",
			            script: "serve",
			            env: {
					            PM2_SERVE_PATH: '.frontend/build',
					            PM2_SERVE_PORT: 8000,
					          },
			          },
		    ],

	  deploy: {
		      production: {
			            user: process.env.DEPLOY_USER,
			            host: process.env.DEPLOY_HOST,
			            ref: process.env.DEPLOY_REF || "origin/master",
			            repo: "https://github.com/randomu3/web-plus-pm2-deploy.git",
			            path: `${process.env.DEPLOY_PATH}/frontend`,
			            "post-deploy":
			              "npm install && npm run build && pm2 startOrRestart ecosystem.config.js",
			          },
		    },
};

