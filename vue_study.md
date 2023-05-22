# Vue3 基础

Vue 是一个 javascript 的渐进式 UI 框架，单个模块可以使用，单个页面也可以使用，整个项目也可以使用。

## Hello World

1. 去这个链接 `https://unpkg.com/vue@3/dist/vue.global.js` 下载 Vue.js 代码，点击保存即可。
2. 创建一个 index.html 和 index.js 文件，并在 index.html 中导入刚才保存的 vue.global.js 文件
    ```html
    <script src="../lib/vue.global.js"></script>
    ```
3. 创建一个 div 元素，并设置 id 为 app。
    ```html
    <body>
        <!-- 导入 vue.global.js -->
        <script src="../lib/vue.global.js"></script>
        <div id="app"></div>
        <!-- 导入 index.js -->
        <script src="index.js"></script>
    </body>
    ```
4. 在 index.js 中添加如下代码
    ```javascript
    const app = Vue.createApp({
        // 在这里添加数据
        data() {
            return {
                message: 'Hello world',
            }
        },
    })
    app.mount('#app')
    ```
    上面代码的意思是创建一个 Vue 示例，并挂载到 id 为 app 的标签上面，data 中 定义一个 message 的属性。
5. 在 id 为 app 的标签中放置一个 span，并通过 `{{message}}` 的方式设置值
    ```html
    <div id="app">
        <span>{{message}}</span>
    </div>
    ```

通过上面的步奏就可以将 Hello world 展示在页面上了。

## API 风格

1. 选项式
2. 组合式

## 创建项目

使用 npm 创建项目

```shell
npm init vue@latest
```

这个指令会执行 `create-vue`，它是 Vue 官方的脚手架。

>Project Name 工程名不能有大写

## 模版语法

Vue 使用了一种基于 HTML 的模版语法，是我们能够声明式的将组建示例数据绑定到所呈现的 DOM 上面，所有的 Vue 模版语法都是语法层面上合法的 HTML，可以被复合规范的浏览器解析。

### {{ }} 语法

使用  {{ value }} 进行插值，例如将一个属性 message 值插入到 span 标签中

```html
<span>{{ message }}</span>

<script>
export default {
    data() {
        return {
            message: '这是一个测试数据'
        }
    }
}
</script>
```

>注意：插值必须是单一的表达式并且必须有返回值。不能使用 if else var 等。可以使用三目运算符

## Vue 指令

1. v-html 指令

    使用 v-html 指令可以向页面插入 html 标签。

    ```html
    <div v-html="rawHtml"></div>

    <script>
        export default {
            data() {
                return {
                    rawHtml: '这里是一个插入的html标签'
                }
            }
        }
    </script>
    ```

2. v-bind 指令

    使用 v-bind 动态绑定一些参数，有 v-bind: id、v-bind: class、vi-bind: hidden v-bind: disabled 等等

    ```html
    <div v-bind:class="dynamicClass"></div>

    <script>
        export default {
            data() {
                return {
                    dynamicClass: 'dynamicClass',
                }
            }
        }
    </script>

    <style>
        .dynamicClass {
            background-color: red;
            width: 100px;
            height: 100px;
        }
    </style>
    ```

    绑定的简写，不需要写 v-bind, 直接在需要绑定值的属性前面添加 `:`，例如：:class="redClass", :id="redId"

3. 条件渲染 v-if v-else-if v-else v-show

    1. v-if 条件为真的时候才会`渲染`标签，条件为 false 则会将元素移除掉，如果频繁的切换会造成不必要的开销
    1. v-show 条件为真时才会`显示`标签，条件为 false 怎会隐藏，但是这个标签还在页面上，这个是操作 css 样式的 display 来实现的。`display: none;` 就不显示，`display: block;` 就显示。v-show 适合频繁的切换显示与隐藏。

    ```html
    <div v-if="true">这里是条件渲染 v-if</div>
    <div v-else>看得到我了，哈哈哈</div>

    <div v-show="true">这里测试 v-show</div>
    ```

    v-if 和 v-show 的区别：

    1. v-if 不显示的时候直接从页面移除，有较高的切换开销。
    2. v-show 不显示时，标签还存在在页面，有较高的初始渲染开销。适合频繁切换显示与隐藏

