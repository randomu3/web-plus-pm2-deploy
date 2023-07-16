module.exports = {
	          apps : [{
			                        name: "backend",
			                        script: "./src/app.ts", // Возможно, здесь проблема
			                        instances: "max",
			                        env: {
							                                    NODE_ENV: "development",
							                                  },
			                        env_production: {
							                                    NODE_ENV: "production",
							                                  }
			                      }],
	          deploy : {
			                        production : {
							                                    user : "demiz",
							                                    host : "api.grottie.nomoredomains.work",
							                                    ref  : "origin/master",
							                                    repo : "git@github.com:randomu3/web-plus-pm2-deploy.git",
							                                    path : "/home/demiz/web-plus-pm2-deploy/backend",
							                                "post-deploy" : "npm install && pm2 reload /home/demiz/web-plus-pm2-deploy/backend/ecosystem.config.js --env production"
							                                  }
			                      }
}

