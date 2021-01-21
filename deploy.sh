#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# En caso de tener configurado su cuenta de GitHub para conectarse via SSH usar:
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# En caso contrario usar
# git push -f https://github.com/<USERNAME>/<REPO>.git master:gh-pages
git push -f https://github.com/YarlinWare/Estimacion-Proyectos.git master:gh-pages

cd -