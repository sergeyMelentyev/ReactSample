npm init

npm install --save react react-dom react-router-dom axios

npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react css-loader style-loader html-webpack-plugin webpack webpack-dev-server

***
SPA приложение на React.JS для работы с API GitHub.
Делается запрос (axios) к удаленному API с целью получения 30 наиболее популярных (по звездам) репозиториев, полученные данные используются для рендеринга UI приложения.
Так же есть возможность вручную ввести названия двух репозиториев и сравнить их по основным показателям, на основании данных, получаемых от удаленного офиса.
