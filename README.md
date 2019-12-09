# introduce

thanks to the original author https://github.com/excaliburhan/vue-pop-colorpicker  

I found him not maintain this and left some bug ,so I copy one and republish a package to fix bugs


感谢原作者，由于本人发现该作者已经不更新并且留了一堆bug，因此复制了一份，并修复了这些bug然后重新发包

# vue-colorpicker-pop
基于vue-color和element-ui的一个弹出式的颜色选择组件。

支持直接手动更改hex或rgba等颜色值。

支持多种样式的颜色选择器，目前支持：`chrome`, `compact`, `material`, `photoshop`, `sketch`, `slider`, `swatches`。默认为`chrome`。

## 安装

> npm install vue-pop-colorpicker --save

## 使用

### 全局组件

```javascript
import VueColorpicker from 'vue-colorpicker-pop'
Vue.use(VueColorpicker)
```


### 局部组件

``` javascript
import { VueColorpicker } from 'vue-colorpicker-pop'

new Vue({
  components: {
    'color-picker': VueColorpicker
  },
  data () {
    return {
      color: '#fff',
    }
  },
  methods: {
    onChange (color) {
      console.log(color)
    }
  }
})

<color-picker v-model="color" @change="onChange"></color-picker>
```

## 其他

- 颜色选择器功能是vue-color中fork的
- popup功能是element-ui中fork的
