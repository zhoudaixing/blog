---
title: 代码随想录
date: 2024-03-26
tags: [algorithm]
categories: [algorithm]
---
代码随想录习题总结
---

# 代码随想录

## Chapter 1 数组 Array *FINISH*

### 1. 二分查找

### 2. 移除元素

### 3. 有序数组的平方

**双指针**

时间复杂度 $O(n^2)$

`while (left < right)`

### 4. 长度最小的数组

**Sliding Window**

时间复杂度 $O(n)$

- `while (fast < n)`
- `for(let fast = 0; fast < n; fast++)`

### 5. 螺旋矩阵 Ⅱ

**Matrix** **Simulation**

时间复杂度 $O(n^2)$

注意边界条件双重循环

四个边界四个循环，外围套一层大循环

```javascript
while () {
  for(left to right)
  for(top to bottom)
  for(right to left)
  for(bottom to top)
    
}
```

另一种是以层数/圈数为循环，内部也是四个方向→↓←↑走一遍



## Chapter 2 链表 Linked List *FINISH*

### 2.1 移除链表元素

*Recursion*

`dummyHead` 虚拟头结点，可以避免处理删除头结点的情况

### 2.2 设计链表

```javascript
class ListNode {
  constructor(val, next) {
    this.val = val || 0
    this.next = next || null
  }
}

class LinkList {
    constructor() {
    this.size = 0
    this.head = null
    this.tail = null
  }
}
```

### 2.3 翻转链表

*Recursion*

tips:

如果先做计算后导致递归无法进行，可以先递归再做运算，相当于先获取了之后的条件，再来改变当前的条件

### 2.4 两两交换链表中的节点

*Recursion*

### 2.5 删除链表的倒数第 N 个节点

*Two Point*

### 2.6 环形链表 Ⅱ

*Two Point*



## Chapter 3 哈希表 Hash Table *FINISH*

### 3.1 有效的字母异位词

### 3.2 两个数组的交集

### 3.3 快乐数

遇到循环就可以考虑快慢指针/哈希表

### 3.4 两数之和

### 3.5 四数相加 Ⅱ

### 3.6 赎金信

---

*Two Point*

### 3.7 三数之和

### 3.8 四数之和



## Chapter 4 字符串 String *FINISH*

### 4.1 反转字符串

手写 `reverse()` ，双指针，交换可以使用数组赋值（？

### 4.2 反转字符串 Ⅱ

js 中 string 不能原地改变字符？

char[] 可以

### 4.3 替换数字（略过）

### 4.4 翻转字符串里的单词

库函数夸夸做

### 4.5 右旋转字符串 *todo！*

### 4.6 实现 `strStr()`

#KMP

### 4.7 重复的子字符串



## Chapter 5 双指针 Two Point



## Chapter 6 栈与队列 Stack & Queue *FINISH*

### 6.1 用栈实现队列

### 6.2 用队列实现栈

### 6.3 有效的括号

tips

存相反的括号，这样只用再匹配相不相同就行

### 6.4 删除字符串中的所有相邻重复项

### 6.5 逆波兰表达式求值

### 6.6 滑动窗口最大值

### 6.7 前 K 个高频元素

*Hash* *Priority Queue*



## Chapter 7 二叉树 Binary Tree

### 7.1 二叉树的递归 / 迭代遍历

1. 二叉树的前序遍历
2. 中序遍历
3. 后序遍历

### 7.2 二叉树的层序遍历

1. 二叉树的层序遍历
2. 二叉树的层次遍历 II
3. 二叉树的右视图
4. 二叉树的层平均值
5. N 叉树的层序遍历
6. 在每个树行中找最大值
7. 填充每个节点的下一个右侧节点指针
8. 填充每个节点的下一个右侧节点指针II
9. 二叉树的最大深度
10. 二叉树的最小深度

### 7.3 翻转二叉树

### 7.4 对称二叉树

### 7.5 完全二叉树的节点个数

### 7.6 平衡二叉树

### 7.7 二叉树的所有路径

### 7.8 左叶子之和

### 7.9 找树左下角的值

### 7.10 路径总和

### 7.11 从中序与后序遍历序列构造二叉树

