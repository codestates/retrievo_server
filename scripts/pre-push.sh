#!/bin/bash
echo "(more check before push}🐶"

ARR_GIT_STDIN=($(echo $HUSKY_GIT_STDIN))

echo "1: ${ARR_GIT_STDIN[0]}"
echo "2: ${ARR_GIT_STDIN[1]}"
echo "3: ${ARR_GIT_STDIN[2]}"
echo "4: ${ARR_GIT_STDIN[3]}"

BRANCH_NAME=$(git symbolic-ref --short HEAD)
BRANCH_NAME="${BRANCH_NAME##*/}"

JIRA_ID=$(echo $BRANCH_NAME)

if [ $1 = "upstream" ]; then
  echo "upstream에 push 하지 마시오!👿"
  exit 1
fi
