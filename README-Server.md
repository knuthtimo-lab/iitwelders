# Server Deployment Guide - IIT Welders

## Voraussetzungen für Server-Deployment

### Server-Anforderungen
- **Betriebssystem**: Ubuntu 20.04+ / CentOS 7+ / Debian 10+
- **RAM**: Mindestens 2GB (4GB empfohlen)
- **CPU**: 1 Core (2 Cores empfohlen)
- **Speicher**: Mindestens 10GB freier Speicher
- **Docker**: Version 20.10+
- **Docker Compose**: Version 2.0+

### Domain & SSL (optional)
- Domain-Name für die Website
- SSL-Zertifikat (Let's Encrypt empfohlen)

## Schnellstart

### 1. Server vorbereiten
```bash
# Docker installieren (Ubuntu/Debian)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Docker Compose installieren
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Neustart erforderlich
sudo reboot
```

### 2. Projekt auf Server übertragen
```bash
# Mit Git (empfohlen)
git clone <your-repository-url>
cd iitwelders

# Oder mit SCP
scp -r ./iitwelders user@server:/home/user/
```

### 3. Deployment ausführen
```bash
# Produktions-Deployment
./deploy.sh

# Oder manuell
docker-compose up -d
```

## Detaillierte Anleitung

### Option 1: Einfaches Deployment (nur App)
```bash
# 1. Projekt klonen/übertragen
git clone <repository-url>
cd iitwelders

# 2. Dependencies installieren
npm install

# 3. Build erstellen
npm run build

# 4. Mit Docker starten
docker-compose up -d

# 5. Status prüfen
./deploy.sh status
```

### Option 2: Vollständiges Deployment (mit Nginx)
```bash
# 1. Alle Schritte aus Option 1
# 2. Nginx-Konfiguration anpassen (falls nötig)
# 3. SSL-Zertifikate hinzufügen (optional)
mkdir ssl
# SSL-Zertifikate in ssl/ Ordner kopieren

# 4. Mit Nginx starten
docker-compose up -d

# 5. Nginx-Konfiguration testen
docker exec iitwelders-nginx nginx -t
```

### Option 3: Mit Reverse Proxy (Traefik/Nginx)
```bash
# Für Produktionsumgebung mit automatischem SSL
# docker-compose.prod.yml erstellen (siehe unten)
```

## Konfiguration

### Umgebungsvariablen
```bash
# .env Datei erstellen
cp .env.example .env

# Anpassen nach Bedarf
nano .env
```

### Nginx-Konfiguration anpassen
```bash
# nginx.conf bearbeiten
nano nginx.conf

# Neustart nach Änderungen
docker-compose restart nginx
```

### SSL-Zertifikate (Let's Encrypt)
```bash
# Certbot installieren
sudo apt install certbot

# Zertifikat erstellen
sudo certbot certonly --standalone -d yourdomain.com

# Zertifikate in Docker-Container kopieren
sudo cp /etc/letsencrypt/live/yourdomain.com/*.pem ./ssl/
```

## Monitoring & Wartung

### Logs anzeigen
```bash
# Alle Logs
./deploy.sh logs

# Nur App-Logs
docker logs iitwelders-web

# Nur Nginx-Logs
docker logs iitwelders-nginx
```

### Health Check
```bash
# Automatischer Health Check
./deploy.sh health

# Manueller Check
curl http://localhost:3000
```

### Updates
```bash
# Code aktualisieren
git pull origin main

# Neues Deployment
./deploy.sh

# Oder nur App neu starten
docker-compose restart iitwelders-app
```

### Backup
```bash
# Container stoppen
./deploy.sh stop

# Backup erstellen
tar -czf backup-$(date +%Y%m%d).tar.gz .

# Container starten
./deploy.sh
```

## Troubleshooting

### Häufige Probleme

#### Port bereits belegt
```bash
# Ports prüfen
netstat -tulpn | grep :3000

# Prozess beenden
sudo kill -9 <PID>
```

#### Docker-Probleme
```bash
# Docker neu starten
sudo systemctl restart docker

# Container bereinigen
docker system prune -a
```

#### Speicherplatz
```bash
# Speicherplatz prüfen
df -h

# Docker-Images bereinigen
docker image prune -a
```

#### Logs prüfen
```bash
# System-Logs
journalctl -u docker

# Container-Logs
docker logs iitwelders-web --tail 100
```

## Sicherheit

### Firewall konfigurieren
```bash
# UFW aktivieren
sudo ufw enable

# Nur notwendige Ports öffnen
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
```

### SSL/TLS
- Let's Encrypt für kostenlose SSL-Zertifikate
- Automatische Erneuerung einrichten
- HSTS-Header aktivieren

### Updates
- Regelmäßige System-Updates
- Docker-Images aktualisieren
- Sicherheits-Patches installieren

## Performance-Optimierung

### Nginx-Optimierung
- Gzip-Kompression aktiviert
- Browser-Caching konfiguriert
- Rate Limiting aktiviert

### Docker-Optimierung
- Multi-stage Builds
- Alpine Linux Images
- Volume-Optimierung

## Support

Bei Problemen:
1. Logs prüfen: `./deploy.sh logs`
2. Health Check: `./deploy.sh health`
3. Status prüfen: `./deploy.sh status`
4. Container neu starten: `./deploy.sh stop && ./deploy.sh`
