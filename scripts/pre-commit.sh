#!/bin/sh

echo ""
echo ""
echo "(Do you want to commit your works? pre-commit test start!}🐶"

lint-staged

git diff --cached --name-status | while read x file; do
  for disallowed in package-lock.json; do
    if [ "$disallowed" == "$file" ]; then
      echo "ERROR: This commit contains disallowed file: \"${disallowed}\""
      exit 1
    fi
  done
done || exit $?
