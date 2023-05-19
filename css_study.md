# CSS 笔记

## 什么是 CSS?

css 全名叫 `层叠样式表`，是用来描述 html UI样式的。

css 样式由选择器和属性组成，例如：

```html
<style>
    selector {
        font-size: 30px;
        color: blue;
        font-weight: 700;
    }
</style>
```

- selector 就是选择器，css 中选择器有：类选择器，标签选择器，id选择器
- font-size 就是样式属性，这里是文字大小

## 使用 CSS 样式的几种方式

1. 内联样式，在 html 标签的第一个标签里面添加 style 属性，在属性里面添加样式，这个样式只对当前标签有效
    ```html
    <p style="color: red; font-size: large;">css的内联样式</p>
    ```
2. 内部样式，使用 style 标签，在 style 标签中添加样式，内部样式仅仅针对当前文件有效
    ```html
    <style>
    .pClass {
        font-size: 30px;
        color: blue;
        font-weight: 700;
    }
    </style>
    ```
3. 外部样式，定一个 .css 文件，在里面写入样式，在 head 标签内使用 `link` 标签导入
    ```html

    ```

## 选择器

>选择器用于选择 html 元素

1. 标签选择器: 会选择页面上所有的这个标签的元素，选择同类标签
    ```html
    <style>
        p {
            font-size: 30px;
        }
    </style>
    ```
2. 类选择器: 可以多个标签归类，使用同一个class，可以复用。 格式：.class的名称{}
    ```html
    <style>
        .class {
            font-size: 30px;
        }
    </style>
    ```
3. id选择器: id必须保证全局唯一，同类选择器类似。 格式：#id名称{}
    ```html
    <style>
        #id {
            font-size: 30px;
        }
    </style>
    ```
4. 属性选择器，只要是用到这个属性的标签，都可以指定样式
    ```html
    <style>
        a[title] {
            font-size: 20px;
            color: orange;
        }
    </style>
    ```
5. 通用选择器
    ```html
    <style>
        * {
            font-family: "PingFang SC";
        }
    </style>
    ```

## 复合选择器

复合选择器是由两个或多个基础选择器，通过不同的方式组合而成的,目的是为了可以选择更准确更精细的目标元素标签。

### 几种复合选择器

1. 后代选择器

    后代选择器又称为包含选择器，可以选择父元素里面子元素。其写法就是把外层标签写在前面，内层标签写在后面，中间用空格分隔。当标签发生嵌套时，内层标签就成为外层标签的后代。

    ```html
    <div>
        <p class="name">My name is tom</p>
    </div>

    <style>
        div .name {
            color: red;
            font-size: 20px;
        }
    </style>
    ```

2. 子选择器

    子元素选择器（子选择器）只能选择作为某元素的最近一级子元素。(亲儿子才行)

    ```html
    <div>
        <p class="tel">电话号码: 19908782342</p>
    </div>

    <style>
        div > .tel {
            color: blueviolet;
        }
    </style>
    ```

3. 并集选择器 

    并集选择器可以选择多组标签, 同时为他们定义相同的样式，通常用于集体声明。并集选择器是各选择器通过英文逗号（,）连接而成，任何形式的选择器都可以作为并集选择器的一部分。

    ```html
    <h2>这是二级标题</h2>
    <h3>这是三级标题</h3>
    <h4>这是二级标题</h4>

    <style>
        h2,h3,h4 {
            color: cadetblue;
        }
    </style>
    ```
4. 伪类选择器

    定义: 伪类选择器用于向某些选择器添加特殊的效果，比如给链接添加特殊效果，或选择第1个，第n个元素。

    语法：用冒号（:）表示，比如 :hover 、 :first-child 

5. :focus 伪类选择器

    :focus 伪类选择器用于选取获得焦点的表单元素。

7. 交集选择器

    由两个选择器构成，其中第一个为标签选择器，第二个为class选择器，两个选择器之间不能有空格

    ```html
    <p class="descrp">这里是个人描述</p>
    <p class="tel">电话号码: 19908782342</p>

    <style>
        p.descrp {
            color: green;
        }
    </style>
    ```
    这里既要是 p 标签又要是 descrp 类的才能使用这个样式

### 复合选择器思维导图

![](https://img-blog.csdnimg.cn/6e47fd76f45d449f938326db95cf911a.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGVsbG9fZGFzaGVu,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

## css 优先级

1. 相同的规则按照加载顺序，写在后面的优先级最高
2. 继承下来的样式永远低于直接指定的样式
3. 内联样式优先级最高，`!important` 除外
4. id选择器 > 类选择器 > 标签选择器

>注意：内部样式和外部样式优先级需要按照加载顺序决定，在后面加载的优先级更高一些。

继承下来的样式优先级示例:

    ```html
    <div class="extends">
        <span>这里测试继承样式</span>
    </div>

    <style>
        .extends {
            color: crimson;
        }

        div span {
            color: chocolate;
        }
    </style>
    ```

    上述代码，指定了 div 的样式，设置了颜色，所以 span 就继承了父标签 div 的样式，然后又单独制定了 span 的样式，所以文字颜色就是 chocolate。

!important 示例：

    ```html
    <span class="testImportant">这里测试 !important</span>

    <style>
        .testImportant {
            color: aquamarine !important;
        }

        .testImportant {
            color: brown;
        }
    </style>
    ```

    上述代码，span 中的文字颜色为 aquamarine。

## 盒子模型

每个元素，都会形成一个矩形块，主要包括四部分：margin(外边距)+border(边框)+padding(内边距)+content(内容)

示例代码

```html
<div class="box">
    <div class="content"></div>
</div>

<style>
.box {
    background-color: blueviolet;
    width: 100px;
    height: 100px;
    border: 10px solid black;
    padding: 10px 20px 10px 20px;
    margin: 8px 9px 8px 9px;
}

.box .content {
    background-color: cadetblue;
    width: 100px;
    height: 100px;
}
</style>
```

## 弹性布局

弹性盒子（Flexbox）布局是一种为一维布局而设计的布局方法。一维的意思是你希望内容是按行或者列来布局。你可以使用display: flex来将元素变为弹性布局。

```html
<style>
    .container {
        display: flex;
    }
</style>
```

### 弹性布局的参数

1. `display`	指定 HTML 元素的盒子类型
2. `flex-direction` 设置布局方向, `row` 水平方向布局，`column` 垂直方向布局, `row-reverse` 水平方向反转，`column-reverse` 垂直方向反转。

    ```html
    <style>
        .container {
            display: flex;
            flex-direction: row;
        }
    </style>
    ```

3. `flex-wrap` 设置当弹性盒子的子元素超出父容器时是否换行
4. `flex-flow` 是 `flex-direction` 和 `flex-wrap` 两个属性的简写
5. `justify-content` 设置弹性盒子中元素在主轴（横轴）方向上的对齐方式
6. `align-items` 设置弹性盒子中元素在侧轴（纵轴）方向上的对齐方式
7. `align-content` 修改 flex-wrap 属性的行为，类似 align-items，但不是设置子元素对齐，而是设置行对齐
8. `order` 设置弹性盒子中子元素的排列顺序
9. `align-self` 在弹性盒子的子元素上使用，用来覆盖容器的 align-items 属性
10. `flex` 设置弹性盒子中子元素如何分配空间
11. `flex-grow` 设置弹性盒子的扩展比率
12. `flex-shrink`	设置弹性盒子的收缩比率
13. `flex-basis` 设置弹性盒子伸缩基准值

