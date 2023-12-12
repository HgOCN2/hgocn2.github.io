<template><div><h1 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h1>
<ul>
<li><RouterLink to="/docs/machine-learning/coding/cs-courses/data-structures-and-algorithms/jianzhi-offer/jianzhi-offer.html">返回上层目录</RouterLink></li>
<li><a href="#%E5%89%91%E6%8C%87offer5%EF%BC%9A%E6%9B%BF%E6%8D%A2%E7%A9%BA%E6%A0%BC">剑指offer5：替换空格</a></li>
<li><a href="#%E5%89%91%E6%8C%87offer38%EF%BC%9A%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%8E%92%E5%88%97">剑指offer38：字符串的排列</a></li>
<li><a href="#%E5%89%91%E6%8C%87offer50%EF%BC%9A%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%AA%E5%87%BA%E7%8E%B0%E4%B8%80%E6%AC%A1%E7%9A%84%E5%AD%97%E7%AC%A6">剑指offer50：第一个只出现一次的字符</a></li>
<li><a href="#%E5%89%91%E6%8C%87offer58-1%EF%BC%9A%E7%BF%BB%E8%BD%AC%E5%8D%95%E8%AF%8D%E9%A1%BA%E5%BA%8F">剑指offer58-1：翻转单词顺序</a></li>
<li><a href="#%E5%89%91%E6%8C%87offer58-2%EF%BC%9A%E5%B7%A6%E6%97%8B%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2">剑指offer58-2：左旋转字符串</a></li>
<li><a href="#%E5%89%91%E6%8C%87offer67%EF%BC%9A%E6%8A%8A%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%BD%AC%E6%8D%A2%E6%88%90%E6%95%B4%E6%95%B0">剑指offer67：把字符串转换成整数</a></li>
<li><a href="#%E5%89%91%E6%8C%87offer19%EF%BC%9A%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D">剑指offer19：正则表达式匹配</a></li>
<li><a href="#%E5%89%91%E6%8C%87offer20%EF%BC%9A%E8%A1%A8%E7%A4%BA%E6%95%B0%E5%80%BC%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2">剑指offer20：表示数值的字符串</a></li>
</ul>
<h1 id="剑指offer5-替换空格" tabindex="-1"><a class="header-anchor" href="#剑指offer5-替换空格" aria-hidden="true">#</a> 剑指offer5：替换空格</h1>
<blockquote>
<p>题目：请实现一个函数，将一个字符串中的空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。</p>
</blockquote>
<p>最简单的方法就是从头到尾遍历，但是时间复杂度为O(n^2)。</p>
<p>本文采用一种时间复杂度为O(n)的方法。</p>
<p>我们可以先遍历一次字符串，这样就可以统计出字符串空格的总数，并可以由此计算出替换之后的字符串的总长度。每替换一个空格，长度增加2，因此替换以后字符串的长度等于原来的长度加上2乘以空格数目。以&quot;We are happy&quot;为例，&quot;We are happy&quot;这个字符串的长度为14（包括结尾符号&quot;\n&quot;），里面有两个空格，因此替换之后字符串的长度是18。</p>
<p>我们从字符串的尾部开始复制和替换。首先准备两个指针，P1和P2，P1指向原始字符串的末尾，而P2指向替换之后的字符串的末尾。接下来我们向前移动指针P1，逐个把它指向的字符复制到P2指向的位置，直到碰到第一个空格为止。碰到第一个空格之后，把P1向前移动1格，在P2之前插入字符串&quot;%20&quot;。由于&quot;%20&quot;的长度为3，同时也要把P2向前移动3格。</p>
<p>移动示意图：</p>
<p><img src="@source/docs/machine-learning/coding/cs-courses/data-structures-and-algorithms/jianzhi-offer/string/pic/string-5.jpg" alt="string-5"></p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    void replaceSpace(char *str,int length) {
        int i = 0;
        int numSpace =0;
        while(str[i] != '\0')
        {
            if(str[i]==' ')
                numSpace++;
            ++i;
        }
        int newLen = i+numSpace*2;
        for(int j=i;j&gt;=0,newLen&gt;=0;)
        {
            if(str[j]==' ')
                {
                str[newLen--] = '0';
                str[newLen--] = '2';
                str[newLen--] = '%';
            }
            else
                str[newLen--] = str[j];
            j--;
        }
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cuijiahua.com/blog/2017/11/basis_2.html" target="_blank" rel="noopener noreferrer">详情<ExternalLinkIcon/></a>，<a href="https://www.nowcoder.com/practice/4060ac7e3e404ad1a894ef3e17650423?tpId=13&amp;tqId=11155&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking" target="_blank" rel="noopener noreferrer">练习<ExternalLinkIcon/></a>。</p>
<h1 id="剑指offer38-字符串的排列" tabindex="-1"><a class="header-anchor" href="#剑指offer38-字符串的排列" aria-hidden="true">#</a> 剑指offer38：字符串的排列</h1>
<blockquote>
<p>题目：输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc，则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。</p>
</blockquote>
<p>输入一个字符串,长度不超过9(可能有字符重复)，字符只包括大小写字母。</p>
<p>我们求整个字符串的排列，可以看成两步：首先求所有可能出现在第一个位置的字符，即把第一个字符和后面所有的字符交换。如下图所示：</p>
<p><img src="@source/docs/machine-learning/coding/cs-courses/data-structures-and-algorithms/jianzhi-offer/string/pic/string-38.jpg" alt="string-38"></p>
<p>上图就是分别把第一个字符a和后面的b、c等字符交换的情形。首先固定第一个字符，求后面所有字符的排列。这个时候我们仍把后面的所有字符分为两部分：后面的字符的第一个字符，以及这个字符之后的所有字符。然后把第一个字符逐一和它后面的字符交换。</p>
<p>这个思路，是典型的递归思路：</p>
<p><img src="@source/docs/machine-learning/coding/cs-courses/data-structures-and-algorithms/jianzhi-offer/string/pic/string-38-2.png" alt="string-38-2"></p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    vector&lt;string&gt; Permutation(string str) {
        //判断输入
        if(str.length() == 0){
            return result;
        }
        PermutationCore(str, 0);
        //对结果进行排序
        sort(result.begin(), result.end());
        return result;
    }
    
private:
    void PermutationCore(string str, int begin){
        //递归结束的条件：第一位和最后一位交换完成
        if(begin == str.length()){
            result.push_back(str);
            return;
        }
        for(int i = begin; i &lt; str.length(); i++){
            //如果字符串相同，则不交换
            if(i != begin &amp;&amp; str[i] == str[begin]){
                continue;
            }
            //位置交换
            swap(str[begin], str[i]);
            //递归调用，前面begin+1的位置不变，后面的字符串全排列
            PermutationCore(str, begin + 1);
            // 位置应该再换回来，虽然不加这句也对，但是我觉得还是要加上
            swap(str[begin], str[i]);
        }
    }
    vector&lt;string&gt; result;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cuijiahua.com/blog/2017/12/basis_27.html" target="_blank" rel="noopener noreferrer">详情<ExternalLinkIcon/></a>，<a href="https://www.nowcoder.com/practice/fe6b651b66ae47d7acce78ffdd9a96c7?tpId=13&amp;tqId=11180&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking" target="_blank" rel="noopener noreferrer">练习<ExternalLinkIcon/></a>。</p>
<h1 id="剑指offer50-第一个只出现一次的字符" tabindex="-1"><a class="header-anchor" href="#剑指offer50-第一个只出现一次的字符" aria-hidden="true">#</a> 剑指offer50：第一个只出现一次的字符</h1>
<blockquote>
<p>题目：在一个字符串(1&lt;=字符串长度&lt;=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置。</p>
</blockquote>
<p>建立一个哈希表，第一次扫描的时候，统计每个字符的出现次数。第二次扫描的时候，如果该字符出现的次数为1，则返回这个字符的位置。</p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    int FirstNotRepeatingChar(string str) {
        int length = str.size();
        if(length == 0){
            return -1;
        }
        map&lt;char, int&gt; item;
        for(int i = 0; i &lt; length; i++){
            item[str[i]]++;
        }
        for(int i = 0; i &lt; length; i++){
            if(item[str[i]] == 1){
                return i;
            }
        }
        return -1;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cuijiahua.com/blog/2018/01/basis_34.html" target="_blank" rel="noopener noreferrer">详情<ExternalLinkIcon/></a>，<a href="https://www.nowcoder.com/practice/1c82e8cf713b4bbeb2a5b31cf5b0417c?tpId=13&amp;tqId=11187&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking" target="_blank" rel="noopener noreferrer">练习<ExternalLinkIcon/></a>。</p>
<h1 id="剑指offer58-1-翻转单词顺序" tabindex="-1"><a class="header-anchor" href="#剑指offer58-1-翻转单词顺序" aria-hidden="true">#</a> 剑指offer58-1：翻转单词顺序</h1>
<blockquote>
<p>题目：牛客最近来了一个新员工Fish，每天早晨总是会拿着一本英文杂志，写些句子在本子上。同事Cat对Fish写的内容颇感兴趣，有一天他向Fish借来翻看，但却读不懂它的意思。例如，“student. a am I”。后来才意识到，这家伙原来把句子单词的顺序翻转了，正确的句子应该是“I am a student.”。Cat对一一的翻转这些单词顺序可不在行，你能帮助他么？</p>
</blockquote>
<p>观察字符串变化规律，你会发现这道题很简单。只需要对每个单词做翻转，然后再整体做翻转就得到了正确的结果。</p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    string ReverseSentence(string str) {
        string result = str;
        int length = result.size();
        if(length == 0){
            return &quot;&quot;;
        }
        // 追加一个空格，作为反转标志位
        result += ' ';
        int mark = 0;
        // 根据空格，反转所有单词
        for(int i = 0; i &lt; length + 1; i++){
            if(result[i] == ' '){
                Reverse(result, mark, i - 1);
                mark = i + 1;
            }
        }
        // 去掉添加的空格
        result = result.substr(0, length);
        // 整体反转
        Reverse(result, 0, length - 1);
        
        return result;
    }
private:
    void Reverse(string &amp;str, int begin, int end){
        while(begin &lt; end){
            swap(str[begin++], str[end--]);
        }
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cuijiahua.com/blog/2018/01/basis_44.html" target="_blank" rel="noopener noreferrer">详情<ExternalLinkIcon/></a>，<a href="https://www.nowcoder.com/practice/3194a4f4cf814f63919d0790578d51f3?tpId=13&amp;tqId=11197&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking" target="_blank" rel="noopener noreferrer">练习<ExternalLinkIcon/></a>。</p>
<h1 id="剑指offer58-2-左旋转字符串" tabindex="-1"><a class="header-anchor" href="#剑指offer58-2-左旋转字符串" aria-hidden="true">#</a> 剑指offer58-2：左旋转字符串</h1>
<blockquote>
<p>题目：输入字符串&quot;abcdefg&quot;和数字2，该函数将返回左旋转2位得到的结果&quot;cdefgab&quot;</p>
</blockquote>
<p>第一步：翻转字符串“ab”，得到&quot;ba&quot;；</p>
<p>第二步：翻转字符串&quot;cdefg&quot;，得到&quot;gfedc&quot;；</p>
<p>第三步：翻转字符串&quot;bagfedc&quot;，得到&quot;cdefgab&quot;；</p>
<p>或者：</p>
<p>第一步：翻转整个字符串&quot;abcdefg&quot;,得到&quot;gfedcba&quot;</p>
<p>第二步：翻转字符串“gfedc”，得到&quot;cdefg&quot;</p>
<p>第三步：翻转字符串&quot;ba&quot;,得到&quot;ab&quot;</p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    string LeftRotateString(string str, int n) {
        string result = str;
        int length = result.size();
        if(length &lt; 0){
            return NULL;
        }
        if(0 &lt;= n &lt;= length){
            int pFirstBegin = 0, pFirstEnd = n - 1;
            int pSecondBegin = n, pSecondEnd = length - 1;
            ReverseString(result, pFirstBegin, pFirstEnd);
            ReverseString(result, pSecondBegin, pSecondEnd);
            ReverseString(result, pFirstBegin, pSecondEnd);
        }
        return result;
    }
private:
    void ReverseString(string &amp;str, int begin, int end){
        while(begin &lt; end){
            swap(str[begin++], str[end--]);
        }
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cuijiahua.com/blog/2018/01/basis_43.html" target="_blank" rel="noopener noreferrer">详情<ExternalLinkIcon/></a>，<a href="https://www.nowcoder.com/practice/12d959b108cb42b1ab72cef4d36af5ec?tpId=13&amp;tqId=11196&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking" target="_blank" rel="noopener noreferrer">练习<ExternalLinkIcon/></a>。</p>
<h1 id="剑指offer67-把字符串转换成整数" tabindex="-1"><a class="header-anchor" href="#剑指offer67-把字符串转换成整数" aria-hidden="true">#</a> 剑指offer67：把字符串转换成整数</h1>
<blockquote>
<p>题目：将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数atoi。 数值为0或者字符串不是一个合法的数值则返回0。</p>
<p>输入一个字符串,包括数字字母符号,可以为空。如果是合法的数值表达则返回该数字，否则返回0</p>
<p>例如：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>+2147483647 =&gt; 2147483647
1a33 =&gt; 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<p>这道题要考虑全面，对异常值要做出处理。</p>
<p>对于这个题目，需要注意的要点有：</p>
<ul>
<li>指针是否为空指针以及字符串是否为空字符串；</li>
<li>字符串对于正负号的处理；</li>
<li>输入值是否为合法值，即小于等于'9'，大于等于'0'；</li>
<li>int为32位，需要判断是否溢出；</li>
<li>使用错误标志，区分合法值0和非法值0。</li>
</ul>
<p>代码中用两个函数来实现该功能，其中标志位g_nStatus用来表示是否为异常输出，minus标志位用来表示是否为负数。</p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    enum Status{kValid = 0, kInValid};
    int g_nStatus = kValid;
    int StrToInt(string str) {
        g_nStatus = kInValid;
        long long num = 0;
        const char* cstr = str.c_str();
        // 判断是否为指针和是否为空字符串
        if(cstr != NULL &amp;&amp; *cstr != '\0'){
            // 正负号标志位，默认是加号
            bool minus = false;
            if(*cstr == '+'){
                cstr++;
            }
            else if(*cstr == '-'){
                minus = true;
                cstr++;
            }
            if(*cstr != '\0'){
                num = StrToIntCore(cstr, minus);
            }
        }
        return (int)num;
    }
private:
    long long StrToIntCore(const char* cstr, bool minus){
        long long num = 0;
        while(*cstr != '\0'){
            // 判断是否是非法值
            if(*cstr &gt;= '0' &amp;&amp; *cstr &lt;= '9'){
                int flag = minus ? -1 : 1;
                num = num * 10 + flag * (*cstr - '0');
                // 判断是否溢出,32位
                if((!minus &amp;&amp; num &gt; 0x7fffffff) || (minus &amp;&amp; num &lt; (signed int)0x80000000)){
                    num = 0;
                    break;
                }
                cstr++;
            }
            else{
                num = 0;
                break;
            }
        }
        // 判断是否正常结束
        if(*cstr == '\0'){
            g_nStatus = kValid;
        }
        return num;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cuijiahua.com/blog/2018/01/basis_49.html" target="_blank" rel="noopener noreferrer">详情<ExternalLinkIcon/></a>，<a href="https://www.nowcoder.com/practice/1277c681251b4372bdef344468e4f26e?tpId=13&amp;tqId=11202&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking" target="_blank" rel="noopener noreferrer">练习<ExternalLinkIcon/></a>。</p>
<h1 id="剑指offer19-正则表达式匹配" tabindex="-1"><a class="header-anchor" href="#剑指offer19-正则表达式匹配" aria-hidden="true">#</a> 剑指offer19：正则表达式匹配</h1>
<blockquote>
<p>题目：请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串&quot;aaa&quot;与模式&quot;a.a&quot;和&quot;ab*ac*a&quot;匹配，但是与&quot;aa.a&quot;和&quot;ab*a&quot;均不匹配。</p>
</blockquote>
<p>这道题有些绕，需要好好思考下。</p>
<p>我们先来分析下如何匹配一个字符，现在只考虑字符'.'，不考虑'*'看一下：</p>
<p>如果字符串和模式串的当前字符相等，那么我们继续匹配它们的下一个字符；如果模式串中的字符是'.'，那么它可以匹配字符串中的任意字符，我们也可以继续匹配它们的下一个字符。</p>
<p>接下来，把字符'*'考虑进去，它可以匹配任意次的字符，当然出现0次也可以。</p>
<p>我们分两种情况来看：</p>
<ul>
<li>模式串的下一个字符不是'*'，也就是上面说的只有字符'.'的情况。</li>
</ul>
<p>如果字符串中的第一个字符和模式串中的第一个字符相匹配，那么字符串和模式串都向后移动一个字符，然后匹配剩余的字符串和模式串。如果字符串中的第一个字符和模式中的第一个字符不相匹配，则直接返回false。</p>
<ul>
<li>模式串的下一个字符是'*'，此时就要复杂一些。</li>
</ul>
<p>因为可能有多种不同的匹配方式。</p>
<p>选择一：无论字符串和模式串当前字符相不相等，我们都将模式串后移两个字符，相当于把模式串中的当前字符和'*'忽略掉，因为'*'可以匹配任意次的字符，所以出现0次也可以。</p>
<p>选择二：如果字符串和模式串当前字符相等，则字符串向后移动一个字符。而模式串此时有两个选择：</p>
<p>1、我们可以在模式串向后移动两个字符，继续匹配；</p>
<p>2、也可以保持模式串不变，这样相当于用字符'*'继续匹配字符串，也就是模式串中的字符'*'匹配字符串中的字符多个的情况。</p>
<p>用一张图表示如下：</p>
<p><img src="@source/docs/machine-learning/coding/cs-courses/data-structures-and-algorithms/jianzhi-offer/string/pic/string-19.png" alt="string-19"></p>
<p>如上图所示，当匹配进入状态2，并且字符串中的字符是'a'时，我们有两个选择：可以进入状态3（在模式串向后移动两个字符），也可以回到状态2（模式串保持不变）。</p>
<p>除此之外，还要注意对空指针的处理。</p>
<p>看下面的代码时可以用</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>aaaaa
aa<span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>作为例子来看。</p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    bool match(char* str, char* pattern)
    {
        // 指针为空，返回false
        if(str == NULL || pattern == NULL){
            return false;
        }
        return matchCore(str, pattern);
    }
private:
    bool matchCore(char* str, char* pattern){
        // 字符串和模式串都运行到了结尾，返回true
        if(*str == '\0' &amp;&amp; *pattern == '\0'){
            return true;
        }
        // 字符串没有到结尾，模式串到了，则返回false
        // 模式串没有到结尾，字符串到了，则根据后续判断进行，需要对'*'做处理
        if((*str != '\0' &amp;&amp; *pattern == '\0')){
            return false;
        }
        // 如果模式串的下一个字符是'*'，则进入状态机的匹配
        if(*(pattern + 1) == '*'){
            // 如果字符串和模式串相等，或者模式串是'.'，并且字符串没有到结尾，则继续匹配
            if(*str == *pattern || (*pattern == '.' &amp;&amp; *str != '\0')){
                // 进入下一个状态，就是匹配到了仅仅一个
                return matchCore(str + 1, pattern + 2) ||
                    // 保持当前状态，就是继续拿这个'*'去匹配
                    matchCore(str + 1, pattern) ||
                    // 跳过这个'*'
                    matchCore(str, pattern + 2); // 防止出现这个: a  a*a
            }
            // 如果字符串和模式串不相等，则跳过当前模式串的字符和'*'，进入新一轮的匹配
            else{
                // 跳过这个'*'
                return matchCore(str, pattern + 2);
            }
        }
        // 如果字符串和模式串相等，或者模式串是'.'，并且字符串没有到结尾，则继续匹配
        if(*str == *pattern || (*pattern == '.' &amp;&amp; *str != '\0')){
            return matchCore(str + 1, pattern + 1);
        }
        return false;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cuijiahua.com/blog/2018/01/basis_52.html" target="_blank" rel="noopener noreferrer">详情<ExternalLinkIcon/></a>，<a href="https://www.nowcoder.com/practice/45327ae22b7b413ea21df13ee7d6429c?tpId=13&amp;tqId=11205&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking" target="_blank" rel="noopener noreferrer">练习<ExternalLinkIcon/></a>。</p>
<h1 id="剑指offer20-表示数值的字符串" tabindex="-1"><a class="header-anchor" href="#剑指offer20-表示数值的字符串" aria-hidden="true">#</a> 剑指offer20：表示数值的字符串</h1>
<blockquote>
<p>题目：请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串&quot;+100&quot;,&quot;5e2&quot;,&quot;-123&quot;,&quot;3.1416&quot;和&quot;-1E-16&quot;都表示数值。 但是&quot;12e&quot;,&quot;1a3.14&quot;,&quot;1.2.3&quot;,&quot;+-5&quot;和&quot;12e+4.3&quot;都不是。</p>
</blockquote>
<p>这道题还是比较简单的。表示数值的字符串遵循如下模式：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>sign<span class="token punctuation">]</span>integral<span class="token operator">-</span>digits<span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">[</span>fractional<span class="token operator">-</span>digits<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">[</span>e<span class="token operator">|</span><span class="token constant">E</span><span class="token punctuation">[</span>sign<span class="token punctuation">]</span>exponential<span class="token operator">-</span>digits<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，<code v-pre>[</code>和<code v-pre>]</code>之间的为可有可无的部分。</p>
<p>在数值之前可能有一个表示正负的<code v-pre>+</code>或者<code v-pre>-</code>。接下来是若干个0到9的数位表示数值的整数部分（在某些小数里可能没有数值的整数部分）。如果数值是一个小数，那么在小数后面可能会有若干个0到9的数位表示数值的小数部分。如果数值用科学记数法表示，接下来是一个<code v-pre>e</code>或者<code v-pre>E</code>，以及紧跟着的一个整数（可以有正负号）表示指数。</p>
<p>判断一个字符串是否符合上述模式时，首先看第一个字符是不是正负号。如果是，在字符串上移动一个字符，继续扫描剩余的字符串中0到9的数位。如果是一个小数，则将遇到小数点。另外，如果是用科学记数法表示的数值，在整数或者小数的后面还有可能遇到<code v-pre>e</code>或者<code v-pre>E</code>。</p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    bool isNumeric(char* string)
    {
        if(string == nullptr || *string == '\0') return false;
        
        if(*string == '+' || *string == '-') {
            string++;
            if(*string == '\0') return false;
        }
        
        takeNum(&amp;string);
        
        if(*string == '\0') {
            return true;
        } else if(*string == 'e' || *string == 'E') {
            string++;
            return isExp(&amp;string);
        } else if(*string == '.') {
            string++;
            takeNum(&amp;string);
            if(*string == '\0') {
                return true;
            } else if(*string == 'e' || *string == 'E') {
                string++;
                return isExp(&amp;string);
            } else {
                return false;
            }
        }
        return false;
    }
private:
    void takeNum(char** string) {
        while(**string &gt;= '0' &amp;&amp; **string &lt;= '9') {
            (*string)++;
        }
    }
    bool isExp(char** string) {
        if(**string == '\0') {
            return false;
        } else if(**string == '+' || **string == '-') {
            (*string)++;
            if(**string == '\0') return false;
        }
        takeNum(string);
        if(**string == '\0') {
            return true;
        } else {
            return false;
        }
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cuijiahua.com/blog/2018/01/basis_53.html" target="_blank" rel="noopener noreferrer">详情<ExternalLinkIcon/></a>，<a href="https://www.nowcoder.com/practice/6f8c901d091949a5837e24bb82a731f2?tpId=13&amp;tqId=11206&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking" target="_blank" rel="noopener noreferrer">练习<ExternalLinkIcon/></a>。</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://cuijiahua.com/blog/2018/02/basis_67.html" target="_blank" rel="noopener noreferrer">剑指Offer系列刷题笔记汇总<ExternalLinkIcon/></a></li>
</ul>
<p>本文参考此博客。</p>
</div></template>