4. 列表渲染 v-for

    使用 v-for  通过列表数据动态渲染一个列表。

    ```html
    <ul>
        <li v-for="name in books">{{ name }}</li>
    </ul>
    <!-- 数据源 -->
    <script>
        export default {
            data() {
                return {
                    books: ['鸟哥的私房菜', '钢铁是怎样炼成的', '第十三只眼睛', '圣经'],
                }
            }
        }
    </script>
    ```

    v-for 遍历数组的参数：`v-for="(value, index) in array"`
    v-for 遍历对象(字典)的参数: `v-for="(value, key, index) in map"`

    >**注意**
    列表每条数据的唯一 key，通过数据绑定可以设置 :key="index"，适合数据经常变化的列表。

5.  事件处理 v-on

    v-on 可以简写成 @，例如 v-on: click 简写成 @click

    ```html
    <button v-on:click="showAlert">点我弹出 alert</button>

    <script>
        export default {
            methods: {
                showAlert() {
                    alert('哈哈哈哈');
                },
            }
        }
    </script>
    ```

    点击按钮就会在浏览器中弹出一个对话框。

    事件参数：

    1. 如果在调用函数的时候，没有穿参数，那么方法默认存在一个 event 对象
        ```html
        <button v-on:click="onClick">点我弹出 alert</button>

        <script>
            export default {
                methods: {
                    onClick(e) {
                        // e 的类型时 Event
                    },
                }
            }
        </script>
        ```
    2. 在调用时传递参数，如果需要在函数中获取 event 对象，则可以在参数后面在增加一个 `$event` 参数
        ```html
        <button v-on:click="onClick('哈哈哈', $event)">点我弹出 alert</button>

        <script>
            export default {
                methods: {
                    onClick(msg, e) {
                        // e 的类型时 Event
                    },
                }
            }
        </script>
        ```

    阻止默认事件，在 click 后面跟一个 `.prevent` 就可以。

        ```html
        <a @click.prevent="clickA" href="https://www.baidu.com/">点击我跳转</a>

        <script>
            export default {
                methods: {
                    clickA() {
                        console.log('点击了a标签')
                    }, 
                }
            }
        </script>
        ```
    
    阻止事件冒泡，在 click 后面跟一个 `.stop` 就可以。假如一个 div 标签放在了另一个 div 标签中，两个标签都实现事件，点击的同时会触发两个，下面例子通过 .stop 实现阻止事件冒泡

        ```html
        <div @click="click1">
            <div @click.stop="click2">点击我，，，阻止事件冒泡</div>
        </div>

        <script>
            export default {
                methods: {
                    click1() {
                        console.log('事件1')
                    },
                    click2() {
                        console.log('事件2')
                    }, 
                }
            }
        </script>
        ```
    还有更多请查阅官方文档。

## 数组变化监听

数组的下列方法会引起 UI 的变化：

    - push()
    - pop()
    - shift()
    - unshift()
    - splice()
    - sort()
    - reverse()

如下示例:

    ```html
    <ul>
      <li v-for="name in books">{{ name }}</li>
    </ul>
    <button @click="addBook">点击我向列表添加数据</button>

    <script>
       export default {
         data() {
            books: ['鸟哥的私房菜', '数字信号处理', '高频电路'],
         },
         methods: {
            addBook() {
                this.books.push('数字电路')
            }
         },
       }
    </script>
    ```

如果使用 `concat()` `slice()` `filter()` 函数，不会引起 UI 的变化。使用  this.books = this.books.concat(['哈哈']) 即可发生 UI 变化。``

## 计算属性

使用 computed 属性去定义计算属性

```html
<template>
    <p>这里有{{ bookCount }}本书</p>
</template>

<script>
    export default {
        // 声明计算属性
        computed: {
            bookCount() {
                return this.books.length
            }
        },
    }
</script>
```

计算属性和方法都可以实现类似的功能，但是还是有区别的，计算属性在 vue 中是以函数的方式实现，但是数据源没有改变，计算属性就会获取上一次的计算结果（获取缓存），而方法会每一次都去计算一次。

## class 和 style 绑定增强

class style 都可以绑定对象和数组

```html
<div :class="{'redClass': true, 'blueClass': false}" :style="{width: '150px', height: '100px'}"></div>
```

## 属性监听器

vue 中在 `watch` 对象中做属性变化的监听，如下所示

```html
<template>
    <p>{{ message }}</p>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Hello',
            }
        },
        watch: {
            // 写一个和你想要监听的属性相同名字的函数，
            // new 就是新值，old 就是旧值
            message(new, old) {
                // 在这里做你的业务逻辑
            }
        }
    }
</script>
```

## 数据绑定指令 v-model

使用 v-model 将属性和表单输入值绑定在一起。

