<template><div><h1 id="递归和回溯法" tabindex="-1"><a class="header-anchor" href="#递归和回溯法" aria-hidden="true">#</a> 递归和回溯法</h1>
<ul>
<li><RouterLink to="/docs/coding/cs-courses/data-structures-and-algorithms/jianzhi-offer/jianzhi-offer.html">返回上层目录</RouterLink></li>
<li><a href="#%E9%80%92%E5%BD%92">递归</a>
<ul>
<li><a href="#%E5%89%91%E6%8C%87offer10%EF%BC%9A%E8%A3%B4%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97">剑指offer10：裴波那契数列</a></li>
<li><a href="#%E5%89%91%E6%8C%87offer10-1%EF%BC%9A%E9%9D%92%E8%9B%99%E8%B7%B3%E5%8F%B0%E9%98%B6">剑指offer10-1：青蛙跳台阶</a></li>
<li><a href="#%E5%89%91%E6%8C%87offer10-3%EF%BC%9A%E7%9F%A9%E5%BD%A2%E8%A6%86%E7%9B%96">剑指offer10-3：矩形覆盖</a></li>
</ul>
</li>
<li><a href="#%E5%9B%9E%E6%BA%AF%E6%B3%95">回溯法</a>
<ul>
<li><a href="#%E5%89%91%E6%8C%87offer12%EF%BC%9A%E7%9F%A9%E9%98%B5%E4%B8%AD%E7%9A%84%E8%B7%AF%E5%BE%84">剑指offer12：矩阵中的路径</a></li>
<li><a href="#%E5%89%91%E6%8C%87offer13%EF%BC%9A%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9A%84%E8%BF%90%E5%8A%A8%E8%8C%83%E5%9B%B4">剑指offer13：机器人的运动范围</a></li>
</ul>
</li>
</ul>
<h1 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h1>
<h2 id="剑指offer10-裴波那契数列" tabindex="-1"><a class="header-anchor" href="#剑指offer10-裴波那契数列" aria-hidden="true">#</a> 剑指offer10：裴波那契数列</h2>
<blockquote>
<p>题目：大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项。（n&lt;=39）</p>
<p>斐波那契数列公式为：</p>
<p><img src="@source/docs/coding/cs-courses/data-structures-and-algorithms/jianzhi-offer/recursion-and-back-tracking/pic/recursion-10.jpg" alt="recursion-10"></p>
</blockquote>
<p>这道题递归很好写，但是存在很严重的效率问题。我们以求解f(10)为例类分析递归的求解过程。想求f(10)，需要先求得f(9)和f(8)。同样，想求得f(9)，需要先求的f(8)和f(7)....我们可以用树形结构来表示这种依赖关系，如下图所示：</p>
<p><img src="@source/docs/coding/cs-courses/data-structures-and-algorithms/jianzhi-offer/recursion-and-back-tracking/pic/recursion-10-2.jpg" alt="recursion-10-2"></p>
<p>我们不难发现在这棵树中有很多结点是重复的，而且重复的结点数会随着n的增加而急剧增加，这意味计算量会随着n的增加而急剧增大。事实上，递归方法计算的时间复杂度是以n的指数的方式递增的。</p>
<p>所以，使用简单的循环方法来实现。</p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    int Fibonacci(int n) {
        if(n &lt;= 0)
            return 0;
        if(n == 1)
            return 1;
        int first = 0, second = 1, third = 0;
        for (int i = 2; i &lt;= n; i++) {
            third = first + second;
            first = second;
            second = third;
        }
        return third;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cuijiahua.com/blog/2017/11/basis_7.html" target="_blank" rel="noopener noreferrer">详情<ExternalLinkIcon/></a>，<a href="https://www.nowcoder.com/practice/c6c7742f5ba7442aada113136ddea0c3?tpId=13&amp;tqId=11160&amp;tPage=1&amp;rp=1&amp;ru=%2Fta%2Fcoding-interviews&amp;qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking" target="_blank" rel="noopener noreferrer">练习<ExternalLinkIcon/></a>。</p>
<h2 id="剑指offer10-1-青蛙跳台阶" tabindex="-1"><a class="header-anchor" href="#剑指offer10-1-青蛙跳台阶" aria-hidden="true">#</a> 剑指offer10-1：青蛙跳台阶</h2>
<blockquote>
<p>题目：一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。</p>
</blockquote>
<p>首先我们考虑最简单的情况。如果只有1级台阶，那么显然只一种跳法。如果有2级台阶，那就有两种跳法：一种是分两次跳，每次跳1级；另一种是一次跳2级。</p>
<p>接着，我们来讨论一般情况。我们把n级台阶时的跳法看成是n的函数，记为f(n)。当n&gt;2时，第一次跳的时候就有两种不同的选择：一是第一次只跳1级，此时跳法数目等于后面剩下的n-1级台阶的跳法数目，即为f(n-1)；另外一种选择是跳一次跳2级，此时跳法数目等于后面剩下的n-2级台阶的跳法数目，即为f(n-2)。因此n级台阶的不同跳法的总数f(n)=f(n-1)+f(n-2)。分析到这里，我们不难看出这实际上就是斐波那契数列了。</p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    int jumpFloor(int number) {
        if(number &lt;= 0){
            return 0;
        }
        else if(number &lt; 3){
            return number;
        }
        int first = 1, second = 2, third = 0;
        for(int i = 3; i &lt;= number; i++){
            third = first + second;
            first = second;
            second = third;
        }
        return third;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cuijiahua.com/blog/2017/11/basis_8.html" target="_blank" rel="noopener noreferrer">详情<ExternalLinkIcon/></a>，<a href="https://www.nowcoder.com/practice/8c82a5b80378478f9484d87d1c5f12a4?tpId=13&amp;tqId=11161&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking" target="_blank" rel="noopener noreferrer">练习<ExternalLinkIcon/></a>。</p>
<h2 id="剑指offer10-3-矩形覆盖" tabindex="-1"><a class="header-anchor" href="#剑指offer10-3-矩形覆盖" aria-hidden="true">#</a> 剑指offer10-3：矩形覆盖</h2>
<blockquote>
<p>题目：我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？</p>
</blockquote>
<p>以2x8的矩形为例。示意图如下：</p>
<p><img src="@source/docs/coding/cs-courses/data-structures-and-algorithms/jianzhi-offer/recursion-and-back-tracking/pic/recursion-10-3.jpg" alt="recursion-10-3"></p>
<p>我们先把2x8的覆盖方法记为f(8)。用第一个1x2小矩阵覆盖大矩形的最左边时有两个选择，竖着放或者横着放。当竖着放的时候，右边还剩下2x7的区域，这种情况下的覆盖方法记为f(7)。接下来考虑横着放的情况。当1x2的小矩形横着放在左上角的时候，左下角和横着放一个1x2的小矩形，而在右边还剩下2x6的区域，这种情况下的覆盖方法记为f(6)。因此f(8)=f(7)+f(6)。此时我们可以看出，这仍然是斐波那契数列。</p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    int rectCover(int number) {
		if(number &lt;= 2){
            return number;
        }
        int first = 1, second = 2, third = 0;
        for(int i = 3; i &lt;= number; i++){
            third = first + second;
            first = second;
            second = third;
        }
        return third;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cuijiahua.com/blog/2017/11/basis_10.html" target="_blank" rel="noopener noreferrer">详情<ExternalLinkIcon/></a>，<a href="https://www.nowcoder.com/practice/72a5a919508a4251859fb2cfb987a0e6?tpId=13&amp;tqId=11163&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking" target="_blank" rel="noopener noreferrer">练习<ExternalLinkIcon/></a>。</p>
<h1 id="回溯法" tabindex="-1"><a class="header-anchor" href="#回溯法" aria-hidden="true">#</a> 回溯法</h1>
<h2 id="剑指offer12-矩阵中的路径" tabindex="-1"><a class="header-anchor" href="#剑指offer12-矩阵中的路径" aria-hidden="true">#</a> 剑指offer12：矩阵中的路径</h2>
<blockquote>
<p>题目：请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。 例如在下面的3x4的矩阵中包含一条字符串&quot;bcced&quot;的路径（路径中的字母用斜体表示）。但是矩阵中不包含&quot;abcb&quot;路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。</p>
<p><img src="@source/docs/coding/cs-courses/data-structures-and-algorithms/jianzhi-offer/recursion-and-back-tracking/pic/back-tracking_12.png" alt="back-tracking_12"></p>
</blockquote>
<p>这是一个可以用回溯法解决的典型问题。</p>
<p>首先，遍历这个矩阵，我们很容易就能找到与字符串str中第一个字符相同的矩阵元素ch。然后遍历ch的上下左右四个字符，如果有和字符串str中下一个字符相同的，就把那个字符当作下一个字符（下一次遍历的起点），如果没有，就需要回退到上一个字符，然后重新遍历。为了避免路径重叠，需要一个辅助矩阵来记录路径情况。</p>
<p>下面代码中，当矩阵坐标为（row，col）的格子和路径字符串中下标为pathLength的字符一样时，从4个相邻的格子（row，col-1）、（row-1，col）、（row，col+1）以及（row+1，col）中去定位路径字符串中下标为pathLength+1的字符。</p>
<p>如果4个相邻的格子都没有匹配字符串中下标为pathLength+1的字符，表明当前路径字符串中下标为pathLength的字符在矩阵中的定位不正确，我们需要回到前一个字符串（pathLength-1），然后重新定位。</p>
<p>一直重复这个过程，直到路径字符串上所有字符都在矩阵中找到格式的位置（此时str[pathLength] == '\0'）。</p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    bool hasPath(char* matrix, int rows, int cols, char* str)
    {
        if(matrix == NULL || rows &lt; 1 || cols &lt; 1 || str == NULL){
            return false;
        }
        bool* visited = new bool[rows*cols];
        memset(visited, 0, rows*cols);
        int pathLength = 0;
        for(int row = 0; row &lt; rows; row++){
            for(int col = 0; col &lt; cols; col++){
                if(hasPathCore(matrix, rows, cols, row, col, str, pathLength, visited)){
                    delete[] visited;
                    return true;
                }
            }
        }
        delete[] visited;
        return false;
    }
private:
    bool hasPathCore(char* matrix, int rows, int cols, int row, int col, char* str, int&amp; pathLength, bool* visited){
        if(str[pathLength] == '\0'){
            return true;
        }
        bool hasPath = false;
        if(row &gt;= 0 &amp;&amp; row &lt; rows &amp;&amp; col &gt;= 0 &amp;&amp; col &lt; cols &amp;&amp; matrix[row*cols+col] == str[pathLength] &amp;&amp; !visited[row*cols+col]){
            ++pathLength;
            visited[row*cols+col] = true;
            hasPath = hasPathCore(matrix, rows, cols, row-1, col, str, pathLength, visited)
                || hasPathCore(matrix, rows, cols, row+1, col, str, pathLength, visited)
                || hasPathCore(matrix, rows, cols, row, col-1, str, pathLength, visited)
                || hasPathCore(matrix, rows, cols, row, col+1, str, pathLength, visited);
            if(!hasPath){
                --pathLength;
                visited[row*cols+col] = false;
            }
        }
        return hasPath;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cuijiahua.com/blog/2018/02/basis_65.html" target="_blank" rel="noopener noreferrer">详情<ExternalLinkIcon/></a>，<a href="https://www.nowcoder.com/practice/c61c6999eecb4b8f88a98f66b273a3cc?tpId=13&amp;tqId=11218&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking" target="_blank" rel="noopener noreferrer">练习<ExternalLinkIcon/></a>。</p>
<h2 id="剑指offer13-机器人的运动范围" tabindex="-1"><a class="header-anchor" href="#剑指offer13-机器人的运动范围" aria-hidden="true">#</a> 剑指offer13：机器人的运动范围</h2>
<blockquote>
<p>题目：地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？</p>
</blockquote>
<p>和上一道题十分相似，只不过这次的限制条件变成了坐标位数之和。对于求坐标位数之和，我们单独用一个函数实现，然后套入上一道题的代码中即可。</p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    int movingCount(int threshold, int rows, int cols)
    {
        int count = 0;
        if(threshold &lt; 1 || rows &lt; 1 || cols &lt; 1){
            return count;
        }
        bool* visited = new bool[rows*cols];
        memset(visited, 0, rows*cols);
        count = movingCountCore(threshold, rows, cols, 0, 0, visited);
        delete[] visited;
        return count;
    }
private:
    int movingCountCore(int threshold, int rows, int cols, int row, int col, bool* visited){
        int count = 0;
        if(row &gt;= 0 &amp;&amp; row &lt; rows &amp;&amp; col &gt;= 0 &amp;&amp; col &lt; cols &amp;&amp; getDigitSum(row)+getDigitSum(col) &lt;= threshold &amp;&amp; !visited[row*cols+col]){
            visited[row*cols+col] = true;
            count = 1 + movingCountCore(threshold, rows, cols, row+1, col, visited)
                + movingCountCore(threshold, rows, cols, row-1, col, visited)
                + movingCountCore(threshold, rows, cols, row, col+1, visited)
                + movingCountCore(threshold, rows, cols, row, col-1, visited);
        }
        return count;
    }
    int getDigitSum(int num){
        int sum = 0;
        while(num){
            sum += num % 10;
            num /= 10;
        }
        return sum;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cuijiahua.com/blog/2018/02/basis_66.html" target="_blank" rel="noopener noreferrer">详情<ExternalLinkIcon/></a>，<a href="https://www.nowcoder.com/practice/6e5207314b5241fb83f2329e89fdecc8?tpId=13&amp;tqId=11219&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking" target="_blank" rel="noopener noreferrer">练习<ExternalLinkIcon/></a>。</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://cuijiahua.com/blog/2018/02/basis_67.html" target="_blank" rel="noopener noreferrer">剑指Offer系列刷题笔记汇总<ExternalLinkIcon/></a></li>
</ul>
<p>本文参考此博客。</p>
</div></template>


