#!/bin/bash

a=10
b=20
# 1. 算术运算符, expr, 赋值=, 判断相等==, 判断不相等!=
val=`expr $a + $b`
echo $val

val=`expr $a \* $b`
echo $val

# a=$b
# [ $a == $b ]
# [ $a != $b ]


# 2. 关系运算符, -eq, -ne, -gt, -lt, -ge, -le
# [ $a -eq $b ]
# [ $a -ne $b ]
# [ $a -gt $b ]
# [ $a -lt $b ]
# [ $a -ge $b ]
# [ $a -le $b ]


# 3. 布尔运算符, !, -o, -a
# [ ! false ]
# [ $a -lt 20 -o $b -gt 100 ]
# [ $a -lt 20 -a $b -gt 100 ]



# 4. 逻辑运算符, &&, ||
# [[ $a -lt 100 && $b -gt 100 ]]
# [[ $a -lt 100 || $b -gt 100 ]]


# 5. 字符串运算符, =, !=, -z, -n, $


# 6. 文件测试运算符, 用于检测 Unix 文件的各种属性。
# [ -b $file ]
# [ -c $file ]
# [ -d $file ]
# [ -f $file ]
# [ -g $file ]
# [ -k $file ]
# [ -p $file ]
# [ -u $file ]
# [ -r $file ]
# [ -w $file ]
# [ -x $file ]
# [ -s $file ]
# [ -e $file ]
