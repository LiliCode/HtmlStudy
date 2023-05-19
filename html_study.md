# HTML笔记

## 一些基本概念

1. HTML被称作为`超文本标记语言`
2. HTML文档用来描述网页
3. HTML文档由`HTML标签`和`纯文本`组成
4. HTML最基本的组成结构
    ```html
    <html>
        <head>
            <meta 这里填写网页基本信息>
            <title>在这里展示标题</title>
        </head>
        <body>
            <!-- 在 body 标签里面填写自己需要展示标签 -->
        </body>
    </html>
    ```
5. html 元素就是开始标签到结束标签之间的代码
6. 空格的表示方法：`&nbsp;`

## HTML 标签

1. 标题标签 H1 ~ H6，字体大小从大到小
    ```html
    <h1>这是一级标题</h1>
    <h2>这是二级标题</h2>
    <!-- 一次类推 -->
    <h6>这是六级标题</h6>
    ```
2. 水平线：hr
3. 段落： p
    ```html
    <p>这里是一个P标签</p>
    ```
4. 换行：br
5. 超链接：a
    ```html
    <a href="https://www.baidu.com">点击我在当前页面加载网页</a>
    <br>
    <a href="https://www.baidu.com" target="_blank">点击我在新的页面加载网页</a>
    ```
    a标签实现锚文本链接：
    ```html
    <!-- 跳转到某个标签，必须在 href 属性上面使用 # 加 name 的方式 -->
    <a href="#first">跳 First</a>
    <br/>
    <a href="#secound">跳 Secound</a>
    <br>
    <!-- 需要跳转到某个标签，必须在该标签上面设置 name 属性 -->
    <a name="first" href="">First</a>
    <br>
    <a name="secound" href="">Secound</a>
    ```
6. 图像标签: img
    ```html
    <!-- src 图片的地址，alt 图片加载失败展示的文字 -->
    <img class="image" src="https://img0.baidu.com/it/u=2373785398,1181389904&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="图片加载失败">
    ```
7. 视频标签: video
8. 无序列表：ul li, 每一行前面是一个点
    ```html
    <ul>
        <li>列表1</li>
        <li>列表1</li>
        <li>列表1</li>
    </ul>
    ```
9. 有序列表: ol li, 每一行前面是一个序号
    ```html
    <ol>
        <li>列表1</li>
        <li>列表1</li>
        <li>列表1</li>
    </ol>
    ```
10. 表格: table, th 表头，tr 每一行，td 每一列, border 边框
    ```html
    <table border="1px">
        <tr>
            <th>第一项</th>
            <th>第二项</th>
            <th>第三项</th>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
        </tr>
    </table>
    ```
11. b标签，用于字体加粗
    ```html
    <b>这里是一个b标签</b>
    ```
12. span 标签(文本容器，没特定的含义)
    ```html
    <span>这里是一个 span 标签</span>
    ```
13. em 标签(文字斜体)
    ```html
    <em>这里是一个 em 标签</em>
    ```
14. div 标签，用于组合其他 html 元素的容器
    ```html
    <div>
        <span>我在 div 容器中显示</span>
    </div>
    ```

## 标签样式属性

在开始标签里面添加 `style` 属性就可以设置样式，例如：

```html
<p style="color: red;">哈哈哈啊</p>
```

style 中的每一个属性后面必须使用 `;` 隔开

## HTML 表单

表单是一个包含表单元素的区域。表单元素是在表单中允许用户输入信息的元素（比如文本输入，单选框，复选框）。

表单中的输入元素都必须包含在 `form` 标签中。

1. `input` 输入标签的 type 值：

    - text 文本输入
    - radio 单选框
    - checkbox 多选框
    - submit 提交

2. 文本域，多行文本使用 `textarea`
3. 下拉框使用 `select` 和 `option`


```html
<form action="">
    文本输入: <input type="text" name="name" placeholder="请输入名称">
    <br>
    文本域: <textarea name="" id="" cols="30" rows="2"></textarea>
    <br>
    单选框: <input type="radio" name="sex">男&nbsp;&nbsp;<input type="radio" name="sex">女
    <br>
    多选框: <input type="checkbox">语文&nbsp;<input type="checkbox">数学&nbsp;<input type="checkbox">物理
    <br>
    下拉框: 
    <select name="select" id="">
        <option value="0">语文</option>
        <option value="0">数学</option>
        <option value="0">物理</option>
        <option value="0">生物</option>
        <option value="0">英语</option>
    </select>
    <br>
    <input type="submit" value="提交">
</form>
```

## 内联框架

内联框架使用 `iframe` ，需要设置地址，宽度高度

```html
<iframe src="https://www.baidu.com/" frameborder="0" width="320" height="640"></iframe>
```

点击一个a标签，将网页展示在 iframe 中，需要将 iframe 中的 src 去掉，新增加一个 name 属性，在 a 标签上面填写 href 的网址，然后增加一个 target 属性，属性内容就是 iframe 的 name 值。

```html
<iframe name="baidu" frameborder="0" width="320" height="640"></iframe>
<br>
<a href="https://www.baidu.com/" target="baidu">点我在上面展示百度</a>
```

## HTML 块

### 简介

1. 块级元素在展示时，通常会以新行开始，比如: h1, p, ul, ol, table
2. 内联元素，在显示的时候不会以新行开始，比如：img, td, b

### div

块级元素，用于组合其他 html 元素的容器，div 没有特定的含义。

### span

内联元素，没有特定的含义，用于文本展示和文本的样式设置。

## HTML媒体

1. 音频，使用 `audio` 标签，需要添加 `controls="controls"` 才能展示播放界面
    ```html
    <audio controls="controls">
        <source src="http://m10.music.126.net/20230519192354/7f0bbd03e1abcb2eef9488afb41d3950/ymusic/5626/9cb1/3940/235a81e36cdc8cb9c6fc9e97514d88e3.mp3", type="audio/mpeg">
    </audio>
    ```

2. 视频，使用 `video` 标签，需要添加 `controls="controls"` 才能展示播放界面
    ```html
    <video src="https://v2.kwaicdn.com/ksc2/nO43mc4Vgwrk2cpAEwGElto-whUXm6NSuQ83aeL6yNor-saRC5bkZW7l8nVGUo8Mj9PjXmXugEFMINZjL9o95G0FRdCfaNTB2DGPU9xydqDehsxVuGlfrSDOpaBB6tDbjd0DZwCU1gwzqHQ2epqRtdHxY2QRTw_M11-v1mSd5BvpHXSr0hKouE0RaV4n1Pr2.mp4?pkey=AAV9X3a8j6I7tHN2PdZhk3ZMoBw6DVcNjGZIxNdPsYtTtQapPBpHgxMhWawe7RiErxkWg4T-GCt_51MlxgkotJwLwtkg9OFRra-qoZ22rUTvoUYG2bv94AY7xsd_RPA0GFQ&tag=1-1684494435-unknown-0-12xsfuxye7-d1bfd8e035d9e353&clientCacheKey=3x26g6cy9c46dxe_hd15.mp4&di=76741204&bp=10004&tt=hd15&ss=vp" type="video/mpeg" controls="controls" width="320" height="640"></video>
    ```