```html
<input type="text" v-model="textInputValue" placeholder="请输入">
<p>{{ textInputValue.length > 0? textInputValue : '没有输入任何东西' }}</p>

<script>
    export default {
        data() {
            return {
                textInputValue: '',
            }
        },
    }
</script>
```

上述代码，在输入的时候，下边的 p 标签也会跟着显示输入值。

修饰符: .lazy .number .trim

- `.lazy` 不会时时更新，在输入框失去焦点才会更新
- `.number` 只能输入数字
- `.trim` 去掉空格


## 操作 DOM

在对应的标签上面添加 `ref` 属性，然后在 vue 中使用 `this.$refs` 操作 DOM

```html
<template>
    <div ref="container">哈哈哈</div>
    <button @click="replaceContainerText">点击我替换上面的文字</button>
</template>

<script>
    export default {
        methods: {
            replaceContainerText() {
                this.$refs.container.innerHTML = '呵呵'
            }
        }
    }
</script>
```

上述代码，点击按钮之后，“哈哈哈” 变成了 “呵呵”。

## 自定义组件

1. 创建一个 vue 单文件，文件名: HelloWorld.vue，内容如下所示
    ```html
    <template>
        <div style="background-color: red;">
            <div>Hello World</div>
            <p>这里是一个自定义组件</p>
        </div>
    </template>
    ```
2. 在需要使用的地方引用这个组件
    ```js
    import HelloWorld from "./components/HelloWorld.vue"
    ```
3. 注册组件
    ```js   
    export default {
        //  在 vue 的 components 中注册
        components: {
            HelloWorld,
        }
    }
    ```
4. 使用组件
    ```html
    <HelloWorld />
    ```

上述方法注册组件使用的时局部注册，只能在当前文件中使用，要想在任意文件使用，需要全局注册。

1. 在 main.js 中引入这个组件
    ```js
    import HelloWorld from "./components/HelloWorld.vue"
    ```
2. 使用 Vue 示例注册组件
    ```js
    app.component("HelloWorld", HelloWorld)
    ```
    然后就可以在任意文件中使用。

## Props 组件传值

### Props 的声明

一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props。

```html
<template>
    <div>{{ message }}</div>
</template>

<script>
    export default {
        props: ['message'],
    }
</script>
```

上述代码是定一个 props，props 必须是数组，参数必须是字符串的形式，假设这个组件名称叫 Hello，那么调用的时候使用 <Hello message="你好"/>

>**注意**
>- props 传值只能是从父组件传递子组件，只能是正向传值。
>- props 传值可以传递任意类型。

### Props 的类型校验

可以在声明 props 的时候指定类型。例如：

```js
export default {
    props: {
        message: {
            type: String,
        }
    },
}
```

定义 props 最好是使用上述方式，有类型检查。

### props 的默认值

使用 `default` 定义默认值
- 字符串和数字的默认值，可以直接设置
- 数组和对象的默认值，需要以函数的方式返回

```js
export default {
    props: {
        // 字符串和数字的默认值，可以直接设置
        message: {
            type: String,
            default: ""
        },
        count: {
            type: Number,
            default: 0
        },
        // 数组和对象的默认值，需要以函数的方式返回
        names: {
            type: Array,
            default() {
                return []
            }
        },
        info: {
            type: Object,
            default() {
                return {}
            }
        }
    },
}
```

### props 的必选项设置

可以设置这个 props 的是否是必须传值, 使用关键字 `required`，值 ture false

```js
export default {
    props: {
        // 字符串和数字的默认值，可以直接设置
        message: {
            type: String,
            default: ""
            required: true,
        },
    },
}
```

综上所述 props 有三种参数可以选择
- type 类型
- default 默认值
- required 是否必须传递

>**注意**
props 中的属性是只读的，不可以修改。

 ## 组件事件

 有时候组件需要向外部传递数据，这个时候就可以使用 `this.$emit` 向外发送事件

 ```html
<template>
    <p>组件事件</p>
    <button @click="buttonEventHandler">来打我</button>
</template>

<script>
    export default {
        methods: {
            buttonEventHandler() {
                // 使用 $emit
                // 第一个参数就是事件名称，也就是调用这个组件上面的事件名称
                // 第二个参数就是事件参数
                this.$emit('onClick', '来打我啊傻逼')
            }
        }
    }
</script>
 ```

 这里实现调用的代码，假设这个组件名称叫 CustomView

 ```html
<template>
    <!-- onClick 就是 $emit 的第一个参数 -->
    <CustomView @onClick="helloEvent"/>
</template>

<script>
    export default {
        methods: {
            helloEvent(e) {
                console.log(e)
            }
        }
    }
</script>
 ```

