# ⚙️ API Express

![JavaScript](https://img.shields.io/badge/Javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)  ![Express.js](https://img.shields.io/badge/ExpressJs-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white)

## 📌 Sommaire

I. [Prérequis](#🔧-prerequis)

II. [Routes](#📋-routes)

VI. [Utilisation](#💻-utilisation )



## 🔧 Prérequis :

- [Node](https://nodejs.org/en/download) installé sur le système.
- [Docker](https://www.docker.com) installé sur le système.

## 📋 Routes :

### Profils

| Méthode | Route | Description |
|--------|----------|-------------|
| GET    | /profiles | Renvoie tous les profils |
| GET    | /profiles/:id | Renvoie le profil lié à l'id |
| POST   | /profiles | Créer un nouveau profil (name et email uniquement) |
| PUT    | /profiles/:id | Mets à jour un profil (name et email uniquement) |
| DELETE | /profiles/:id | Supprime un profil (Soft-Delete) |

### Expériences :

| Méthode | Route | Description |
|--------|----------|-------------|
| POST   | /profiles/:id/experience | Ajoute une expérience à un profil (JSON) |
| DELETE | /profiles/:id/experience/:exp | Supprime une expérience du profil |

### Skills :

| Méthode | Route | Description |
|--------|----------|-------------|
| POST   | /profiles/:id/skills | Ajoute un skill au profil |
| DELETE | /profiles/:id/skills/:skill | Supprime un skill du profil |

### Informations :

| Méthode | Route | Description |
|--------|----------|-------------|
| PUT    | /profiles/:id/information | Modifie les informations d'un profil |

## 💻 Utilisation :

#### 1. Cloner le repo :
```bash
git clone https://github.com/Tenlutshy/api-express.git
```

#### 2. Naviguer jusqu'au projet :
```bash
cd api-express
```

#### 3. Configurer les variables d'environnement  :
Complétez le fichier `.env`.
Afin de compléter correctement les variables d'environnement, consultez le fichier [docker compose](./docker-compose.yml).

#### 3. Build the Docker Image :
```bash
docker-compose up -d
```


**✅ Vous pouvez maintenant accéder à l'API (port 8080)**