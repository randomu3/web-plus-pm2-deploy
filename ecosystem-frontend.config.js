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
			            user: 'demiz',
			            host: '84.201.162.24',
			            ref: 'origin/master',
			            repo: 'https://github.com/randomu3/web-plus-pm2-deploy.git',
			            path: '/home/demiz/web-plus-pm2-deploy/frontend',
			            "post-deploy":
			              "npm install && npm run build && pm2 startOrRestart ecosystem.config.js",
			          },
		    },
};

