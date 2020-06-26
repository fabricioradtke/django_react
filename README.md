# Django-React
Projeto em Django usando React para renderizar o template.

## Configurar o ambiente
```
# Instalar NodeJS
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
npm -v

# Instalar Yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install --no-install-recommends yarn
yarn -v
```

## Instalando Django
```
virtalenv env
. env/bin/activate
pip install django
```

### Instalar Django Webpack
```
pip install django-webpack-loader
```

### Criar projeto no Django
```
django-admin startproject <projectname> .
django-admin startapp <appname>
```

## Confugurar settings.py do Django
```
WEBPACK_LOADER = {
	'DEFAULT': {
		'BUNDLE_DIR_NAME': 'dist/',
		'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.json'),
	}
}
```

## Instalar React
```
yarn init -y
yarn add -D webpack webpack-cli webpack-bundle-tracker
yarn add -D babel-loader @babel/core babel-loader @babel/preset-env @babel/preset-react
yarn add -D @babel/plugin-proposal-class-properties
yarn add react react-dom
```

## Configurar package.json
```
"scripts": {
	"start": "webpack --mode development --watch",
	"build": "webpack --mode production"
}
```

## Executar React
```
# Desenvolvimento
yarn start

# Produção
yarn build
```
