<template><div><h1 id="tcp通信" tabindex="-1"><a class="header-anchor" href="#tcp通信" aria-hidden="true">#</a> TCP通信</h1>
<ul>
<li><RouterLink to="/docs/Engineering/coding/cs-courses/computer-network/tcp-ip-protocol-family/tcp-ip-protocol-family.html">返回上层目录</RouterLink></li>
<li><a href="#TCP%E5%8E%9F%E7%90%86%E4%BB%8B%E7%BB%8D">TCP原理介绍</a>
<ul>
<li><a href="#TCP%E7%9A%84%E6%B5%81%E7%A8%8B">TCP的流程</a></li>
<li><a href="#%E9%9D%9E%E9%98%BB%E5%A1%9E%E5%BC%8F">非阻塞式</a></li>
</ul>
</li>
<li><a href="#%E5%8D%95Server%E4%B8%8E%E5%8D%95Client%E9%80%9A%E4%BF%A1">单Server与单Client通信</a>
<ul>
<li><a href="#Windows%E7%89%88">Windows版</a>
<ul>
<li><a href="#Server%E7%AB%AF%E4%BB%A3%E7%A0%81C++%E9%98%BB%E5%A1%9E%E5%BC%8F">Server端代码C++阻塞式</a></li>
<li><a href="#Client%E7%AB%AF%E4%BB%A3%E7%A0%81C++%E9%98%BB%E5%A1%9E%E5%BC%8F">Client端代码C++阻塞式</a></li>
<li><a href="#Server%E7%AB%AF%E4%BB%A3%E7%A0%81C++%E9%9D%9E%E9%98%BB%E5%A1%9E%E5%BC%8F">Server端代码C++非阻塞式</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E5%8D%95Server%E4%B8%8E%E5%A4%9AClient%E9%80%9A%E4%BF%A1">单Server与多Client通信</a>
<ul>
<li><a href="#Windows%E7%89%88">Windows版</a>
<ul>
<li><a href="#Server%E7%AB%AFC++%E9%98%BB%E5%A1%9E%E5%BC%8F%EF%BC%88%E5%A4%9A%E7%BA%BF%E7%A8%8B%EF%BC%89">Server端C++阻塞式（多线程）</a></li>
<li><a href="#Client%E7%AB%AFC++%E9%98%BB%E5%A1%9E%E5%BC%8F">Client端C++阻塞式</a></li>
<li><a href="#Server%E7%AB%AFPython%E9%98%BB%E5%A1%9E%E5%BC%8F%EF%BC%88%E5%A4%9A%E7%BA%BF%E7%A8%8B%EF%BC%89">Server端Python阻塞式（多线程）</a></li>
<li><a href="#Server%E7%AB%AF%E4%BB%A3%E7%A0%81C++%E9%9D%9E%E9%98%BB%E5%A1%9E%E5%BC%8F%EF%BC%88%E5%8D%95%E7%BA%BF%E7%A8%8B%EF%BC%89">Server端代码C++非阻塞式（单线程）</a></li>
<li><a href="#Client%E7%AB%AFC++%E9%9D%9E%E9%98%BB%E5%A1%9E%E5%BC%8F">Client端C++非阻塞式</a></li>
<li><a href="#Server%E7%AB%AFPython%E9%9D%9E%E9%98%BB%E5%A1%9E%E5%BC%8F%EF%BC%88%E5%8D%95%E7%BA%BF%E7%A8%8B%EF%BC%89">Server端Python非阻塞式（单线程）</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="tcp原理介绍" tabindex="-1"><a class="header-anchor" href="#tcp原理介绍" aria-hidden="true">#</a> TCP原理介绍</h1>
<h2 id="tcp的流程" tabindex="-1"><a class="header-anchor" href="#tcp的流程" aria-hidden="true">#</a> TCP的流程</h2>
<p><img src="@source/docs/Engineering/coding/cs-courses/computer-network/tcp-ip-protocol-family/tcp/pic/tcp-process.png" alt="tcp-process"></p>
<p>服务端必须先监听该端口，使用accept阻塞等待，等待客户端用connect请求；</p>
<p>客户端用connect请求服务端，accept收到后就分配给该客户端一个专用的socker建立专用链接；</p>
<p>后续就在该链接(socket)上和该客户端用recv和send进行通信。</p>
<p>总结：也就比Udp多了一个accept和connect环节，这能保证专用稳定的链接。</p>
<h2 id="非阻塞式" tabindex="-1"><a class="header-anchor" href="#非阻塞式" aria-hidden="true">#</a> 非阻塞式</h2>
<p>默认情况下，新建的 Socket 是阻塞模式的。可以调用 ioctlsocket()函数将 Socket 设置为非阻塞模式，函数原型如下：</p>
<p><img src="@source/docs/Engineering/coding/cs-courses/computer-network/tcp-ip-protocol-family/tcp/pic/socket_ioctlsocket.png" alt="socket_ioctlsocket"></p>
<h2 id="socket缓冲区" tabindex="-1"><a class="header-anchor" href="#socket缓冲区" aria-hidden="true">#</a> socket缓冲区</h2>
<p><a href="https://www.pianshen.com/article/1466786924/" target="_blank" rel="noopener noreferrer">socket缓冲区<ExternalLinkIcon/></a></p>
<h1 id="单server与单client通信" tabindex="-1"><a class="header-anchor" href="#单server与单client通信" aria-hidden="true">#</a> 单Server与单Client通信</h1>
<h2 id="windows版" tabindex="-1"><a class="header-anchor" href="#windows版" aria-hidden="true">#</a> Windows版</h2>
<p>参考链接：<a href="https://blog.csdn.net/qq_44184049/article/details/122291617" target="_blank" rel="noopener noreferrer">socket编程TCP/IP通信（windows下，C++实现）<ExternalLinkIcon/></a></p>
<p>先别看那些原理介绍，会看晕的，直接看代码，很容易懂，再返回去看原理介绍。</p>
<p>话不多说，代码如下：</p>
<h3 id="server端代码c-阻塞式" tabindex="-1"><a class="header-anchor" href="#server端代码c-阻塞式" aria-hidden="true">#</a> Server端代码C++阻塞式</h3>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>//server.cpp
#include&lt;iostream&gt;
#include&lt;winsock.h&gt;   // windows平台的网络库头文件
#pragma comment(lib,&quot;ws2_32.lib&quot;)   // 库文件
using namespace std;

// 服务端
// socket编程TCP/IP通信（windows下，C++实现）
// https://blog.csdn.net/qq_44184049/article/details/122291617

#define PORT 5050
#define BUFSIZ 512

