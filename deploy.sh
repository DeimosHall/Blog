#!/bin/bash

hugo -d docs/
git add .
git commit -m "chore: deploy content"
git push origin development
git checkout main
git merge development
git push origin main
git checkout development

echo "Deployment to GitHub Pages completed successfully."