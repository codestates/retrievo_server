#!/bin/bash
echo ""
echo "(more check before push}🐶"

echo "1: $1"

BRANCH_NAME=$(git symbolic-ref --short HEAD)
# BRANCH_NAME="${BRANCH_NAME##*/}"

JIRA_ID=$(echo $BRANCH_NAME)
echo "JIRA_ID: $JIRA_ID"

if [ $1 = "upstream" ]; then
  echo "upstream에 push 하지 마시오!👿"
  exit 1
fi