>**温馨提示**
>组件之间传值的方案
>- 父传子使用 `props`
>- 回传（组件事件）使用 `$emit` 自定义事件

## 使用 props 自定义组件事件

通过给 props 传递一个函数，然后在组件内拿到这个函数做回调也可以实现 $emit 一样的功能。

```html
<template>
    <button @click="fkMeEvent">来砍我啊</button>
</template>

<script>
    export default {
        props: {
            callback: {
                type: Function,
            }
        },
        methods: {
            fkMeEvent() {
                if (this.callback != null) {
                    this.callback('来看我啊')
                }
            }
        }
    }
</script>
```

使用这个组件

```html
<template>
    <Component :callback="fkEvent"/>
</template>

<script>
    export default {
        methods: {
            fkEvent(e) {
                // 在这个回调中，做自己的事情
                console.log(e)
            }
        },
    }
</script>
```

综上所述，组件事件有两种方式实现
- $emit 发送事件
- props 传递一个函数做回调

## 插槽 Slots

某些场景中，我们需要向一个组件传递一个 HTML 模版（组件），这个时候就可以使用 `Slots` 插槽

### 插槽的基本使用

使用如下代码声明一个插槽的位置
```html
<slot></slot>
```
意思就是，使用这个标签替换需要插入的 HTML 模版。

示例，创建一个组件 SlotDemo.vue

```html
<template>
    <h2>插槽的使用</h2>
    <slot></slot>
</template>
```

如何使用

```html
<template>
    <SlotDemo>
        <p>测试插槽</p>
        <p>哈哈哈</p>
    </SlotDemo>
</template>
```

### 插槽的渲染作用域

插槽的内容可以访问到父组件的数据作用域，插槽内容本身就是在父组件中实现的。

### 插槽默认值

```html
<slot>这里是默认值</slot>
```

### 具名插槽

有的时候在组件内不止一个地方需要插入 HTML 模版，如果有多个 slot ，这个时候就需要设置一个名字来区分。

在 slot 标签中设置一个 name

```html
<template>
    <slot name="header"></slot>
    <p>具名插槽</p>
    <slot name="footer"></slot>
</template>
```

使用这个组件 

```html
<template>
    <SlotDemo>
        <!-- 使用一个 template 组件包裹 -->
        <!-- 设置名字的时候使用 v-slot: name 或者简写 #name -->
        <template #header>
            <p>这里是 header</p>
        </template>
        <template #footer>
            <p>这里是 footer</p>
        </template>
    </SlotDemo>
</template>
```

### 使用组件内部的数据

有一种场景，插槽的 html 模版需要使用组件内部的数据，如下代码所示

1. 基本使用：创建一个组件，放置一个 slot 标签，并设置一个 msg 属性

```html
<template>
    <p>使用内部数据</p>
    <slot :msg="msg"></slot>
</template>

<script>
export default {
    data() {
        return {
            msg: '这是内部数据',
        }
    }
}
</script>
```

如何使用

```html
<template v-slot="data">
    <p>{{ data.msg }}</p>
</template>
```

这样就可以展示组件内部的数据了。

2. 具名插槽使用内部数据

在 slot 标签里面设置一个名称并赋值

```html
<template>
    <slot name="header" :msg="title"></slot>
    <p>使用内部数据</p>
    <slot name="footer" :msg="msg"></slot>
</template>

<script>
export default {
    data() {
        return {
            msg: '这是内部数据',
            title: '这里是标题'
        }
    }
}
</script>
```

如何使用

```html
<!-- 可以通过 v-slot: header="data" 这种方式获取组件内部的数据 -->
<!-- 这里推荐简写 -->
<template #header="data">
   <p>{{ data.title }}</p>
</template>
<template #footer="data">
    <p>{{ data.msg }}</p>
</template>
```

## Vue 的生命周期

1. beforeCreate 组件创建前
2. created 组件创建后
3. beforeMount 组件渲染前
4. mounted 组件渲染后，UI已经展示完成
5. beforeUpdate 组件更新前状态
6. updated 组件更新后，数据完成更改，DOM 重新渲染完成
7. beforeUnmount 组件销毁之前执行
8. unmounted 组件已经销毁，DOM元素存在，只是不再受 Vue 控制

组件生命周期分为以下几个阶段

| 生命周期   | 执行前前 | 执行后 |
|  ----  | ----  | ---- |
| 创建 | beforeCreate | created |
| 挂载  | beforeMount | mounted |
| 刷新 | beforeUpdate | updated |
| 卸载  | beforeUnmount | unmounted |