void initialization() {
    //初始化套接字库
    // WSA  windows socket async  windows异步套接字     WSAStartup启动套接字
    // parm1:请求的socket版本 2.2 2.1 1.0     parm2:传出参数    参数形式：WORD  WSADATA
    WORD w_req = MAKEWORD(2, 2);//版本号
    WSADATA wsadata;
    // 成功：WSAStartup函数返回零
    if (WSAStartup(w_req, &amp;wsadata) != 0) {
        cout &lt;&lt; &quot;init socket lib failed!&quot; &lt;&lt; endl;
    }
    else {
        cout &lt;&lt; &quot;init socket lib success!&quot; &lt;&lt; endl;
    }
}

SOCKET createServeSocket(const char* ip)
{
    //1.创建空的Socket
    //parm1:af 地址协议族 ipv4 ipv6
    //parm2:type 传输协议类型 流式套接字(SOCK_STREAM) 数据报
    //parm3：protocl 使用具体的某个传输协议
    SOCKET s_server = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (s_server == INVALID_SOCKET)
    {
        cout &lt;&lt; &quot;socket create failed!&quot; &lt;&lt; endl;
        WSACleanup();
    }
    else {
        cout &lt;&lt; &quot;socket create sucess!&quot; &lt;&lt; endl;
    }
    //2.给socket绑定ip地址和端口号
    struct sockaddr_in server_addr;   // sockaddr_in, sockaddr  老版本和新版的区别
    server_addr.sin_family = AF_INET;  // 和创建socket时必须一样
    server_addr.sin_port = htons(PORT);       // 端口号  大端（高位）存储(本地)和小端（低位）存储(网络），两个存储顺序是反着的  htons 将本地字节序转为网络字节序
    server_addr.sin_addr.S_un.S_addr = inet_addr(ip); //inet_addr将点分十进制的ip地址转为二进制
    if (bind(s_server, (SOCKADDR*)&amp;server_addr, sizeof(SOCKADDR)) == SOCKET_ERROR) {
        cout &lt;&lt; &quot;socket bind failed!&quot; &lt;&lt; endl;
        WSACleanup();
    }
    else {
        cout &lt;&lt; &quot;socket bind success!&quot; &lt;&lt; endl;
    }

    //3.设置套接字为监听状态  SOMAXCONN 监听的端口数 右键转到定义为5
    if (listen(s_server, SOMAXCONN) &lt; 0) {
        cout &lt;&lt; &quot;set listen states failed!&quot; &lt;&lt; endl;
        WSACleanup();
    }
    else {
        cout &lt;&lt; &quot;set listen status succes!&quot; &lt;&lt; endl;
    }
    return s_server;
}

