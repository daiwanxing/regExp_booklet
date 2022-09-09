### 正则表达式优化

#### 提取分支公共的部分

例子： 匹配所有以`scss`、`css`、`less`、`sass`后缀名结尾的文件

```js
const inputStr =  "foo.ts bar.css fn.scss component.vue";
```
先将这些样式类型文件公共的部分提取出来：`ss` -> `/ss/`

再分析sass和scss都是以`s`开头, 紧接着的可能是`a`或者`c`，可以得到如下正则: `/(?:s(a|c)ss)/`,


最后单独对`less`中的`le`字符和`css`中的`c`字符做提取处理,
`/(?:(?:le|c)ss)/`

合并上述两个正则表达式, 可以得到如下结构

```js
/\w+\.(s(a|c)|le|c)ss/;

"foo.ts bar.css fn.scss component.vue".match(/\w+\.(?:s(?:a|c)|le|c)ss/g); 
// ['bar.css', 'fn.scss']
```

上面用到了捕获型分组引用，会将匹配的结果暂时存入到内存，以便引用该分组，在这里我们不需要反向引用分组，也不需要将分组匹配结果存入到内存，
可以再进一步做优化：

```js
/\w+\.(?:s(?:a|c)|le|c)ss/;
```
