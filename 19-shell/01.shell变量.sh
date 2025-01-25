#!/bin/bash

# 预留字段不能做为变量名，可使用help命令查看预留字段
# 使用 $变量名 或 ${变量名} 获取变量
# 关于'', "", ``的使用区别
username='coco'
age=18
echo $username
echo ${age}
echo "姓名：${username}，年龄：${age}"
echo "---------------------"


# for file in `ls ./`;do
#   echo ${file}
# done


# 只读变量readonly，删除变量unset
readonly username
username='lucy'
echo $username

unset age
echo $age
echo "---------------------"


# 获取字符串长度${#变量名}，提取子字符串${变量名:startIndex:endIndex}，查找子字体串
str1='hello world'
echo ${#str1}
echo ${str1:0:5}
echo `expr index "${str1}" dw`
echo "----------------------"


# 2. 数组,shell只支持一维数组
arr1=(100 200 300)
arr2=(
  '张三'
  '宋小明'
)
echo ${arr1[@]}
echo "${arr2[@]}"

length1=${#arr1[@]}
# length1=${#arr1[*]}
echo $length1

length2=${#arr2[0]}
echo $length2


# 2-2. 关联数组
declare -A site=(
  ['google']="www.google.com"
  ['baidu']="www.baidu.com"
  ['hao123']="www.hao123.com"
)
echo "${site[@]}"           #www.google.com www.hao123.com www.baidu.com
echo "${site['baidu']}"     #www.baidu.com
echo "${site["baidu"]}"     #www.baidu.com
echo "${!site[*]}"          #google hao123 baidu
echo "${#site[*]}"          #3
