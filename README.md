# vuex_demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

在state中定义了count、userInfo、students三个属性,state里面的数据状态可以在全局中被访问，在任意组件中通过this.$store.state.attrName访问，在demo.vue的computed属性里面，我们获取了以上三个属性
getter中可以自定义一些函数对state属性里面的数据进行过滤，并且在任意组件中可以通过this.$store.gettter.functionName的方式获取
mutaions用来更新state里面的状态，我们可以定义一些方法对数据进行操作，在里面的方法中至少有state和value两个参数，state就是上面所说的state对象（属性），value就是从组件传递来的值。可以看到，在demo.vue中点击加号按钮或者减号按钮，通过this.$store.commit('getUserInfo',count)的方式向vuex提交了一个事件，在store.js中mutaions里面的updateCount将提交过值接收并进行处理，state里面的count状态被更新，这是demo组件的computed属性中的number被执行，然后紧接着dom被更新。
actions也是对state状态进行更新，但是是间接的，一些异步的操作先交给actions里面的函数执行，拿到结果后在交给mutaions中相应的处理函数处理，接下来的操作就跟上面讲的一样。
点击获取用户信息按钮，通过this.$store.dispatch('getUserInfo',this)向vuex提交了一个事件，store.js中actions的getUserInfo函数处理了这个事件，向本地一个user.json文件发了一个异步请求，难道结果后将返回的用户信息交给了mutaions的getUserInfo函数处理，state的userInfo属性被改变，userInfo的变化导致demo.vue中computed属性的userInfo被执行，接着dom更新，用户信息被显示。

作者：blueprint
链接：https://juejin.im/post/5b3cdc6af265da0fa759aced
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