如下代码所示

```html
<template>
    <h1>组件生命周期</h1>
</template>

<script>
export default {
  // 组件生命周期函数
  beforeCreate() {
    console.log('组件创建之前')
  },
  created() {
    console.log('组件已经创建')
  },
  beforeMount() {
    console.log('组件渲染之前')
  },
  mounted() {
    console.log('组件渲染完成')
  },
  beforeUpdate() {
    console.log('组件更新之前')
  },
  updated() {
    console.log('组件已经更新')
  },
  beforeUnmount() {
    console.log('组件销毁之前')
  },
  unmounted() {
    console.log('组件已经销毁')
  }
}
</script>
```

## 动态组件

有些场景需要来回切换组件的显示，例如一个App首页，拥有多个 Tab 可以切换页面，这个时候就需要用到动态组件。

动态组件使用 `<component />` 去展示组件。

如下创建了两个组件

组件A

```html
<template>
  <div class="contaiiner">
    <h2>这里是组件A</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>
```

组件B

```html
<template>
  <div class="contaiiner">
    <h2>这里是组件B</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>
```

在下面这个组件中展示两个组件，动态切换

```html
<template>
  <div class="container">
    <component class="content" :is="currentComponent"/>
    <div class="tab">
      <button @click="changeComponent('ComponentA')">组件A</button>
      <button @click="changeComponent('ComponentB')">组件B</button>
    </div>
  </div>
</template>

<script>
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';

export default {
  components: {
    ComponentA, ComponentB,
  },
  data() {
    return  {
      currentComponent: 'ComponentA',
    }
  },
  methods: {
    // 切换组件
    changeComponent(e) {
      this.currentComponent = e
    },
  },
}
</script>
```

## 组件保活

上面的动态组件中，来回切换组件A和组件B，会导致没切换一次都会被销毁/创建一次组件，这样就不能达到状态保持，不是我们想要的结果，我们可以使用 <keep-alive /> 组件进行保活。

所以上面的 component 的代码可以这么写。

```html
<keep-alive>
    <component class="content" :is="currentComponent"/>
</keep-alive>
```

## 异步组件

在大型项目中，一个App首页可能存在四五个页面，如果同时加载了这五个页面，会导致网络请求几乎同时请求，会造成性能上的影响。为了解决这个问题，引入了异步组件。

如何使用异步组件

1. 导入 defineAsyncComponent 函数
    ```js
    import { defineAsyncComponent } from 'vue';
    ```
2. 使用 defineAsyncComponent 函数异步获取组件
    ```js
    const ComponentA = defineAsyncComponent(() => import('./ComponentA.vue'))
    ```

这样就可以实现异步加载了。

## 依赖注入

通常情况下，当我们需要从父组件向子组件传递数据时，会使用 props。想象一下这样的结构：有一些多层级嵌套的组件，形成了一颗巨大的组件树，而某个深层的子组件需要一个较远的祖先组件中的部分数据。在这种情况下，如果仅使用 props 则必须将其沿着组件链逐级传递下去，这会非常麻烦。

`provide` 和 `inject` 可以帮助我们解决这一问题。 一个父组件相对于其所有的后代组件，会作为依赖提供者。任何后代的组件树，无论层级有多深，都可以注入由父组件提供给整条链路的依赖。

## Provide 提供者

要为组件后代提供数据，需要使用到 `provide` 选项

```js
export default {
  provide: {
    message: 'hello world'
  }
}
```

对于 provide 对象上的每一个属性，后代组件会用其 key 为注入名查找期望注入的值，属性的值就是要提供的数据。

### Inject 注入

要注入上层组件提供的数据，需使用 inject 选项来声明：

```js
export default {
  inject: ['message'],
  created() {
    console.log(this.message) // injected value
  }
}
```

注入会在组件自身的状态之前被解析，因此你可以在 data() 中访问到注入的属性：

```js
export default {
  inject: ['message'],
  data() {
    return {
      // 基于注入值的初始数据
      fullMessage: this.message
    }
  }
}
```

### 全局注入（应用层 Provide）

除了在一个组件中提供依赖，我们还可以在整个应用层面提供依赖：

```js
import { createApp } from 'vue'

const app = createApp({})

app.provide(/* 注入名 */ 'message', /* 值 */ 'hello!')
```

在应用级别提供的数据在该应用内的所有组件中都可以注入。这在你编写插件时会特别有用，因为插件一般都不会使用组件形式来提供值。

