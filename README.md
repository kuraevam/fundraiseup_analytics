# Настройка запуска продукта локально
1. Выгрузить проект из git
2. Создать .env от .env.example и прописать настройки
3. Запустить dev/docker-compose.yml


# Установка
Для установки выполнить
```bash
npm install
```

# Структура проекта
* `/src/client` - Клиент
* `/src/server` - Сервер
* `/app.ts` - файл запуска

# Команды npm scripts
* `npm run watch-server` - Запуск dev server и клиент
* `npm run watch-webpack` - Запуск webpack для клиент
* `npm run format` - prettier
* `npm run app` - Запуск prod

