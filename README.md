# Лендинг «Я отменяю токсик»

Веб-приложение для создания персонализированных видео с надписью «Я отменяю токсик».

## Технологии

- **Astro** - статический генератор сайтов
- **Tailwind CSS** - CSS фреймворк  
- **mp4-muxer** - создание MP4 видео в браузере
- **WebCodecs API** - кодирование видео

## Установка

```bash
npm install
```

## Разработка

```bash
npm run dev
```

Сайт будет доступен по адресу `http://localhost:4321`

## Сборка

```bash
npm run build
```

## Структура проекта

```
/
├── public/
│   ├── favicon.svg
│   ├── favicon.ico  
│   └── videos/
│       ├── boy.mp4      # для мужского пола
│       └── girl.mp4     # для женского пола
├── src/
│   ├── pages/
│   │   ├── index.astro  # главная страница
│   │   └── video.astro  # страница с видео
│   ├── components/
│   │   ├── GenderToggle.astro
│   │   ├── ProgressOverlay.astro
│   │   └── DownloadButton.astro
│   └── styles/
│       └── global.css
```

## Видео файлы

Поместите видео файлы `boy.mp4` и `girl.mp4` в папку `public/videos/`.
Видео должны быть в портретной ориентации (соотношение сторон 2:3).

## Деплой

Проект настроен для деплоя на **Cloudflare Pages**.

## Cloudflare Analytics

Замените `__YOUR_TOKEN__` в мета-теге на реальный токен Cloudflare Analytics. 