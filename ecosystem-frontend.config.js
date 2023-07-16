require('dotenv').config();

const {
	DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
	  apps: [
		      {
			            name: "frontend-service",
			            script: "serve",
			            env: {
					            PM2_SERVE_PATH: `${DEPLOY_PATH}/frontend/build`,
					            PM2_SERVE_PORT: 8000,
					          },
			          },
		    ],

	  deploy: {
		      production: {
			            user: DEPLOY_USER,
			            host: DEPLOY_HOST,
			            ref: DEPLOY_REF,
			            repo: 'https://github.com/randomu3/web-plus-pm2-deploy.git',
			            path: `${DEPLOY_PATH}/frontend`,
					'pre-deploy': `scp ./*.env ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}`,
			            'post-deploy': 'npm i && npm run build',
			          },
		    },
};

