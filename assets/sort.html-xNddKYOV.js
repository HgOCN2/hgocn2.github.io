import{_ as r,r as a,o,c,b as e,e as i,w as t,d as n,a as d}from"./app-VitiyI7N.js";const h={},u=e("h1",{id:"排序",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#排序","aria-hidden":"true"},"#"),n(" 排序")],-1),m=d(`<ol><li><p>冒泡排序</p></li><li><p>选择排序：选择排序与冒泡排序有点像，只不过选择排序每次都是在确定了最小数的下标之后再进行交换，大大减少了交换的次数</p></li><li><p>插入排序：将一个记录插入到已排序的有序表中，从而得到一个新的，记录数增1的有序表</p></li><li><p>快速排序：通过一趟排序将序列分成左右两部分，其中左半部分的的值均比右半部分的值小，然后再分别对左右部分的记录进行排序，直到整个序列有序。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int partition(int a[],  int low, int high){
    int key = a[low];
    while( low &lt; high ){
        while(low &lt; high &amp;&amp; a[high] &gt;= key) high--;
        a[low] = a[high];
        while(low &lt; high &amp;&amp; a[low] &lt;= key) low++;
        a[high] = a[low];
    }
    a[low] = key;
    return low;
}
void quick_sort(int a[], int low, int high){
    if(low &gt;= high) return;
    int keypos = partition(a, low, high);
    quick_sort(a, low, keypos-1);
    quick_sort(a, keypos+1, high);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>堆排序：假设序列有n个元素,先将这n建成大顶堆，然后取堆顶元素，与序列第n个元素交换，然后调整前n-1元素，使其重新成为堆，然后再取堆顶元素，与第n-1个元素交换，再调整前n-2个元素...直至整个序列有序。</p></li><li><p>希尔排序：先将整个待排记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录基本有序时再对全体记录进行一次直接插入排序。</p></li><li><p>归并排序：把有序表划分成元素个数尽量相等的两半，把两半元素分别排序，两个有序表合并成一个</p></li></ol><p>===</p>`,2),p={href:"https://mp.weixin.qq.com/s/4n0a3sDp0GIs6gFZ7TEZNQ",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.zhihu.com/question/51337272/answer/438910111",target:"_blank",rel:"noopener noreferrer"},g={href:"https://mp.weixin.qq.com/s/IAZnN00i65Ad3BicZy5kzQ",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.zhihu.com/question/36738189/answer/864005192",target:"_blank",rel:"noopener noreferrer"};function w(b,k){const l=a("RouterLink"),s=a("ExternalLinkIcon");return o(),c("div",null,[u,e("ul",null,[e("li",null,[i(l,{to:"/docs/machine-learning/coding/cs-courses/data-structures-and-algorithms/algorithms/algorithms.html"},{default:t(()=>[n("返上层目录")]),_:1})]),e("li",null,[i(l,{to:"/docs/machine-learning/coding/cs-courses/data-structures-and-algorithms/algorithms/sort/heap-sort.html"},{default:t(()=>[n("堆排序")]),_:1})]),e("li",null,[i(l,{to:"/docs/machine-learning/coding/cs-courses/data-structures-and-algorithms/algorithms/sort/merge-sort.html"},{default:t(()=>[n("归并排序")]),_:1})]),e("li",null,[i(l,{to:"/docs/machine-learning/coding/cs-courses/data-structures-and-algorithms/algorithms/sort/quick-sort.html"},{default:t(()=>[n("快速排序")]),_:1})])]),m,e("p",null,[e("a",p,[n("这或许是东半球分析十大排序算法最好的一篇文章"),i(s)])]),e("p",null,[e("a",v,[n("数据结构的那些排序算法总是记不住，这个真的背的吗？"),i(s)])]),e("p",null,[e("a",g,[n("必学十大经典排序算法，看这篇就够了(附完整代码/动图/优质文章)(修订版)"),i(s)])]),e("p",null,[e("a",_,[n("LeetCode按照怎样的顺序来刷题比较好？"),i(s)])])])}const x=r(h,[["render",w],["__file","sort.html.vue"]]);export{x as default};
