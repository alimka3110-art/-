# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

## Как запустить HR Portal

1. Откройте PowerShell и перейдите в папку проекта:
```powershell
cd C:\hr-app
```

2. Установите зависимости:
```powershell
npm install
```

3. Установите роутер (если не установлен):
```powershell
npm install react-router-dom@6
```

4. Запустите проект:
```powershell
npm start
```

5. Откройте [http://localhost:3000](http://localhost:3000) в браузере.

---

**Возможности:**
- Современный дизайн, адаптивная верстка
- Список, поиск, сортировка, добавление, редактирование, удаление сотрудников
- Все данные сохраняются в localStorage браузера

---

**Очистить всех сотрудников:**
В консоли браузера выполните:
```javascript
localStorage.removeItem('employees')
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Local changes in this project

Проект обновлён: теперь используется маршрутизация и отдельные страницы.

Основные страницы:
- `/` — Главная
- `/employees` — Список сотрудников (фильтр, удаление)
- `/add` — Форма добавления сотрудника
- `/edit/:id` — Редактирование сотрудника

Перед запуском установите зависимость `react-router-dom`:

```powershell
cd C:\hr-app
npm install react-router-dom@6
```

Запуск проекта (PowerShell):

```powershell
cd C:\hr-app
npm install
npm start
```

Данные сотрудников сохраняются в `localStorage` (ключ `employees`). Чтобы очистить — откройте DevTools → Application → Local Storage или выполните:

```javascript
localStorage.removeItem('employees')
```

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
