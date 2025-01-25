#!/bin/bash

# read 命令从标准输入中读取一行,并把输入行的每个字段的值指定给 shell 变量
read name
echo "$name It is a test"


# 换行\n, 不换行\c, -e开启转义
echo -e "OK! \n"
echo "It is a test"

echo -e "OK! \c"
echo "It is a test"


# 结果转出到文件
echo "It is a file" > myfile.txt


# 显示命令执行结果, ``
echo `date`



# 默认的 printf 不会像 echo 自动添加换行符，我们可以手动添加 \n
printf "Hello\nWorld\n"

# printf格式替代符，%s %c %d %f
printf "%-10s %-8s %-4s\n" 姓名 性别 体重kg 

# printf的转义序列，\a, \b, \c, \f, \n, \r, \t, \v, \\, \ddd, \0ddd
