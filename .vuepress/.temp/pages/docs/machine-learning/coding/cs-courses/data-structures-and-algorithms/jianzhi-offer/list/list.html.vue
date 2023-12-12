<template><div><h1 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h1>
<ul>
<li><RouterLink to="/docs/machine-learning/coding/cs-courses/data-structures-and-algorithms/jianzhi-offer/jianzhi-offer.html">返回上层目录</RouterLink></li>
<li><a href="#%E5%89%91%E6%8C%87offer6%EF%BC%9A%E4%BB%8E%E5%B0%BE%E5%88%B0%E5%A4%B4%E6%89%93%E5%8D%B0%E9%93%BE%E8%A1%A8">剑指offer6：从尾到头打印链表</a></li>
<li><a href="#%E5%89%91%E6%8C%87offer22%EF%BC%9A%E9%93%BE%E8%A1%A8%E4%B8%AD%E5%80%92%E6%95%B0%E7%AC%ACk%E4%B8%AA%E8%8A%82%E7%82%B9">剑指offer22：链表中倒数第k个节点</a></li>
<li><a href="#%E5%89%91%E6%8C%87offer24%EF%BC%9A%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8">剑指offer24：反转链表</a></li>
<li><a href="#%E5%89%91%E6%8C%87offer25%EF%BC%9A%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%8E%92%E5%BA%8F%E7%9A%84%E9%93%BE%E8%A1%A8">剑指offer25：合并两个排序的链表</a></li>
<li><a href="#%E5%89%91%E6%8C%87offer35%EF%BC%9A%E5%A4%8D%E6%9D%82%E9%93%BE%E8%A1%A8%E7%9A%84%E5%A4%8D%E5%88%B6">剑指offer35：复杂链表的复制</a></li>
<li><a href="#%E5%89%91%E6%8C%87offer52%EF%BC%9A%E4%B8%A4%E4%B8%AA%E9%93%BE%E8%A1%A8%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%85%AC%E5%85%B1%E7%BB%93%E7%82%B9">剑指offer52：两个链表的第一个公共结点</a></li>
<li><a href="#%E5%89%91%E6%8C%87offer23%EF%BC%9A%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%8E%AF%E7%9A%84%E5%85%A5%E5%8F%A3%E7%BB%93%E7%82%B9">剑指offer23：链表中环的入口结点</a></li>
<li><a href="#%E5%89%91%E6%8C%87Offer18-2%EF%BC%9A%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E4%B8%AD%E9%87%8D%E5%A4%8D%E7%9A%84%E7%BB%93%E7%82%B9">剑指Offer18-2：删除链表中重复的结点</a></li>
</ul>
<h1 id="剑指offer6-从尾到头打印链表" tabindex="-1"><a class="header-anchor" href="#剑指offer6-从尾到头打印链表" aria-hidden="true">#</a> 剑指offer6：从尾到头打印链表</h1>
<blockquote>
<p>题目：输入一个链表的头节点，从尾到头反过来打印每个节点的值。</p>
<p>链表节点定义如下：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>struct ListNode {
	int val;
   struct ListNode *next;
   ListNode(int x) :
       val(x), next(NULL) {}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<p>遍历链表是从头到尾，但是输出确实从尾到头，这就是典型的“后进先出“，可以用栈实现这个顺序。即每经过一个节点，将该节点放到一个栈中，当遍历完整个链表后，再从栈顶开始逐个输出节点的值，这时输出的节点顺序已经反过来了。</p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    vector&lt;int&gt; printListFromTailToHead(ListNode* head) {
        
        stack&lt;int&gt; temp_stack;
        while(head != nullptr) {
            temp_stack.push(head-&gt;val);
            head = head-&gt;next;
        }
        
        vector&lt;int&gt; vec;
        while(!temp_stack.empty()) {
            vec.push_back(temp_stack.top());
            temp_stack.pop();
        }
        return vec;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cuijiahua.com/blog/2017/11/basis_3.html" target="_blank" rel="noopener noreferrer">详情<ExternalLinkIcon/></a>，<a href="https://www.nowcoder.com/practice/d0267f7f55b3412ba93bd35cfa8e8035?tpId=13&amp;tqId=11156&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking" target="_blank" rel="noopener noreferrer">练习<ExternalLinkIcon/></a>。</p>
<h1 id="剑指offer22-链表中倒数第k个节点" tabindex="-1"><a class="header-anchor" href="#剑指offer22-链表中倒数第k个节点" aria-hidden="true">#</a> 剑指offer22：链表中倒数第k个节点</h1>
<blockquote>
<p>题目：输入一个链表，输出该链表中倒数第k个结点。</p>
</blockquote>
<p>我们可以定义两个指针。第一个指针从链表的头指针开始遍历向前走k-1，第二个指针保持不动；从第k步开始，第二个指针也开始从链表的头指针开始遍历。由于两个指针的距离保持在k-1，当第一个（走在前面的）指针到达链表的尾结点时，第二个指针（走在后面的）指针正好是倒数第k个结点。</p>
<p>效果示意图，以链表总共6个结点，求倒数第3个结点为例：</p>
<p><img src="@source/docs/machine-learning/coding/cs-courses/data-structures-and-algorithms/jianzhi-offer/list/pic/list-offer-22.jpg" alt="list-offer-22"></p>
<p>除此之外，要注意代码的鲁棒性。需要判断传入参数合法性问题。</p>
<p>c++：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    ListNode* FindKthToTail(ListNode* pListHead, unsigned int k) {
        if(pListHead == NULL || k == 0){
            return NULL;
        }
        ListNode *pAhead = pListHead;
        ListNode *pBehind = pListHead;
        for(unsigned int i = 0; i &lt; k - 1; i++){
            if(pAhead-&gt;next != NULL){
                pAhead = pAhead-&gt;next;
            } else {
                return NULL;
            }
        }
        while(pAhead-&gt;next != NULL){
            pAhead = pAhead-&gt;next;
            pBehind = pBehind-&gt;next;
        }
        return pBehind;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cuijiahua.com/blog/2017/12/basis_14.html" target="_blank" rel="noopener noreferrer">详情<ExternalLinkIcon/></a>，<a href="https://www.nowcoder.com/practice/529d3ae5a407492994ad2a246518148a?tpId=13&amp;tqId=11167&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking" target="_blank" rel="noopener noreferrer">练习<ExternalLinkIcon/></a></p>
<h1 id="剑指offer24-反转链表" tabindex="-1"><a class="header-anchor" href="#剑指offer24-反转链表" aria-hidden="true">#</a> 剑指offer24：反转链表</h1>
<blockquote>
<p>题目：输入一个链表，反转链表后，输出链表的所有元素。</p>
<p>链表节点定义如下：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>struct ListNode {
	int val;
	struct ListNode *next;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<p>这个很简单，我们使用三个指针，分别指向当前遍历到的结点、它的前一个结点以及后一个结点。</p>
<p>在遍历的时候，做当前结点的尾结点和前一个结点的替换。</p>
<p>c++：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    ListNode* ReverseList(ListNode* pHead) {
        if(pHead == nullptr) return nullptr;
        ListNode* pPrev = nullptr;
        ListNode* pNext = nullptr;
        while(pHead != nullptr &amp;&amp; pHead-&gt;next != nullptr) {
            pNext = pHead-&gt;next;
            pHead-&gt;next = pPrev;
            pPrev = pHead;
            pHead = pNext;
        }
        pHead-&gt;next = pPrev;
        return pHead;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cuijiahua.com/blog/2017/12/basis_15.html" target="_blank" rel="noopener noreferrer">详情<ExternalLinkIcon/></a>，<a href="https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca?tpId=13&amp;tqId=11168&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking" target="_blank" rel="noopener noreferrer">练习<ExternalLinkIcon/></a></p>
<h1 id="剑指offer25-合并两个排序的链表" tabindex="-1"><a class="header-anchor" href="#剑指offer25-合并两个排序的链表" aria-hidden="true">#</a> 剑指offer25：合并两个排序的链表</h1>
<blockquote>
<p>题目：输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。</p>
<p>链表定义如下：</p>
<div class="language-C++ line-numbers-mode" data-ext="C++"><pre v-pre class="language-C++"><code>struct ListNode {
	int val;
	struct ListNode *next;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<p>先判断输入的链表是否为空的指针。如果第一个链表为空，则直接返回第二个链表；如果第二个链表为空，则直接返回第一个链表。如果两个链表都是空链表，合并的结果是得到一个空链表。</p>
<p>两个链表都是排序好的，我们只需要从头遍历链表，判断当前指针，哪个链表中的值小，即赋给合并链表指针即可。使用递归就可以轻松实现。</p>
<p>c++：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>class Solution {
public:
    ListNode* Merge(ListNode* pHead1, ListNode* pHead2)
    {
        if(pHead1 == nullptr) return pHead2;
        if(pHead2 == nullptr) return pHead1;
        
        ListNode* pMergedHead = nullptr;
        
        if(pHead1->val &lt;= pHead2->val) {
            pMergedHead = pHead1;
            pMergedHead->next = Merge(pHead1->next, pHead2);
        } else {
            pMergedHead = pHead2;
            pMergedHead->next = Merge(pHead1, pHead2->next);
        }
         
        return pMergedHead;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cuijiahua.com/blog/2017/12/basis_16.html" target="_blank" rel="noopener noreferrer">详情<ExternalLinkIcon/></a>，<a href="https://www.nowcoder.com/practice/d8b6b4358f774294a89de2a6ac4d9337?tpId=13&amp;tqId=11169&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking" target="_blank" rel="noopener noreferrer">练习<ExternalLinkIcon/></a>。</p>
<h1 id="剑指offer35-复杂链表的复制" tabindex="-1"><a class="header-anchor" href="#剑指offer35-复杂链表的复制" aria-hidden="true">#</a> 剑指offer35：复杂链表的复制</h1>
<blockquote>
<p>输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。</p>
<p>链表定义如下：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>struct RandomListNode {
   int label;
   struct RandomListNode *next, *random;
   RandomListNode(int x) :
           label(x), next(NULL), random(NULL) {
   }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<p>下图是一个含有5个节点的复杂链表，实线箭头表示<code v-pre>next</code>指针，虚线箭头表示<code v-pre>random</code>指针。指向nullptr的指针没有画出。</p>
<p><img src="@source/docs/machine-learning/coding/cs-courses/data-structures-and-algorithms/jianzhi-offer/list/pic/list-copy.png" alt="list-copy"></p>
<p>第一步，我们把N'连接在N的后面：</p>
<p><img src="@source/docs/machine-learning/coding/cs-courses/data-structures-and-algorithms/jianzhi-offer/list/pic/list-copy-2.png" alt="list-copy-2"></p>
<p>第二步，链表N的<code v-pre>random</code>节点指向节点S，那么其对应复制出来的N‘是N的<code v-pre>next</code>指向的节点，同样S'也是S的<code v-pre>next</code>指向的节点。设置<code v-pre>next</code>之后的链表如下所示：</p>
<p><img src="@source/docs/machine-learning/coding/cs-courses/data-structures-and-algorithms/jianzhi-offer/list/pic/list-copy-3.png" alt="list-copy-3"></p>
<p>第三步，把这个长表拆分为两个链表：把奇数位的节点用<code v-pre>next</code>链接起来就是原始链表，把偶数位的节点用<code v-pre>next</code>链接起来就是复制出来的链表。上图中的链表拆分之后的两个链表如下图所示。</p>
<p><img src="@source/docs/machine-learning/coding/cs-courses/data-structures-and-algorithms/jianzhi-offer/list/pic/list-copy-4.png" alt="list-copy-4"></p>
<p>c++：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    void CloneNode(RandomListNode *pHead) {
        RandomListNode *pNode = pHead;
        while(pNode != nullptr) {
            RandomListNode *pCloned = new RandomListNode(0);
            pCloned-&gt;label = pNode-&gt;label;
            pCloned-&gt;next = pNode-&gt;next;
            pCloned-&gt;random = nullptr;
            
            pNode-&gt;next = pCloned;
            pNode = pCloned-&gt;next;
        }
    }
    
    void ConnectRandomNodes(RandomListNode *pHead) {
        RandomListNode *pNode = pHead;
        while(pNode != nullptr) {
            RandomListNode *pCloned = pNode-&gt;next;
            if(pNode-&gt;random != nullptr) {
                pCloned-&gt;random = pNode-&gt;random-&gt;next;
            }
            pNode = pCloned-&gt;next;
        }
    }
    
    RandomListNode* ReconnectNodes(RandomListNode* pHead) {
        RandomListNode *pNode = pHead;
        RandomListNode *pClonedHead = nullptr;
        RandomListNode *pClonedNode = nullptr;
        
        if(pNode != nullptr) {
            pClonedHead = pClonedNode = pNode-&gt;next;
            pNode-&gt;next = pClonedNode-&gt;next;
            pNode = pNode-&gt;next;
        }
        
        while(pNode != nullptr) {
            pClonedNode-&gt;next = pNode-&gt;next;
            pClonedNode = pClonedNode-&gt;next;
            pNode-&gt;next = pClonedNode-&gt;next;
            pNode = pNode-&gt;next;
        }
        
        return pClonedHead;
    }
    
    RandomListNode* Clone(RandomListNode* pHead)
    {
        CloneNode(pHead);
        ConnectRandomNodes(pHead);
        return ReconnectNodes(pHead);
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cuijiahua.com/blog/2017/12/basis_25.html" target="_blank" rel="noopener noreferrer">详细<ExternalLinkIcon/></a>，<a href="https://www.nowcoder.com/practice/f836b2c43afc4b35ad6adc41ec941dba?tpId=13&amp;tqId=11178&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking" target="_blank" rel="noopener noreferrer">练习<ExternalLinkIcon/></a></p>
<h1 id="剑指offer52-两个链表的第一个公共结点" tabindex="-1"><a class="header-anchor" href="#剑指offer52-两个链表的第一个公共结点" aria-hidden="true">#</a> 剑指offer52：两个链表的第一个公共结点</h1>
<blockquote>
<p>输入两个链表，找出它们的第一个公共结点。</p>
<p>链表节点定义如下：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>struct ListNode {
	int val;
	struct ListNode *next;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<p><img src="@source/docs/machine-learning/coding/cs-courses/data-structures-and-algorithms/jianzhi-offer/list/pic/list-first-common-node.png" alt="list-first-common-node"></p>
<p>我们也可以先让把长的链表的头砍掉，让两个链表长度相同，这样，同时遍历也能找到公共结点。此时，时间复杂度O(m+n)，空间复杂度为O(MAX(m,n))。</p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    ListNode* FindFirstCommonNode( ListNode* pHead1, ListNode* pHead2) {        
        ListNode* p1 = pHead1;
        ListNode* p2 = pHead2;
        
        if(p1 == nullptr || p2 == nullptr) {
            return nullptr;
        }
        
        int len1 = 0, len2 = 0;
        while(p1 != nullptr) {
            p1 = p1-&gt;next;
            len1++;
        }
        while(p2 != nullptr) {
            p2 = p2-&gt;next;
            len2++;
        }
        
        p1 = pHead1;
        p2 = pHead2;
        
        if(len1 &gt; len2) {
            for(int i = 0; i &lt; len1 - len2; i++) {
                p1 = p1-&gt;next;
            }
        } else if(len1 &lt; len2) {
            for(int i = 0; i &lt; len2 - len1; i++) {
                p2 = p2-&gt;next;
            }
        }
        
        while(p1 != nullptr &amp;&amp; p2 != nullptr) {
            if(p1 == p2) {
                return p1;
            }
            p1 = p1-&gt;next;
            p2 = p2-&gt;next;
        }
        
        return nullptr;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cuijiahua.com/blog/2018/01/basis_36.html" target="_blank" rel="noopener noreferrer">详细<ExternalLinkIcon/></a>，<a href="https://www.nowcoder.com/practice/6ab1d9a29e88450685099d45c9e31e46?tpId=13&amp;tqId=11189&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking" target="_blank" rel="noopener noreferrer">练习<ExternalLinkIcon/></a></p>
<h1 id="剑指offer23-链表中环的入口结点" tabindex="-1"><a class="header-anchor" href="#剑指offer23-链表中环的入口结点" aria-hidden="true">#</a> 剑指offer23：链表中环的入口结点</h1>
<blockquote>
<p>一个链表中包含环，请找出该链表的环的入口结点。</p>
<p>链表节点定义如下：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>struct ListNode {
   int val;
   struct ListNode *next;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<p>可以用两个指针来解决这个问题。先定义两个指针P1和P2指向链表的头结点。如果链表中的环有n个结点，指针P1先在链表上向前移动n步，然后两个指针以相同的速度向前移动。当第二个指针指向的入口结点时，第一个指针已经围绕着揍了一圈又回到了入口结点。</p>
<p>以下图为例，指针P1和P2在初始化时都指向链表的头结点。由于环中有4个结点，指针P1先在链表上向前移动4步。接下来两个指针以相同的速度在链表上向前移动，直到它们相遇。它们相遇的结点正好是环的入口结点。</p>
<p><img src="@source/docs/machine-learning/coding/cs-courses/data-structures-and-algorithms/jianzhi-offer/list/pic/list-circle-entrance.png" alt="list-circle-entrance"></p>
<p><strong>现在，关键问题在于怎么知道环中有几个结点呢？</strong></p>
<p>可以使用快慢指针，一个每次走一步，一个每次走两步。如果两个指针相遇，表明链表中存在环，并且两个指针相遇的结点一定在环中。</p>
<p>随后，我们就从相遇的这个环中结点出发，一边继续向前移动一边计数，当再次回到这个结点时，就可以得到环中结点数目了。</p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    ListNode* EntryNodeOfLoop(ListNode* pHead)
    {
        if(pHead == nullptr) return nullptr;
        
        ListNode* pFast = pHead-&gt;next;
        ListNode* pSlow = pHead;
        
        while(pFast != pSlow) {
            if(pFast != nullptr &amp;&amp; pFast-&gt;next != nullptr &amp;&amp; pSlow != nullptr) {
                pFast = pFast-&gt;next-&gt;next;
                pSlow = pSlow-&gt;next;
            } else {
                return nullptr;
            }
        }
        
        ListNode* pInCircle = pSlow;
        pSlow = pInCircle-&gt;next;
        int n = 1;
        while(pSlow != pInCircle) {
            pSlow = pSlow-&gt;next;
            n++;
        }
        
        pFast = pSlow = pHead;
        for(; n &gt; 0; n--) {
            pFast = pFast-&gt;next;
        }
        while(pFast != pSlow) {
            pFast = pFast-&gt;next;
            pSlow = pSlow-&gt;next;
        }
        
        return pFast;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cuijiahua.com/blog/2018/01/basis_55.html" target="_blank" rel="noopener noreferrer">详细<ExternalLinkIcon/></a>，<a href="https://www.nowcoder.com/practice/253d2c59ec3e4bc68da16833f79a38e4?tpId=13&amp;tqId=11208&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking" target="_blank" rel="noopener noreferrer">练习<ExternalLinkIcon/></a></p>
<h1 id="剑指offer18-2-删除链表中重复的结点" tabindex="-1"><a class="header-anchor" href="#剑指offer18-2-删除链表中重复的结点" aria-hidden="true">#</a> 剑指Offer18-2：删除链表中重复的结点</h1>
<blockquote>
<p>在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1-&gt;2-&gt;3-&gt;3-&gt;4-&gt;4-&gt;5 处理后为 1-&gt;2-&gt;5。</p>
<p>链表节点定义如下：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>struct ListNode {
    int val;
    struct ListNode *next;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<p>删除重复结点，只需要记录当前结点前的最晚访问过的不重复结点pPre、当前结点pCur、指向当前结点后面的结点pNext的三个指针即可。如果当前节点和它后面的几个结点数值相同，那么这些结点都要被剔除，然后更新pPre和pCur；如果不相同，则直接更新pPre和pCur。</p>
<p>需要考虑的是，如果第一个结点是重复结点我们该怎么办？这里我们分别处理一下就好，如果第一个结点是重复结点，那么就把头指针pHead也更新一下。</p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    ListNode* deleteDuplication(ListNode* pHead)
    {
        if(pHead == nullptr) return nullptr;
        
        ListNode* pPre = nullptr;
        ListNode* pCur = pHead;
        ListNode* pNext = nullptr;
        
        while(pCur != nullptr) {
            if(pCur-&gt;next != nullptr &amp;&amp; pCur-&gt;val == pCur-&gt;next-&gt;val) {
                pNext = pCur-&gt;next;
                while(pNext-&gt;next != nullptr &amp;&amp; pNext-&gt;next-&gt;val == pCur-&gt;val) {
                    pNext = pNext-&gt;next;
                }
                if(pCur != pHead) {
                    pPre-&gt;next = pNext-&gt;next;
                } else {
                    pHead = pNext-&gt;next;
                }
                pCur = pNext-&gt;next;
            } else {
                pPre = pCur;
                pCur = pCur-&gt;next;
            }
        }
        return pHead;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cuijiahua.com/blog/2018/01/basis_56.html" target="_blank" rel="noopener noreferrer">详细<ExternalLinkIcon/></a>，<a href="https://www.nowcoder.com/practice/fc533c45b73a41b0b44ccba763f866ef?tpId=13&amp;tqId=11209&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking" target="_blank" rel="noopener noreferrer">练习<ExternalLinkIcon/></a></p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://cuijiahua.com/blog/2018/02/basis_67.html" target="_blank" rel="noopener noreferrer">剑指Offer系列刷题笔记汇总<ExternalLinkIcon/></a></li>
</ul>
<p>本文参考此博客。</p>
</div></template>


