# Docker Setup für IIT Welders

Dieses Projekt kann mit Docker und Docker Compose ausgeführt werden.

## Voraussetzungen

- Docker
- Docker Compose

## Entwicklung

### Mit Docker Compose (empfohlen)

```bash
# Entwicklungsumgebung starten
docker-compose -f docker-compose.dev.yml up

# Im Hintergrund ausführen
docker-compose -f docker-compose.dev.yml up -d

# Logs anzeigen
docker-compose -f docker-compose.dev.yml logs -f

# Stoppen
docker-compose -f docker-compose.dev.yml down
```

Die Anwendung ist dann unter `http://localhost:8080` erreichbar.

### Manuell mit Docker

```bash
# Development Image bauen
docker build -f Dockerfile.dev -t iitwelders-dev .

# Container starten
docker run -p 8080:8080 -v $(pwd):/app -v /app/node_modules iitwelders-dev
```

## Produktion

### Mit Docker Compose

```bash
# Produktionsumgebung starten
docker-compose up -d

# Logs anzeigen
docker-compose logs -f

# Stoppen
docker-compose down
```

Die Anwendung ist dann unter `http://localhost:3000` erreichbar.

### Mit Nginx (optional)

```bash
# Mit Nginx Reverse Proxy
docker-compose up -d

# Anwendung ist dann unter http://localhost erreichbar
```

### Manuell mit Docker

```bash
# Produktions Image bauen
docker build -t iitwelders-prod .

# Container starten
docker run -p 3000:3000 iitwelders-prod
```

## Nützliche Befehle

```bash
# Container neu bauen
docker-compose build --no-cache

# Alle Container und Volumes entfernen
docker-compose down -v

# In laufenden Container einsteigen
docker exec -it iitwelders-web sh

# Images aufräumen
docker system prune -a
```

## Umgebungsvariablen

Kopieren Sie `.env.example` zu `.env` und passen Sie die Werte an:

```bash
cp .env.example .env
```

## Troubleshooting

### Port bereits belegt
Falls Port 3000 oder 8080 bereits belegt ist, ändern Sie die Ports in der entsprechenden docker-compose.yml Datei.

### Node Modules Probleme
```bash
# Container und Volumes entfernen
docker-compose down -v

# Neu starten
docker-compose up --build
```

### Permission Probleme (Linux/Mac)
```bash
# Ownership korrigieren
sudo chown -R $USER:$USER .
```
