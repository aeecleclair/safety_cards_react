# Étape 1 : Build de l'application
FROM node:18 AS build

# Création du répertoire de l'application
WORKDIR /app

# Copier les fichiers nécessaires pour l'installation
COPY package*.json ./
COPY vite.config.* ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application
COPY . .

# Compiler l'application
RUN npm run build

# Étape 2 : Serveur Nginx pour héberger l'app
FROM nginx:alpine

# Supprimer la configuration par défaut de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copier les fichiers build dans le dossier de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copier une config nginx personnalisée (facultatif)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Commande par défaut
CMD ["nginx", "-g", "daemon off;"]