### 7.12 最大二叉树

### 7.13 合并二叉树

### 7.14 二叉搜索树中的搜索

### 7.15 验证二叉搜索树

### 7.16 二叉搜索树的最小绝对差

### 7.17 二叉搜索树中的众数

BST 的 inorder traversal 是有顺序的，所有可以通过 pre 节点来实现统计

### 7.18 二叉树的最近公共祖先

*#Backtracking*

通过左右子树返回是否存在 `p` `q` 节点

### 7.19 二叉搜索树的最近公共祖先

一次遍历

### 7.20 二叉搜索树中的插入操作

7.21 删除二叉搜索树中的节点

7.22 修剪二叉搜索树

7.23 将有序数组转换为二叉搜索树

7.33 把二叉搜索树转换为累加树



## Chapter 8 回溯 Backtracking *FINISH*

看成树

去重：hash ？ used ？

同层去重就是 hash or sort 循环内

路径上去重就是 used 最外层

### 8.1 组合

### 8.2 组合总和 Ⅲ

### 8.3 电话号码的字母组合

### 8.4 组合总和

[39. Combination Sum](https://leetcode.cn/problems/combination-sum/description/)

*#DFS* *#Backtracking*

### 8.5 组合总和 II

[Combination Sum II](https://leetcode.cn/problems/combination-sum-ii/)

*#DFS* *#Backtracking* *#sort*

跳过同层的重复元素避免组合重复

### 8.6 分割回文串

[Palindrome Partitioning](https://leetcode.cn/problems/palindrome-partitioning/)

*#DFS* *#DP*

分割后递归判断是否为回文串

一直爆循环大概就是判断条件写错了。

If always time out or ...

It possible is wrong of judgment coditions ?

DP 可以预先求出 `dp[i][j]` 即 `s[i..j]` 是否为回文串

### 8.7 复原 IP 地址

[93. Restore IP Addresses](https://leetcode.cn/problems/restore-ip-addresses/)

*#DFS*

注意前导零转换为 `Number` 后会消失

### 8.8 子集

[78. Subsets](https://leetcode.cn/problems/subsets/)

*#DFS*

把遍历抽象成树的话，本题是收集所有的节点

### 8.9 子集 II

[90. Subsets II](https://leetcode.cn/problems/subsets-ii/)

*#DFS* *#Sort*

去重需要排序

### 8.10 非递减子序列

[491. Non-decreasing Subsequences](https://leetcode.cn/problems/non-decreasing-subsequences/)

*#DFS* *#Hash*

如果无法通过排序去重就考虑使用 hash

死循环超时考虑判断条件 写错参数？ `if` `while` 写错 `continue` `break` 写错

### 8.11 全排列

[46. Permutations](https://leetcode.cn/problems/permutations/)

*#DFS*

### 8.12 全排列 II]

[47. Permutations II](https://leetcode.cn/problems/permutations-ii/)

*#DFS* *#Hash*

### 8.13 重新安排行程 `TODO!`

需要对输入数据处理成表

### 8.14 N 皇后

使用检查而非涂棋盘可以减少一次遍历棋盘的过程

终止条件 = 找叶子节点

### 8.15 解数独

[37. Sudoku Solver](https://leetcode.cn/problems/sudoku-solver/)

`DFS(): => Boolean ` 找到结果直接返回 `true` 即可保留状态




## Chapter 9 贪心 Greedy *FINISH*

### 9.1 分发饼干

[455. Assign Cookies](https://leetcode.cn/problems/assign-cookies/)

### 9.2 摆动序列

画图 只需要考虑端点和极值 记录前一个发生了改变的符号

### 9.3 最大子序列

[53. Maximum Subarray](https://leetcode.cn/problems/maximum-subarray/)

#Greedy #DP

`sum < 0` 就丢弃，大于 0 就可以使后面更大所以不用丢弃，记录最大的状态就可以

### 9.4 买卖股票的最佳时机 II

对正的差值求和

### 9.5 跳跃游戏

[55. Jump Game](https://leetcode.cn/problems/jump-game/)

记录最大可以到达的边界，遍历过去

### 9.6 跳跃游戏 II

[45. Jump Game II](https://leetcode.cn/problems/jump-game-ii/)

### 9.7 K 次取反后最大化的数组和

[1005. Maximize Sum Of Array After K Negations](https://leetcode.cn/problems/maximize-sum-of-array-after-k-negations/)

*#Greedy* *#Sort*

按绝对值从大到小排序 改变元素正负 最后再求和 没必要在线处理

### 9.8 加油站

[134. Gas Station](https://leetcode.cn/problems/gas-station/)

#Greedy

如果 `totalGas > totalCost` 那么一定可以走完全程，只是起点哪里的问题，如果不够，就走不完全程。

`curGas < curCost` 即上一段路程一定会卡点，得从 `i + 1` 开始。

### 9.10 分发糖果

[135. Candy](https://leetcode.cn/problems/candy/)

左右两轮遍历，`max(dp[i], dp[i - 1] + 1)`

### 9.11 柠檬水找零

### 9.12 根据身高重建队列

[406. Queue Reconstruction by Height](https://leetcode.cn/problems/queue-reconstruction-by-height/)

### 9.13 用最少数量的箭引爆气球

[452. Minimum Number of Arrows to Burst Balloons](https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/)

*#Sort* *#Greddy*

对气球进行排序，考虑上个气球的右边界和当前气球的左边界是否有重叠，箭贪心选择为重叠部分的右边界

### 9.14 无重叠区间

[435. Non-overlapping Intervals](https://leetcode.cn/problems/non-overlapping-intervals/)

最大边界应取最小值

### 9.15 划分字母区间

[763. Partition Labels](https://leetcode.cn/problems/partition-labels/)

`Array.fill([])` 是赋予同一个数组的引用

`sort((a, b))` 不会对所有元素使用 `a` 的判断条件，`a`、 `b` 都需要写条件

### 9.16 合并区间

[56. Merge Intervals](https://leetcode.cn/problems/merge-intervals/)

只用对 `intervals[i][0]` 排序就好

### 9.17 单调递增的数字

从后往前处理

### 9.18 监控二叉树

用不同的数字表示多个状态，遍历二叉树，每个节点取决其子节点的状态



## Chapter 10 动态规划 Dynamic Programming

### 10.1 斐波那契数列

### 10.2 爬楼梯

### 10.3 使用最小的花费爬楼梯

### 10.4 不同路径

### 10.5 不同路径 Ⅱ

### ~~10.6 整数拆分~~

### ~~10.7 不同的二叉搜索树~~

### 10.8 分割等和的子集

### 10.9 最后一块石头的重量 Ⅱ

### 10.10 目标和

### 10.11 一和零

[474. Ones and Zeroes](https://leetcode.cn/problems/ones-and-zeroes/)

两个背包 分别装 0 和 1 对应 m 和 n

value 就是 1 每放入一个 subset 长度 + 1 题目求最长

二维（三维？）DP

### 10.12 零钱兑换 II

[518. Coin Change II](https://leetcode.cn/problems/coin-change-ii/)

完全背包 累加

`dp[j] += dp[j - weight[i]]`

`dp[0] = 1`

### 10.13 组合总和 4

排列 外层循环为 bag

这样 `[1, 3]` `[3, 1]` 都会被枚举 然后累加

组合 外层循环为 item

`[1, 3]` 3 一定出现在 1后面 所以 `[3, 1]` 不会被枚举

### 10.14 爬楼梯 进阶版

### 10.15 零钱兑换

初始化条件:

1. `dp[0]` 是 `0` 还是 `1`

2. `dp[]` 数组别的是 `0` 还是 `MAXINT`

求累加 大概率是 1 需要考虑循环顺序

求最小大概率是 0 maxint 不考虑循环顺序

### 10.16 完全平方数

[279. Perfect Squares](https://leetcode.cn/problems/perfect-squares/)

不用随便考虑优化

$xN$ 空间都是 $O(N)$ 为 系数优化不值得 AC 就行 面试时可以口述

需要求最小时，初始化为 `Number.MAX_SAFE_INTEGER` 是个好选择

### 10.17 单词拆分

### 10.18 打家劫舍

### 10.19 打家劫舍 2

循环 dp 去头去尾 dp 两次

### 10.20 打家劫舍 3

树形 dp

记忆化搜索 存下子节点的 val

树形 dp [0, 1] 0 不选的最大 val 1 选择当个节点的最大 val 每个节点只用遍历一边

### 10.21 买卖股票的最佳时机

*#Greedy*

### 10.22 买卖股票的最佳时机 II

### 10.23 买卖股票的最佳时机 III

[123. Best Time to Buy and Sell Stock III](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/)

股票只有 5 种状态

0：没有操作过

1：迄今为止买过一次

2：迄今为止卖过一次

3：迄今为止买过两次

4：迄今为止卖过两次

用 `dp[day][0~5]` 表示

`dp[i][0] = dp[i - 1][0]`

`dp[i][1] = dp`

### 10.24 买卖股票的最佳时机 IV

[188. Best Time to Buy and Sell Stock IV](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/)

`k * 2` 种状态

### 10.25 最佳买卖股票时机含冷冻期

[309. Best Time to Buy and Sell Stock with Cooldown](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/)

持有、今天卖出、冷静，三种状态

### 10.26 买卖股票的最佳时机含手续费

[714. Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)

持有、未持有 两种状态

### 10.27 最长上升子序列

### 10.28 最长连续递增序列

### 10.29 最长重复子数组

[718. Maximum Length of Repeated Subarray](https://leetcode.cn/problems/maximum-length-of-repeated-subarray/)

`dp[i][j]` 表示 以下标 `i - 1` 结束的数组A 和 以下标 `j - 1` 结束的数组B 最长重复的长度

```javascript
if (nums1[i - 1] === nums2[j - 1]) {
  dp[i][j] = dp[i - 1][j - 1] + 1
}
```

### 10.30 最长公共子序列

[1143. Longest Common Subsequence](https://leetcode.cn/problems/longest-common-subsequence/)

`dp` 含义同上

但是如果字母不同时 `dp[i][j] = max(dp[i - 1][j], d[i][j - 1])`

### 10.31 不相交的线

[1035. Uncrossed Lines](https://leetcode.cn/problems/uncrossed-lines/)

内核同上

### 10.31 最大子序和

### 10.32 判断子序列

### 10.33 不同的子序列

`dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]` 当 `s[i] == t[j]` 时

在 t 中找 s

初始化 `dp[i][0]` 为 `1`

### 10.34 两个字符串的删除操作

### 10.35 编辑距离

增 word1 = 删 word2

`word1[i] != word2[j]` 时 `dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1`

### 10.36 回文子串

中心拓展法 枚举中心

### 10.37 最长回文子序列

`dp[i][j]` 代表以 `i` 和 `j` 为下标的字符串中最长的回文子序列长度

`dp[i + 1][j - 1]` -> `dp[i][j]`

## Chapter 11 单调栈



## Chapter 12 图 Graph

### 12.1 所有可能的路径

*#DFS*

### 12.2 岛屿数量

*#BFS*

### 12.3 岛屿的最大面积

[695. Max Area of Island](https://leetcode.cn/problems/max-area-of-island/)

*#BFS*

### 12.4 飞地的数量

[1020. Number of Enclaves](https://leetcode.cn/problems/number-of-enclaves/)

*#BFS*

### 12.5 被围绕的区域

[130. Surrounded Regions](https://leetcode.cn/problems/surrounded-regions/)

### 12.6 太平洋大西洋水流问题

[417. Pacific Atlantic Water Flow](https://leetcode.cn/problems/pacific-atlantic-water-flow/)

### 12.7 最大人工岛 ！！TODO！！

[827. Making A Large Island](https://leetcode.cn/problems/making-a-large-island/)

TLE

### 12.8 单词接龙

[127. Word Ladder](https://leetcode.cn/problems/word-ladder/)

*#BFS*

判断相邻 逐位遍历 26 个字母

`String.fromCharCode()`

`'a'.chatCodeAt()`

### 12.9 钥匙和房间

### 12.10 岛屿的周长

两层 for 循环，一次遍历

### 12.11 寻找图中是否存在路径

*#Union Find*

### 12.12 冗余连接

*#Union Find*
