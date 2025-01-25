#!/bin/bash

# 测试命令：./02.shell参数传递.sh 100 200

echo "$@"
echo "$*"
echo "$#"
echo "$$"
echo "$-"

for i in "$*"; do
  echo $i
done
