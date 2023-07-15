module.exports = {
	  apps : [{
		      name: "backend",
		      script: "./src/app.ts", // Или укажите другой путь к вашему главному файлу приложения
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
			            user : "demiz", // Ваш пользователь на сервере
			            host : "api.grottie.nomoredomains.work", // Ваш хост
			            ref  : "origin/master",
			            repo : "git@github.com:randomu3/web-plus-pm2-deploy.git", // Замените на свой репозиторий
			            path : "/home/demiz/web-plus-pm2-deploy/backend", // Путь до папки с проектом
			            "post-deploy" : "npm install && pm2 reload ecosystem.config.js --env production"
			          }
		    }
}

