#!/bin/bash
echo "(more check before push}🐶"

echo "1: $1"

BRANCH_NAME=$(git symbolic-ref --short HEAD)
BRANCH_NAME="${BRANCH_NAME##*/}"

JIRA_ID=$(echo $BRANCH_NAME)

echo "BRANCH_NAME: $BRANCH_NAME"
echo "JIRA_ID: $JIRA_ID"
echo "commit: $1"

if [ $JIRA_ID = "master" ]; then
  echo "master에 push 하지 마시오!👿"
  exit 1
fi

if [ $JIRA_ID = "main" ]; then
  echo "main에 push 하지 마시오!👿"
  exit 1
fi
