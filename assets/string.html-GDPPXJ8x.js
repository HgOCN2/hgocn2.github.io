import{_ as d,r as s,o as l,c,b as n,e as i,w as o,d as e,a as r}from"./app-VitiyI7N.js";const g={},h=n("h1",{id:"string字符串类",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#string字符串类","aria-hidden":"true"},"#"),e(" string字符串类")],-1),u=n("li",null,[n("a",{href:"#substr%E6%8F%90%E5%8F%96%E9%83%A8%E5%88%86%E5%AD%97%E7%AC%A6%E4%B8%B2"},"substr提取部分字符串")],-1),v=n("li",null,[n("a",{href:"#c_str()%E8%BD%AC%E4%B8%BAchar*%E6%95%B0%E7%BB%84"},"c_str()转为char*数组")],-1),_=n("li",null,[n("a",{href:"#to_string%E6%95%B0%E5%80%BC%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2"},"to_string数值转字符串")],-1),m=n("li",null,"[char[]，char *，string之间转换](#char[]，char *，string之间转换)",-1),b=n("li",null,[n("a",{href:"#string%E8%B5%8B%E5%80%BC"},"string赋值")],-1),p=r(`<h1 id="substr提取部分字符串" tabindex="-1"><a class="header-anchor" href="#substr提取部分字符串" aria-hidden="true">#</a> substr提取部分字符串</h1><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>string str_new = str.substr(0, length);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="c-str-转为char-数组" tabindex="-1"><a class="header-anchor" href="#c-str-转为char-数组" aria-hidden="true">#</a> c_str()转为char*数组</h1><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>const char* cstr = str.c_str();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="to-string数值转字符串" tabindex="-1"><a class="header-anchor" href="#to-string数值转字符串" aria-hidden="true">#</a> to_string数值转字符串</h1><p>功能：将数值转化为字符串。返回对应的字符串。</p><p>函数原型：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>string to_string (int val);
string to_string (long val);
string to_string (long long val);
string to_string (unsigned val);
string to_string (unsigned long val);
string to_string (unsigned long long val);
string to_string (float val);
string to_string (double val);
string to_string (long double val);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="char-char-string之间转换" tabindex="-1"><a class="header-anchor" href="#char-char-string之间转换" aria-hidden="true">#</a> char[]，char *，string之间转换</h1>`,9),E={href:"https://blog.csdn.net/yzhang6_10/article/details/51164300",target:"_blank",rel:"noopener noreferrer"},f=r(`<h1 id="string赋值" tabindex="-1"><a class="header-anchor" href="#string赋值" aria-hidden="true">#</a> string赋值</h1><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

string num1 = string(&quot;111&quot;);

string s;
s.push_back(1 + &#39;0&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function B(x,A){const a=s("RouterLink"),t=s("ExternalLinkIcon");return l(),c("div",null,[h,n("ul",null,[n("li",null,[i(a,{to:"/docs/machine-learning/coding/programing-language/c++/tips/tips.html"},{default:o(()=>[e("返回上层目录")]),_:1})]),u,v,_,m,b]),p,n("p",null,[n("a",E,[e("char[]，char *，string之间转换"),i(t)])]),f])}const C=d(g,[["render",B],["__file","string.html.vue"]]);export{C as default};
