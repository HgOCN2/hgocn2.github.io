#!/bin/bash
git add -A

echo "update status: "
git status --ignored

git commit -m "update blog $(date '+%Y-%m-%d %H:%M:%S')"
git push