int main_tcp_send() {
    //定义发送缓冲区和接受缓冲区长度
    char send_buf[BUFSIZ];
    char recv_buf[BUFSIZ];
    //定义服务端套接字，接受请求套接字
    SOCKET s_server;
    SOCKET s_accept;

    initialization(); // 初始化启动套接字
    s_server = createServeSocket(&quot;127.0.0.1&quot;);
    cout &lt;&lt; &quot;wait client connect...&quot; &lt;&lt; endl;
    // 如果有客户端请求连接
    printf(&quot;waiting for client! zuse!!!!\n&quot;);
    s_accept = accept(s_server, NULL, NULL);  // 阻塞住，等待客户端发消息
    printf(&quot;client send info to server! zuse end!!!!\n&quot;);
    if (s_accept == INVALID_SOCKET) {
        cout &lt;&lt; &quot;link failed!&quot; &lt;&lt; endl;
        WSACleanup();
        return 0;
    }
    // 可以和客户端进行通信了
    while (true) {
        // recv从指定的socket接受消息
        if (recv(s_accept, recv_buf, BUFSIZ, 0) &gt; 0){
            cout &lt;&lt; &quot;client info: &quot; &lt;&lt; recv_buf &lt;&lt; endl;
        }
        else {
            cout &lt;&lt; &quot;receive failed!&quot; &lt;&lt; endl;
            break;
        }
        cout &lt;&lt; &quot;please input replay info:&quot;;
        cin &gt;&gt; send_buf;
        if (send(s_accept, send_buf, BUFSIZ, 0) &lt; 0) {
            cout &lt;&lt; &quot;sned failed!&quot; &lt;&lt; endl;
            break;
        }
    }
    //关闭套接字
    closesocket(s_server);
    closesocket(s_accept);
    //释放DLL资源
    WSACleanup();
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="client端代码c-阻塞式" tabindex="-1"><a class="header-anchor" href="#client端代码c-阻塞式" aria-hidden="true">#</a> Client端代码C++阻塞式</h3>
<p>参考链接：<a href="https://blog.csdn.net/qq_44184049/article/details/122291617" target="_blank" rel="noopener noreferrer">socket编程TCP/IP通信（windows下，C++实现）<ExternalLinkIcon/></a></p>
<p>代码如下：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>// client.cpp
#include&lt;iostream&gt;
#include&lt;winsock.h&gt;   // windows平台的网络库头文件
#pragma comment(lib,&quot;ws2_32.lib&quot;)   // 库文件
using namespace std;

// 客户端
// socket编程TCP/IP通信（windows下，C++实现）
// https://blog.csdn.net/qq_44184049/article/details/122291617

#define PORT 5050
#define BUFSIZ 512

void initialization() {
	//初始化套接字库
	// WSA  windows socket async  windows异步套接字     WSAStartup启动套接字
	// parm1:请求的socket版本 2.2 2.1 1.0     parm2:传出参数    参数形式：WORD  WSADATA
	WORD w_req = MAKEWORD(2, 2);//版本号  
	WSADATA wsadata;
	// 成功：WSAStartup函数返回零
	if (WSAStartup(w_req, &amp;wsadata) != 0) {
		cout &lt;&lt; &quot;初始化套接字库失败！&quot; &lt;&lt; endl;
	}
	else {
		cout &lt;&lt; &quot;初始化套接字库成功！&quot; &lt;&lt; endl;
	}
}

SOCKET createClientSocket(const char* ip)
{
	//1.创建空的Socket					
		//parm1:af 地址协议族 ipv4 ipv6
		//parm2:type 传输协议类型 流式套接字(SOCK_STREAM) 数据报
		//parm3：protocl 使用具体的某个传输协议
	SOCKET c_client = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
	if (c_client == INVALID_SOCKET)
	{
		cout &lt;&lt; &quot;套接字创建失败！&quot; &lt;&lt; endl;
		WSACleanup();
	}
	else {
		cout &lt;&lt; &quot;套接字创建成功！&quot; &lt;&lt; endl;
	}

	//2.连接服务器
	struct sockaddr_in addr;   // sockaddr_in, sockaddr  老版本和新版的区别
	addr.sin_family = AF_INET;  // 和创建socket时必须一样
	addr.sin_port = htons(PORT);       // 端口号  大端（高位）存储(本地)和小端（低位）存储(网络），两个存储顺序是反着的  htons 将本地字节序转为网络字节序
	addr.sin_addr.S_un.S_addr = inet_addr(ip); //inet_addr将点分十进制的ip地址转为二进制

	if (connect(c_client, (struct sockaddr*)&amp;addr, sizeof(addr)) == INVALID_SOCKET)
	{
		cout &lt;&lt; &quot;服务器连接失败！&quot; &lt;&lt; endl;
		WSACleanup();
	}
	else {
		cout &lt;&lt; &quot;服务器连接成功！&quot; &lt;&lt; endl;
	}
	return c_client;
}

int main() {
	//定义发送缓冲区和接受缓冲区长度
	char send_buf[BUFSIZ];
	char recv_buf[BUFSIZ];
	//定义客户端套接字，接受请求套接字
	SOCKET s_server;
	initialization(); // 初始化启动套接字
	s_server = createClientSocket(&quot;127.0.0.1&quot;);


	//发送,接收数据
	while (true) {
		cout &lt;&lt; &quot;请输入发送信息:&quot;;
		cin &gt;&gt; send_buf;
		if (send(s_server, send_buf, BUFSIZ, 0) &lt; 0) {
			cout &lt;&lt; &quot;发送失败！&quot; &lt;&lt; endl;
			break;
		}
		if (recv(s_server, recv_buf, BUFSIZ, 0) &lt; 0) {
			cout &lt;&lt; &quot;接受失败！&quot; &lt;&lt; endl;
			break;
		}
		else {
			cout &lt;&lt; &quot;服务端信息:&quot; &lt;&lt; recv_buf &lt;&lt; endl;
		}

	}
	//关闭套接字
	closesocket(s_server);
	//释放DLL资源
	WSACleanup();
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="server端代码c-非阻塞式" tabindex="-1"><a class="header-anchor" href="#server端代码c-非阻塞式" aria-hidden="true">#</a> Server端代码C++非阻塞式</h3>
<p>参考资料：<a href="https://blog.csdn.net/wlff_csdn/article/details/70510841" target="_blank" rel="noopener noreferrer">TCP Socket编程（非阻塞模式）（C++）<ExternalLinkIcon/></a></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#include&lt;iostream>
#include &lt;WinSock2.h>
#include &lt;WS2tcpip.h>
#include&lt;vector>
#include&lt;List>
using namespace std;
#pragma comment(lib,"ws2_32.lib")
#define PORT  65432
#define buff_len 500
int main_tcp_send()
{
    //初始化winsock2.DLL
    WSADATA wsaData;
    WORD wVersionRequested = MAKEWORD(2, 2);
    if (WSAStartup(wVersionRequested, &amp;wsaData) != 0)
    {
        cout &lt;&lt; "load winsock.dll failed！" &lt;&lt; endl;
        return 0;
    }
    //创建套接字
    SOCKET  sock_server;
    if ((sock_server = socket(AF_INET, SOCK_STREAM, 0)) == SOCKET_ERROR)
    {
        cout &lt;&lt; "create socket failed! error code:" &lt;&lt; WSAGetLastError() &lt;&lt; endl;
        WSACleanup();
        return 0;
    }
    //设置为非阻塞方式
    u_long ul = 1;
    if (ioctlsocket(sock_server, FIONBIO, &amp;ul) == SOCKET_ERROR)
    {
        cout &lt;&lt; "ioctlsocket failure, error:" &lt;&lt; GetLastError() &lt;&lt; endl;
        WSACleanup();
        return 0;
    }
    //绑定端口和Ip
    sockaddr_in addr;
    int addr_len = sizeof(struct sockaddr_in);
    addr.sin_family = AF_INET;
    addr.sin_port = htons(PORT);
    inet_pton(AF_INET, "127.0.0.1", &amp;addr.sin_addr);//绑定本机的环回地址
    if (SOCKET_ERROR == bind(sock_server, (SOCKADDR*)&amp;addr, sizeof(sockaddr_in)))
    {
        cout &lt;&lt; "addr bind failed! error code:" &lt;&lt; WSAGetLastError() &lt;&lt; endl;
        closesocket(sock_server);
        WSACleanup();
        return 0;
    }
    //将套接字设为监听状态
    int size=listen(sock_server, 0);
    if (size != 0)
    {
        cout &lt;&lt; "listen func use failed!\n";
        closesocket(sock_server);
        WSACleanup();
        return 0;
    }
    list&lt;SOCKET> liSock;//将连接的套接字存储在list中
    char msg[buff_len];//发送数据缓冲区
    char msgbuffer[buff_len];//接收数据缓冲区
    int n = 0; //标记已经连接的套接字数量
    int num = 0;
    //实现交互
    while (1)
    {
        num++;
        sockaddr_in  client_addr;
        auto sc = accept(sock_server, (struct sockaddr*)&amp;client_addr, &amp;addr_len);
        if (sc == INVALID_SOCKET)
        {
            if (GetLastError() == WSAEWOULDBLOCK)
            {
                cout &lt;&lt; "this time accept func has no client build link!" &lt;&lt; endl;
                Sleep(3000);//设置令其间隔一段时间
            }
            else
            {
                cout &lt;&lt; "accept func use failed! net not normal, program exit" &lt;&lt; endl;
                closesocket(sock_server);
                WSACleanup();
                return 0;
            }
        }
        else
        {
            cout &lt;&lt; "server link with: " &lt;&lt; sc &lt;&lt; "success!" &lt;&lt; endl;
            liSock.push_back(sc);//将建立连接的套接字压入list
        }
        auto it = liSock.begin();
        auto ccc = liSock.end();
        while (it != liSock.end())
        {
            auto itTemp = it++;
            cout &lt;&lt; "please input, server send data to client" &lt;&lt; *itTemp &lt;&lt; "." &lt;&lt; endl;
//            cin.getline(msg, sizeof(msg));
            sprintf(msg,"%d",num);
            int size = send(*itTemp, msg, sizeof(msg), 0);
//            int size = send(*itTemp, "abc", 4, 0);
            if (strcmp(msg, "end\0") == 0)
            {
                cout &lt;&lt; "close link with " &lt;&lt; *itTemp &lt;&lt; "!" &lt;&lt; endl;
                liSock.erase(itTemp);//移除已关闭连接的套接字
                system("pause");
            }
            if (size &lt;= 0)
            {
                if (GetLastError() == WSAEWOULDBLOCK)
                {
                    cout &lt;&lt; "Send data failure！\n";
                }
                else
                {
                    cout &lt;&lt; *itTemp &lt;&lt; " is closed" &lt;&lt; endl;
                    liSock.erase(itTemp);
                    system("pause");
                }
            }
        }
        it = liSock.begin();
        while (it != liSock.end())
        {
            auto itTemp = it++;
            size = recv(*itTemp, msgbuffer, sizeof(msgbuffer), 0);
            if (size &lt;= 0)
            {
                if (GetLastError() == WSAEWOULDBLOCK)
                {
                    cout &lt;&lt; "recv data failure！\n";
                }
                else
                {
                    cout &lt;&lt; *itTemp &lt;&lt; " is closed" &lt;&lt; endl;
                    liSock.erase(itTemp);
                    system("pause");
                }
            }
            else
            {
                cout &lt;&lt; *itTemp &lt;&lt; "   say:   " &lt;&lt; msgbuffer &lt;&lt; endl;
                system("pause");
            }
        }
    }
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>#include&lt;iostream&gt;
#include &lt;WinSock2.h&gt;
#include &lt;WS2tcpip.h&gt;
#include&lt;vector&gt;
#include&lt;List&gt;
using namespace std;
#pragma comment(lib,&quot;ws2_32.lib&quot;)
#define PORT  65432
#define buff_len 500
int main_tcp_send()
{
    //初始化winsock2.DLL
    WSADATA wsaData;
    WORD wVersionRequested = MAKEWORD(2, 2);
    if (WSAStartup(wVersionRequested, &amp;wsaData) != 0)
    {
        cout &lt;&lt; &quot;load winsock.dll failed！&quot; &lt;&lt; endl;
        return 0;
    }
    //创建套接字
    SOCKET  sock_server;
    if ((sock_server = socket(AF_INET, SOCK_STREAM, 0)) == SOCKET_ERROR)
    {
        cout &lt;&lt; &quot;create socket failed! error code:&quot; &lt;&lt; WSAGetLastError() &lt;&lt; endl;
        WSACleanup();
        return 0;
    }
    //设置为非阻塞方式
    u_long ul = 1;
    if (ioctlsocket(sock_server, FIONBIO, &amp;ul) == SOCKET_ERROR)
    {
        cout &lt;&lt; &quot;ioctlsocket failure, error:&quot; &lt;&lt; GetLastError() &lt;&lt; endl;
        WSACleanup();
        return 0;
    }
    //绑定端口和Ip
    sockaddr_in addr;
    int addr_len = sizeof(struct sockaddr_in);
    addr.sin_family = AF_INET;
    addr.sin_port = htons(PORT);
    inet_pton(AF_INET, &quot;127.0.0.1&quot;, &amp;addr.sin_addr);//绑定本机的环回地址
    if (SOCKET_ERROR == bind(sock_server, (SOCKADDR*)&amp;addr, sizeof(sockaddr_in)))
    {
        cout &lt;&lt; &quot;addr bind failed! error code:&quot; &lt;&lt; WSAGetLastError() &lt;&lt; endl;
        closesocket(sock_server);
        WSACleanup();
        return 0;
    }
    //将套接字设为监听状态
    int size=listen(sock_server, 0);
    if (size != 0)
    {
        cout &lt;&lt; &quot;listen func use failed!\n&quot;;
        closesocket(sock_server);
        WSACleanup();
        return 0;
    }
    list&lt;SOCKET&gt; liSock;//将连接的套接字存储在list中
    char msg[buff_len];//发送数据缓冲区
    char msgbuffer[buff_len];//接收数据缓冲区
    int n = 0; //标记已经连接的套接字数量
    int num = 0;
    //实现交互
    while (1)
    {
        num++;
        sockaddr_in  client_addr;
        auto sc = accept(sock_server, (struct sockaddr*)&amp;client_addr, &amp;addr_len);
        if (sc == INVALID_SOCKET)
        {
            if (GetLastError() == WSAEWOULDBLOCK)
            {
                cout &lt;&lt; &quot;this time accept func has no client build link!&quot; &lt;&lt; endl;
                Sleep(3000);//设置令其间隔一段时间
            }
            else
            {
                cout &lt;&lt; &quot;accept func use failed! net not normal, program exit&quot; &lt;&lt; endl;
                closesocket(sock_server);
                WSACleanup();
                return 0;
            }
        }
        else
        {
            cout &lt;&lt; &quot;server link with: &quot; &lt;&lt; sc &lt;&lt; &quot;success!&quot; &lt;&lt; endl;
            liSock.push_back(sc);//将建立连接的套接字压入list
        }
        auto it = liSock.begin();
        auto ccc = liSock.end();
        while (it != liSock.end())
        {
            auto itTemp = it++;
            cout &lt;&lt; &quot;please input, server send data to client&quot; &lt;&lt; *itTemp &lt;&lt; &quot;.&quot; &lt;&lt; endl;
//            cin.getline(msg, sizeof(msg));
            sprintf(msg,&quot;%d&quot;,num);
            int size = send(*itTemp, msg, sizeof(msg), 0);
//            int size = send(*itTemp, &quot;abc&quot;, 4, 0);
            if (strcmp(msg, &quot;end\0&quot;) == 0)
            {
                cout &lt;&lt; &quot;close link with &quot; &lt;&lt; *itTemp &lt;&lt; &quot;!&quot; &lt;&lt; endl;
                liSock.erase(itTemp);//移除已关闭连接的套接字
                system(&quot;pause&quot;);
            }
            if (size &lt;= 0)
            {
                if (GetLastError() == WSAEWOULDBLOCK)
                {
                    cout &lt;&lt; &quot;Send data failure！\n&quot;;
                }
                else
                {
                    cout &lt;&lt; *itTemp &lt;&lt; &quot; is closed&quot; &lt;&lt; endl;
                    liSock.erase(itTemp);
                    system(&quot;pause&quot;);
                }
            }
        }
        it = liSock.begin();
        while (it != liSock.end())
        {
            auto itTemp = it++;
            size = recv(*itTemp, msgbuffer, sizeof(msgbuffer), 0);
            if (size &lt;= 0)
            {
                if (GetLastError() == WSAEWOULDBLOCK)
                {
                    cout &lt;&lt; &quot;recv data failure！\n&quot;;
                }
                else
                {
                    cout &lt;&lt; *itTemp &lt;&lt; &quot; is closed&quot; &lt;&lt; endl;
                    liSock.erase(itTemp);
                    system(&quot;pause&quot;);
                }
            }
            else
            {
                cout &lt;&lt; *itTemp &lt;&lt; &quot;	say:	&quot; &lt;&lt; msgbuffer &lt;&lt; endl;
                system(&quot;pause&quot;);
            }
        }
    }
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="单server与多client通信" tabindex="-1"><a class="header-anchor" href="#单server与多client通信" aria-hidden="true">#</a> 单Server与多Client通信</h1>
<h2 id="windows版-1" tabindex="-1"><a class="header-anchor" href="#windows版-1" aria-hidden="true">#</a> Windows版</h2>
<p>参考链接：<a href="https://blog.csdn.net/qq_45929428/article/details/116709789" target="_blank" rel="noopener noreferrer">C++实现TCP服务器端同时和多个客户端通信(多线程)<ExternalLinkIcon/></a></p>
<h3 id="server端c-阻塞式-多线程" tabindex="-1"><a class="header-anchor" href="#server端c-阻塞式-多线程" aria-hidden="true">#</a> Server端C++阻塞式（多线程）</h3>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>#include &lt;WinSock2.h&gt;
#include &lt;WS2tcpip.h&gt;
#include &lt;iostream&gt;
using namespace std;
#pragma comment(lib, &quot;ws2_32.lib&quot;)
#define PORT 65432
DWORD WINAPI ThreadFun(LPVOID lpThreadParameter);
int main_tcp_send()
{
    //初始化winsock2.DLL
    WSADATA wsaData;
    WORD wVersionRequested = MAKEWORD(2, 2);
    if (WSAStartup(wVersionRequested, &amp;wsaData) != 0)
    {
        cout &lt;&lt; &quot;load winsock.dll failed！&quot; &lt;&lt; endl;
        return 0;
    }
    //创建套接字
    SOCKET  sock_server;
    if ((sock_server = socket(AF_INET, SOCK_STREAM, 0)) == SOCKET_ERROR)
    {
        cout &lt;&lt; &quot;create socket failed! error code:&quot; &lt;&lt; WSAGetLastError() &lt;&lt; endl;
        WSACleanup();
        return 0;
    }
    //绑定端口和Ip
    sockaddr_in addr;
    addr.sin_family = AF_INET;
    addr.sin_port = htons(PORT);
    inet_pton(AF_INET, &quot;127.0.0.1&quot;, &amp;addr.sin_addr);//绑定本机的环回地址
    if (SOCKET_ERROR == bind(sock_server, (SOCKADDR*)&amp;addr, sizeof(sockaddr_in)))
    {
        cout &lt;&lt; &quot;addr bind failed! error code:&quot; &lt;&lt; WSAGetLastError() &lt;&lt; endl;
        closesocket(sock_server);
        WSACleanup();
        return 0;
    }
    //将套接字设为监听状态
    listen(sock_server, 0);

    int i = 0;
    //主线程循环接收客户端的连接
    while (1)
    {
        sockaddr_in addrClient;
        int len = sizeof(sockaddr_in);
        //接收成功返回与client通讯的socket
        SOCKET con = accept(sock_server, (SOCKADDR*)&amp;addrClient, &amp;len);
        printf(&quot;the %dth time accept!\n&quot;, i + 1);
        if (con != INVALID_SOCKET)
        {
            //创建线程 并且传入与client通讯的套接字
            HANDLE hThread = CreateThread(NULL, 0, ThreadFun, (LPVOID)con, 0, NULL);
            CloseHandle(hThread); //关闭对线程的引用
        }
        cout &lt;&lt; &quot;===&quot; &lt;&lt; endl;
        if (i &gt;= 1) break;
        i++;
    }
    cout &lt;&lt; &quot;end&quot; &lt;&lt; endl;
    getchar();

    closesocket(sock_server);
    WSACleanup();
    return 0;
}
//线程通讯部分
DWORD WINAPI ThreadFun(LPVOID lpThreadParameter)
{
    //与客户端通讯 先发送再接收数据
    SOCKET sock = (SOCKET)lpThreadParameter;
    cout &lt;&lt; &quot;establish link with &quot; &lt;&lt; sock &lt;&lt; &quot; success!&quot; &lt;&lt; endl;
    while (1)
    {
        char msgbuffer[1000];//字符缓冲区
        printf(&quot;server send data to %d: aaa\n&quot;, sock);
        //cin.getline(msgbuffer, sizeof(msgbuffer));
        //int size = send(sock, msgbuffer, sizeof(msgbuffer), 0);//给客户端发送一段信息
        // 为了方便，我把server端的输入，改成了直接发aaa
        int size = send(sock, &quot;aaa&quot;, 4, 0);//给客户端发送一段信息
        if (strcmp(msgbuffer, &quot;end\0&quot;) == 0)
        {
            cout &lt;&lt; &quot;close link with &quot; &lt;&lt; sock &lt;&lt; &quot;!&quot; &lt;&lt; endl;
            return 0;
        }
        if (size == SOCKET_ERROR || size == 0)
        {
            cout &lt;&lt; &quot;send info failed! error code:&quot; &lt;&lt; WSAGetLastError() &lt;&lt; endl;
            return 0;
        }
        else cout &lt;&lt; &quot;info send success!&quot; &lt;&lt; endl;

        //接收客户端数据
        msgbuffer[999] = { 0 };
        int ret = recv(sock, msgbuffer, sizeof(msgbuffer), 0);
        if(ret == SOCKET_ERROR || ret == 0)
        {
            cout &lt;&lt; sock &lt;&lt; &quot;link breaked!&quot; &lt;&lt; endl;
            break;
        }
        else cout &lt;&lt; sock &lt;&lt; &quot;  say: &quot; &lt;&lt; msgbuffer &lt;&lt; endl;
    }
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="client端c-阻塞式" tabindex="-1"><a class="header-anchor" href="#client端c-阻塞式" aria-hidden="true">#</a> Client端C++阻塞式</h3>
<p>参考链接：<a href="https://blog.csdn.net/qq_45929428/article/details/116709789" target="_blank" rel="noopener noreferrer">C++实现TCP服务器端同时和多个客户端通信(多线程)<ExternalLinkIcon/></a></p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>#include &lt;winsock2.h&gt;
#include &lt;WS2tcpip.h&gt;
#include &lt;iostream&gt;
using  namespace std;
#pragma comment(lib, &quot;ws2_32.lib&quot;)
#define PORT 65432
int  main()
{
	//初始化winsock2.DLL
	WSADATA wsaData;
	WORD wVersionRequested = MAKEWORD(2, 2);
	if (WSAStartup(wVersionRequested, &amp;wsaData) != 0)
	{
		cout &lt;&lt; &quot;加载winsock.dll失败！&quot; &lt;&lt; endl;
		return 0;
	}
	//创建套接字
	SOCKET  sock_client;
	if ((sock_client = socket(AF_INET, SOCK_STREAM, 0)) == SOCKET_ERROR)
	{
		cout &lt;&lt; &quot;创建套接字失败！错误代码：&quot; &lt;&lt; WSAGetLastError() &lt;&lt; endl;
		WSACleanup();
		return 0;
	}
	//连接服务器
	sockaddr_in   addr;
	addr.sin_family = AF_INET;
	addr.sin_port = htons(PORT);
	inet_pton(AF_INET, &quot;127.0.0.1&quot;, &amp;addr.sin_addr);//绑定本机的环回地址
	int len = sizeof(sockaddr_in);
	if (connect(sock_client, (SOCKADDR*)&amp;addr, len) == SOCKET_ERROR) {
		cout &lt;&lt; &quot;连接失败！错误代码：&quot; &lt;&lt; WSAGetLastError() &lt;&lt; endl;
		return 0;
	}
	//实现交互部分，客户端先接收后发送数据
	while (1)
	{
		//接收服务端的消息
		char msgbuffer[1000] = { 0 };
		int size = recv(sock_client, msgbuffer, sizeof(msgbuffer), 0);
		if (strcmp(msgbuffer, &quot;end\0&quot;) == 0)
		{
			cout &lt;&lt; &quot;服务器端已经关闭连接！&quot; &lt;&lt; endl;
			break;
		}
		if (size &lt; 0)
		{
			cout &lt;&lt; &quot;接收信息失败！错误代码：&quot; &lt;&lt; WSAGetLastError() &lt;&lt; endl;
			break;
		}
		else if (size == 0)
		{
			cout &lt;&lt; &quot;对方已经关闭连接&quot; &lt;&lt; endl;
			break;
		}
		else cout &lt;&lt; &quot;The message from Server:&quot; &lt;&lt; msgbuffer &lt;&lt; endl;

		//从键盘输入一行文字发送给服务器
		msgbuffer[999] = 0;
		cout &lt;&lt; &quot;从键盘输入发给服务器的信息：&quot; &lt;&lt; endl;
		cin.getline(msgbuffer, sizeof(msgbuffer));
		if (strcmp(msgbuffer, &quot;end\0&quot;) == 0)
		{
			cout &lt;&lt; &quot;关闭连接！&quot; &lt;&lt; endl;
			break;
		}
		int ret = send(sock_client, msgbuffer, sizeof(msgbuffer), 0);
		if (ret == SOCKET_ERROR || ret == 0)
		{
			cout &lt;&lt; &quot;发送信息失败！错误代码：&quot; &lt;&lt; WSAGetLastError() &lt;&lt; endl;
			break;
		}
		else cout &lt;&lt; &quot;信息发送成功！&quot; &lt;&lt; endl;
	}
	closesocket(sock_client);
	WSACleanup();
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="server端python阻塞式-多线程" tabindex="-1"><a class="header-anchor" href="#server端python阻塞式-多线程" aria-hidden="true">#</a> Server端Python阻塞式（多线程）</h3>
<p>参考资料：<a href="http://www.3qphp.com/python/pybase/3884.html" target="_blank" rel="noopener noreferrer">python多线程实现TCP服务端<ExternalLinkIcon/></a></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 导入模块</span>
<span class="token keyword">import</span> socket
<span class="token keyword">import</span> threading


<span class="token comment"># 接收消息</span>
<span class="token keyword">def</span> <span class="token function">recv</span><span class="token punctuation">(</span>client_socket<span class="token punctuation">,</span> ip_port<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        client_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token string">"send test\n"</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        client_text <span class="token operator">=</span> client_socket<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>
        <span class="token comment"># 如果接收的消息长度不为0，则将其解码输出</span>
        <span class="token keyword">if</span> client_text<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"[客户端消息]"</span><span class="token punctuation">,</span> ip_port<span class="token punctuation">,</span> <span class="token string">":"</span><span class="token punctuation">,</span> client_text<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">"gbk"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token comment"># 给客户端响应</span>
            client_socket<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token string">"received\n"</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment"># 当客户端断开连接时，会一直发送''空字符串，所以长度为0已下线</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"客户端"</span><span class="token punctuation">,</span> ip_port<span class="token punctuation">,</span> <span class="token string">"已下线"</span><span class="token punctuation">)</span>
            client_socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">break</span>


<span class="token comment"># 程序主入口</span>
<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 创建TCP套接字</span>
    tcp_socket <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
    <span class="token comment"># 设置端口复用</span>
    tcp_socket<span class="token punctuation">.</span>setsockopt<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>SOL_SOCKET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SO_REUSEADDR<span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">)</span>
    <span class="token comment"># 绑定端口</span>
    tcp_socket<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token number">65432</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 设置为被动监听状态，128表示最大连接数</span>
    tcp_socket<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token comment"># 等待客户端连接</span>
        client_socket<span class="token punctuation">,</span> ip_port <span class="token operator">=</span> tcp_socket<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"[新客户端]:"</span><span class="token punctuation">,</span> ip_port<span class="token punctuation">,</span> <span class="token string">"已连接"</span><span class="token punctuation">)</span>
        <span class="token comment"># 有客户端连接后，创建一个线程将客户端套接字，IP端口传入recv函数，</span>
        t1 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>recv<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>client_socket<span class="token punctuation">,</span> ip_port<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment"># 设置线程守护</span>
        <span class="token comment"># Python多线程中的setDaemon: https://www.cnblogs.com/-wenli/p/12907355.html</span>
        <span class="token comment"># 当子线程不设置时(默认)，主进程结束后，子线程会继续执行完后，程序结束。</span>
        <span class="token comment"># 当设置时，主进程不会等待子线程，当主线程结束，子线程就会被强制停止运行并回收。</span>
        t1<span class="token punctuation">.</span>setDaemon<span class="token punctuation">(</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        <span class="token comment"># 启动线程</span>
        t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="server端代码c-非阻塞式-单线程" tabindex="-1"><a class="header-anchor" href="#server端代码c-非阻塞式-单线程" aria-hidden="true">#</a> Server端代码C++非阻塞式（单线程）</h3>
<p>参考资料：<a href="https://blog.csdn.net/qq_45929428/article/details/117133413" target="_blank" rel="noopener noreferrer">C++实现TCP服务器端非阻塞方式同时和多个客户端通信<ExternalLinkIcon/></a></p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>#include&lt;iostream&gt;
#include &lt;WinSock2.h&gt;
#include &lt;WS2tcpip.h&gt;
#include&lt;vector&gt;
#include&lt;List&gt;
using namespace std;
#pragma comment(lib,&quot;ws2_32.lib&quot;)
#define PORT  65432
#define buff_len 500
int main_tcp_send()
{
    //初始化winsock2.DLL
    WSADATA wsaData;
    WORD wVersionRequested = MAKEWORD(2, 2);
    if (WSAStartup(wVersionRequested, &amp;wsaData) != 0)
    {
        cout &lt;&lt; &quot;load winsock.dll failed！&quot; &lt;&lt; endl;
        return 0;
    }
    //创建套接字
    SOCKET  sock_server;
    if ((sock_server = socket(AF_INET, SOCK_STREAM, 0)) == SOCKET_ERROR)
    {
        cout &lt;&lt; &quot;create socket failed! error code:&quot; &lt;&lt; WSAGetLastError() &lt;&lt; endl;
        WSACleanup();
        return 0;
    }
    //设置为非阻塞方式
    u_long ul = 1;
    if (ioctlsocket(sock_server, FIONBIO, &amp;ul) == SOCKET_ERROR)
    {
        cout &lt;&lt; &quot;ioctlsocket failure, error:&quot; &lt;&lt; GetLastError() &lt;&lt; endl;
        WSACleanup();
        return 0;
    }
    //绑定端口和Ip
    sockaddr_in addr;
    int addr_len = sizeof(struct sockaddr_in);
    addr.sin_family = AF_INET;
    addr.sin_port = htons(PORT);
    inet_pton(AF_INET, &quot;127.0.0.1&quot;, &amp;addr.sin_addr);//绑定本机的环回地址
    if (SOCKET_ERROR == bind(sock_server, (SOCKADDR*)&amp;addr, sizeof(sockaddr_in)))
    {
        cout &lt;&lt; &quot;addr bind failed! error code:&quot; &lt;&lt; WSAGetLastError() &lt;&lt; endl;
        closesocket(sock_server);
        WSACleanup();
        return 0;
    }
    //将套接字设为监听状态
    int size=listen(sock_server, 0);
    if (size != 0)
    {
        cout &lt;&lt; &quot;listen func use failed!\n&quot;;
        closesocket(sock_server);
        WSACleanup();
        return 0;
    }
    list&lt;SOCKET&gt; liSock;//将连接的套接字存储在list中
    char msg[buff_len];//发送数据缓冲区
    char msgbuffer[buff_len];//接收数据缓冲区
    int n = 0; //标记已经连接的套接字数量
    int num = 0;
    //实现交互
    while (1)
    {
        num++;
        sockaddr_in  client_addr;
        auto sc = accept(sock_server, (struct sockaddr*)&amp;client_addr, &amp;addr_len);
        if (sc == INVALID_SOCKET)
        {
            if (GetLastError() == WSAEWOULDBLOCK)
            {
                cout &lt;&lt; &quot;this time accept func has no client build link!&quot; &lt;&lt; endl;
                Sleep(3000);//设置令其间隔一段时间
            }
            else
            {
                cout &lt;&lt; &quot;accept func use failed! net not normal, program exit&quot; &lt;&lt; endl;
                closesocket(sock_server);
                WSACleanup();
                return 0;
            }
        }
        else
        {
            cout &lt;&lt; &quot;server link with: &quot; &lt;&lt; sc &lt;&lt; &quot;success!&quot; &lt;&lt; endl;
            liSock.push_back(sc);//将建立连接的套接字压入list
        }
        auto it = liSock.begin();
        auto ccc = liSock.end();
        while (it != liSock.end())
        {
            auto itTemp = it++;
            cout &lt;&lt; &quot;please input, server send data to client&quot; &lt;&lt; *itTemp &lt;&lt; &quot;.&quot; &lt;&lt; endl;
//            cin.getline(msg, sizeof(msg));
            sprintf(msg,&quot;%d&quot;,num);
            int size = send(*itTemp, msg, sizeof(msg), 0);
//            int size = send(*itTemp, &quot;abc&quot;, 4, 0);
            if (strcmp(msg, &quot;end\0&quot;) == 0)
            {
                cout &lt;&lt; &quot;close link with &quot; &lt;&lt; *itTemp &lt;&lt; &quot;!&quot; &lt;&lt; endl;
                liSock.erase(itTemp);//移除已关闭连接的套接字
                system(&quot;pause&quot;);
            }
            if (size &lt;= 0)
            {
                if (GetLastError() == WSAEWOULDBLOCK)
                {
                    cout &lt;&lt; &quot;Send data failure！\n&quot;;
                }
                else
                {
                    cout &lt;&lt; *itTemp &lt;&lt; &quot; is closed&quot; &lt;&lt; endl;
                    liSock.erase(itTemp);
                    system(&quot;pause&quot;);
                }
            }
        }
        it = liSock.begin();
        while (it != liSock.end())
        {
            auto itTemp = it++;
            size = recv(*itTemp, msgbuffer, sizeof(msgbuffer), 0);
            if (size &lt;= 0)
            {
                if (GetLastError() == WSAEWOULDBLOCK)
                {
                    cout &lt;&lt; &quot;recv data failure！\n&quot;;
                }
                else
                {
                    cout &lt;&lt; *itTemp &lt;&lt; &quot; is closed&quot; &lt;&lt; endl;
                    liSock.erase(itTemp);
                    system(&quot;pause&quot;);
                }
            }
            else
            {
                cout &lt;&lt; *itTemp &lt;&lt; &quot;	say:	&quot; &lt;&lt; msgbuffer &lt;&lt; endl;
                system(&quot;pause&quot;);
            }
        }
    }
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="client端c-非阻塞式" tabindex="-1"><a class="header-anchor" href="#client端c-非阻塞式" aria-hidden="true">#</a> Client端C++非阻塞式</h3>
<p>参考资料：<a href="https://blog.csdn.net/wlff_csdn/article/details/70510841" target="_blank" rel="noopener noreferrer">TCP Socket编程（非阻塞模式）（C++）<ExternalLinkIcon/></a></p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>// TcpClient.cpp : 定义控制台应用程序的入口点。
//


#include &lt;winsock2.h&gt;
#include &lt;string&gt;
#include &lt;iostream&gt;

#pragma comment(lib,&quot;ws2_32.lib&quot;)
#define BUF_SIZE 64


int main(int argc, char* argv[])
{
	WSADATA wsd;
	SOCKET sHost;
	SOCKADDR_IN servAddr;
	char buf[BUF_SIZE];
	int retVal;
	//初始化Socket
	if (WSAStartup(MAKEWORD(2, 2), &amp;wsd) != 0)
	{
		printf(&quot;WSAStartup failed!\n&quot;);
		return -1;
	}
	//创建Socket
	sHost = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
	if (INVALID_SOCKET == sHost)
	{
		printf(&quot;socket failed!\n&quot;);
		WSACleanup();
		return -1;
	}
	//设置Socket为非阻塞模式
	int iMode = 1;
	retVal = ioctlsocket(sHost, FIONBIO, (u_long FAR*) &amp; iMode);
	if (retVal == SOCKET_ERROR)
	{
		printf(&quot;ioctlsocket failed!\n&quot;);
		WSACleanup();
		return -1;
	}
	//设置服务器Socket地址
	servAddr.sin_family = AF_INET;
	servAddr.sin_port = htons(65432);
	servAddr.sin_addr.S_un.S_addr = inet_addr(&quot;127.0.0.1&quot;);//htonl(INADDR_ANY);

	int sServerAddlen = sizeof(servAddr);

	//连接到服务器
	while (true)
	{
		retVal = connect(sHost, (LPSOCKADDR)&amp;servAddr, sizeof(servAddr));
		if (SOCKET_ERROR == retVal)
		{
			int err = WSAGetLastError();
			if (err == WSAEWOULDBLOCK || err == WSAEINVAL)
			{
				Sleep(1000);
				printf(&quot;try next connect!\n&quot;);
				continue;
			}
			else if (err == WSAEISCONN)
			{
				break;
			}
			else
			{
				printf(&quot;connection failed!\n&quot;);
				closesocket(sHost);
				WSACleanup();
				return -1;
			}
		}
	}

	//收发数据
	while (true)
	{
		printf(&quot;Please input a string to send:&quot;);
		std::string str;
		std::getline(std::cin, str);
		ZeroMemory(buf, BUF_SIZE);
		strcpy_s(buf, str.c_str());
		while (true)
		{
			retVal = send(sHost, buf, strlen(buf), 0);
			if (SOCKET_ERROR == retVal)
			{
				int err = WSAGetLastError();
				if (err == WSAEWOULDBLOCK)
				{
					Sleep(500);
					continue;
				}
				else
				{
					printf(&quot;send failed!\n&quot;);
					closesocket(sHost);
					WSACleanup();
					return -1;
				}
			}
			break;

		}

		while (true)
		{
			ZeroMemory(buf, BUF_SIZE);
			retVal = recv(sHost, buf, sizeof(buf) + 1, 0);
			if (SOCKET_ERROR == retVal)
			{
				int err = WSAGetLastError();
				if (err == WSAEWOULDBLOCK)
				{
					Sleep(100);
					printf(&quot;waiting back msg!\n&quot;);
					continue;
				}
				else if (err == WSAETIMEDOUT || err == WSAENETDOWN)
				{
					printf(&quot;recv failed!\n&quot;);
					closesocket(sHost);
					WSACleanup();
					return -1;
				}
				break;
			}
			break;

		}
		printf(&quot;Recv From Server:%s\n&quot;, buf);
		if (strcmp(buf, &quot;quit&quot;) == 0)
		{
			printf(&quot;quit!\n&quot;);
			break;
		}
	}

	closesocket(sHost);
	WSACleanup();
	system(&quot;pause&quot;);

	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="server端python非阻塞式-单线程" tabindex="-1"><a class="header-anchor" href="#server端python非阻塞式-单线程" aria-hidden="true">#</a> Server端Python非阻塞式（单线程）</h3>
<p>参考资料：[<a href="https://www.cnblogs.com/vathe/p/7001127.html" target="_blank" rel="noopener noreferrer">python实现单线程多任务非阻塞TCP服务端<ExternalLinkIcon/></a>](https://www.cnblogs.com/vathe/p/7001127.html)</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># coding:utf-8</span>
<span class="token keyword">from</span> socket <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token comment"># 1.创建服务器socket</span>
sock <span class="token operator">=</span> socket<span class="token punctuation">(</span>AF_INET<span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">)</span>

<span class="token comment"># 2.绑定主机和端口</span>
addr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">,</span> <span class="token number">65432</span><span class="token punctuation">)</span>  <span class="token comment">#</span>
sock<span class="token punctuation">.</span>bind<span class="token punctuation">(</span>addr<span class="token punctuation">)</span>

<span class="token comment"># 3. 设置最大监听数目，并发</span>
sock<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>

<span class="token comment"># 4. 设置成非阻塞</span>
sock<span class="token punctuation">.</span>setblocking<span class="token punctuation">(</span><span class="token boolean">False</span><span class="token punctuation">)</span>
<span class="token comment"># 保存客户端socket</span>
clientAddrList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment"># print(sock.)</span>

<span class="token keyword">while</span> <span class="token number">1</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        clientSocket<span class="token punctuation">,</span> clientAddr <span class="token operator">=</span> sock<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"accepp!"</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
        <span class="token comment"># print("accept failed!")</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"一个新客户端到来：%s"</span> <span class="token operator">%</span> <span class="token builtin">str</span><span class="token punctuation">(</span>clientAddr<span class="token punctuation">)</span><span class="token punctuation">)</span>
        clientSocket<span class="token punctuation">.</span>setblocking<span class="token punctuation">(</span><span class="token boolean">False</span><span class="token punctuation">)</span>
        clientAddrList<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span>clientSocket<span class="token punctuation">,</span> clientAddr<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> clientSocket<span class="token punctuation">,</span> clientAddr <span class="token keyword">in</span> clientAddrList<span class="token punctuation">:</span>
        <span class="token comment"># try:</span>
        <span class="token comment">#     # 给客户端响应</span>
        <span class="token comment">#     clientSocket.send("received\n".encode())</span>
        <span class="token comment"># except:</span>
        <span class="token comment">#     pass</span>
        <span class="token comment"># else:</span>
        <span class="token comment">#     pass</span>

        <span class="token keyword">try</span><span class="token punctuation">:</span>
            recvData <span class="token operator">=</span> clientSocket<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span><span class="token punctuation">:</span>
            <span class="token keyword">pass</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>recvData<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"%s:%s"</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>clientAddr<span class="token punctuation">)</span><span class="token punctuation">,</span> recvData<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                clientSocket<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
                clientAddrList<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token punctuation">(</span>clientSocket<span class="token punctuation">,</span> clientAddr<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"%s 已经下线"</span> <span class="token operator">%</span> <span class="token builtin">str</span><span class="token punctuation">(</span>clientAddr<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<p>===</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/377770586" target="_blank" rel="noopener noreferrer">基于Visual Studio C++TCP服务器多线程非阻塞模式Socket模型服务器高级网络编程技术研究<ExternalLinkIcon/></a></li>
</ul>
<p>这个介绍原理比较详细，比如非阻塞式，多线程机制，三次握手等。</p>
</div></template>


