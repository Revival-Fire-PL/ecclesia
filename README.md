# Ecclesia

Starter monorepo (backend, web, mobile).

Projekt wspiera wyłącznie workflow oparty o Docker.

## Wymagania

- Docker + Docker Compose

## Szybki start (Docker)

### Backend + Web

Uruchom usługi developerskie:

```bash
docker compose -f docker/docker-compose.dev.yml up --build
```

Po starcie:

- Backend: http://localhost:8000
- Web: http://localhost:3000

### Mobile (Expo)

Uruchom kontener z Expo:

```bash
docker compose -f docker-compose.yaml up --build mobile
```

## Budowanie aplikacji Android (APK)

Zbuduj obraz i wygeneruj plik APK:

```bash
docker compose -f docker-compose.apk.yml run --rm apk-builder
```

Gotowy plik znajdziesz w katalogu `build/app.apk`.
