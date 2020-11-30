#!/bin/bash
echo ""
echo "(more check before push}🐶"

echo "push to: $1"

if [ $1 = "upstream" ]; then
  echo "upstream에 push 하지 마시오!👿"
  exit 1
fi
