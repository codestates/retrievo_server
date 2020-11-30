#!/bin/bash
echo "(ok! then commit msg styling start}🐶"

BRANCH_NAME=$(git symbolic-ref --short HEAD)
BRANCH_NAME="${BRANCH_NAME##*/}"

JIRA_ID=$(echo $BRANCH_NAME)

if [ $JIRA_ID = "master" ]; then
  echo "master에 commit 하지 마시오!👿"
  exit 1
fi

if [ $JIRA_ID = "dev" ]; then
  echo "dev에 commit 하지 마시오!🤦‍♀️"
  exit 1
fi

if [ -n $JIRA_ID ]; then
  sed -i.bak "1s/^/[$JIRA_ID] | /" $1
fi
