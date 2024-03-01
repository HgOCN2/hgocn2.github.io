import{_ as c,r as t,o as r,c as d,b as e,e as i,w as o,d as n,a}from"./app-VitiyI7N.js";const v="/assets/stack-9-Q6N9Yet9.jpg",u={},p=e("h1",{id:"栈和队列",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#栈和队列","aria-hidden":"true"},"#"),n(" 栈和队列")],-1),m=e("li",null,[e("a",{href:"#%E5%89%91%E6%8C%87offer9%EF%BC%9A%E7%94%A8%E4%B8%A4%E4%B8%AA%E6%A0%88%E5%AE%9E%E7%8E%B0%E9%98%9F%E5%88%97"},"剑指offer9：用两个栈实现队列")],-1),b=e("li",null,[e("a",{href:"#%E5%89%91%E6%8C%87offer30%EF%BC%9A%E5%8C%85%E5%90%ABmin%E5%87%BD%E6%95%B0%E7%9A%84%E6%A0%88"},"剑指offer30：包含min函数的栈")],-1),h=e("li",null,[e("a",{href:"#%E5%89%91%E6%8C%87offer31%EF%BC%9A%E6%A0%88%E7%9A%84%E5%8E%8B%E5%85%A5%E3%80%81%E5%BC%B9%E5%87%BA%E5%BA%8F%E5%88%97"},"剑指offer31：栈的压入、弹出序列")],-1),f=a('<h1 id="剑指offer9-用两个栈实现队列" tabindex="-1"><a class="header-anchor" href="#剑指offer9-用两个栈实现队列" aria-hidden="true">#</a> 剑指offer9：用两个栈实现队列</h1><blockquote><p>题目：用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。</p></blockquote><p>创建两个栈stack1和stack2，使用两个“先进后出”的栈实现一个“先进先出”的队列。</p><p>我们通过一个具体的例子分析往该队列插入和删除元素的过程。首先插入一个元素a，不妨先把它插入到stack1，此时stack1中的元素有{a}，stack2为空。再压入两个元素b和c，还是插入到stack1中，此时stack1的元素有{a,b,c}，其中c位于栈顶，而stack2仍然是空的。</p><p>这个时候我们试着从队列中删除一个元素。按照先入先出的规则，由于a比b、c先插入队列中，最先删除的元素应该是a。元素a存储在stack1中，但并不在栈顶，因此不能直接进行删除操作。注意stack2我们一直没有使用过，现在是让stack2发挥作用的时候了。如果我们把stack1中的元素逐个弹出压入stack2，元素在stack2中的顺序正好和原来在stack1中的顺序相反。因此经过3次弹出stack1和要入stack2操作之后，stack1为空，而stack2中的元素是{c,b,a}，这个时候就可以弹出stack2的栈顶a了。此时的stack1为空，而stack2的元素为{b,a}，其中b在栈顶。</p><p>因此我们的思路是：当stack2中不为空时，在stack2中的栈顶元素是最先进入队列的元素，可以弹出。如果stack2为空时，我们把stack1中的元素逐个弹出并压入stack2。由于先进入队列的元素被压倒stack1的栈底，经过弹出和压入之后就处于stack2的栈顶，有可以直接弹出。如果有新元素d插入，我们直接把它压入stack1即可。</p><p>流程示意图：</p><p><img src="'+v+`" alt="stack-9"></p><p>c++:</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>class Solution
{
public:
    void push(int node) {
        stack1.push(node);
    }

    int pop() {
        if(stack2.empty()){
            while(stack1.size() &gt; 0){
                int data = stack1.top();
                stack1.pop();
                stack2.push(data);
            }
        }
        int pop_element = stack2.top();
        stack2.pop();
        return pop_element;
    }

private:
    stack&lt;int&gt; stack1;
    stack&lt;int&gt; stack2;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),k={href:"https://cuijiahua.com/blog/2017/11/basis_5.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.nowcoder.com/practice/54275ddae22f475981afa2244dd448c6?tpId=13&tqId=11158&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking",target:"_blank",rel:"noopener noreferrer"},g=a(`<h1 id="剑指offer30-包含min函数的栈" tabindex="-1"><a class="header-anchor" href="#剑指offer30-包含min函数的栈" aria-hidden="true">#</a> 剑指offer30：包含min函数的栈</h1><blockquote><p>题目：定义栈的数据结构，请在类型中实现一个能够得到栈最小元素的min函数。</p></blockquote><p>使用两个stack，一个为数据栈，另一个为辅助栈。数据栈用于存储所有数据，辅助栈用于存储最小值。</p><p>举个例子：</p><p>入栈的时候：首先往空的数据栈里压入数字3，显然现在3是最小值，我们也把最小值压入辅助栈。接下来往数据栈里压入数字4。由于4大于之前的最小值，因此我们只要入数据栈，不压入辅助栈。</p><p>出栈的时候：当数据栈和辅助栈的栈顶元素相同的时候，辅助栈的栈顶元素出栈。否则，数据栈的栈顶元素出栈。</p><p>获得栈顶元素的时候：直接返回数据栈的栈顶元素。</p><p>栈最小元素：直接返回辅助栈的栈顶元素。</p><p>c++:</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>class Solution {
public:
    void push(int value) {
        Data.push(value);
        if(Min.empty()){
            Min.push(value);
        }
        if(Min.top() &gt; value){
            Min.push(value);
        }
    }
    void pop() {
        if(Data.top() == Min.top()){
            Min.pop();
        }
        Data.pop();
    }
    int top() {
        return Data.top();
    }
    int min() {
        return Min.top();
    }
private:
    stack&lt;int&gt; Data;			//数据栈
    stack&lt;int&gt; Min;				//最小栈
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),E={href:"https://cuijiahua.com/blog/2017/12/basis_20.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.nowcoder.com/practice/4c776177d2c04c2494f2555c9fcc1e49?tpId=13&tqId=11173&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking",target:"_blank",rel:"noopener noreferrer"},A=a(`<h1 id="剑指offer31-栈的压入、弹出序列" tabindex="-1"><a class="header-anchor" href="#剑指offer31-栈的压入、弹出序列" aria-hidden="true">#</a> 剑指offer31：栈的压入、弹出序列</h1><blockquote><p>题目：输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）</p><p>不一定是全部压入栈之后再弹出，也可以是压几个弹一个，再压入，再弹出。那4,5,3,2,1举例的话，就是先压入了1,2,3,4，弹出4，再压入5，再弹出所有</p></blockquote><p>借用一个辅助的栈，遍历压栈顺序，先将第一个放入栈中，这里是1，然后判断栈顶元素是不是出栈顺序的第一个元素，这里是4，很显然1≠4，所以我们继续压栈，直到相等以后开始出栈，出栈一个元素，则将出栈顺序向后移动一位，直到不相等，这样循环等压栈顺序遍历完成，如果辅助栈还不为空，说明弹出序列不是该栈的弹出顺序。</p><p>c++:</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>class Solution {
public:
    bool IsPopOrder(vector&lt;int&gt; pushV,vector&lt;int&gt; popV) {
        if(pushV.size() == 0){
            return false;
        }
        for(int i = 0, j = 0; i &lt; pushV.size();i++){
            stackData.push(pushV[i]);
            while(j &lt; popV.size() &amp;&amp; stackData.top() == popV[j]){
                stackData.pop();
                j++;
            }
        }
        return stackData.empty();
    }
private:
    stack&lt;int&gt; stackData;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),B={href:"https://cuijiahua.com/blog/2017/12/basis_21.html",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.nowcoder.com/practice/d77d11405cc7470d82554cb392585106?tpId=13&tqId=11174&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking",target:"_blank",rel:"noopener noreferrer"},x=e("h1",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),n(" 参考资料")],-1),j={href:"https://cuijiahua.com/blog/2018/02/basis_67.html",target:"_blank",rel:"noopener noreferrer"},D=e("p",null,"本文参考此博客。",-1);function V(C,I){const l=t("RouterLink"),s=t("ExternalLinkIcon");return r(),d("div",null,[p,e("ul",null,[e("li",null,[i(l,{to:"/docs/machine-learning/coding/cs-courses/data-structures-and-algorithms/jianzhi-offer/jianzhi-offer.html"},{default:o(()=>[n("返回上层目录")]),_:1})]),m,b,h]),f,e("p",null,[e("a",k,[n("详情"),i(s)]),n("，"),e("a",_,[n("练习"),i(s)]),n("。")]),g,e("p",null,[e("a",E,[n("详情"),i(s)]),n("，"),e("a",w,[n("练习"),i(s)]),n("。")]),A,e("p",null,[e("a",B,[n("详情"),i(s)]),n("，"),e("a",q,[n("练习"),i(s)]),n("。")]),x,e("ul",null,[e("li",null,[e("a",j,[n("剑指Offer系列刷题笔记汇总"),i(s)])])]),D])}const z=c(u,[["render",V],["__file","stack-and-queue.html.vue"]]);export{z as default};
