#!/bin/bash

# 数值测试
a=100
b=200
if test $[a] -eq $[b]
then
  echo "两个数相等！"
else
  echo "两个数不相等！"
fi

result=$[a+b]
echo $result


# 字符串测试
str1="hello"
str2="world"
if test $a = $b
then
  echo "两个字符串相等！"
else
  echo "两个字符串不相等！"
fi


# 文件测试
if test -e ./bash
then
  echo '文件已存在!'
else
  echo '文件不存在!'
fi