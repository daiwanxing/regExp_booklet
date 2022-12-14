

### Anchor (锚)

1. 什么是锚

锚指的是相邻字符与字符之间的位置(我更愿意称之为缝隙)，如下的`↑`表示为锚的位置.

```md
↑ H ↑ E ↑ L ↑ L ↑ O ↑
```

在ES5中共有6个锚点

1. ^ (起点锚）
```md
    ↑ HELLO
```
3. $ (终点锚)
```md
    HELLO ↑
```
5. \b (单词之间的锚)
```md
    ↑Hello↑ ↑World!↑
```
7. \B (非单词之间的锚)
```md
    H↑e↑l↑l↑o W↑o↑r↑l↑d!↑
```
9. (?=p)  followed by: p (前瞻断言)
10. (?!p)  not-followed by: p (否定的前瞻断言)

第五、六点需要额外多费些口水解释其作用.

`(?=p)`, 其中p只是一个"指代",这里的p可以理解为一个模式， p前面拼接一个`?=`表示匹配p前面的位置

`(?!p)` 和 `(?=p)`意思相反，其正则的含义是：***找到任意锚点位后面的字符不是`p`的位置*** 

来看下面的示例：

```js

var words = "开水矿泉水纯净水";

const pl = /(?=水)/g;

const nl = /(?!水)/g;

words.replace(pl, "💧"); // 开💧水矿泉💧水纯净💧水

words.replace(nl, "💧"); // 💧开水💧矿💧泉水💧纯💧净水

```

在这个示例里，我声明了一个words变量，包含了一串字符串

第一个正则pl将全局匹配`水`字符前面的位置并插入一个emoji符号，第二个正则nl将全局匹配非`水`字符前面的位置并插入一个emoji符号.

通过上面的例子，我们知道了`(?=p)` 和 `(?!p)`所指代的作用`.

在es6中还新增两个锚点

1. (?<=p) behind p （后瞻断言）

2. (?<!p) not-behind p （否定的后瞻断言）

***非v8引擎的主流浏览器直到2022年也未能支持后瞻断言，对说的没错，就是你，safari!***

其中`(?<=p)` 表示在匹配的模式p后面的位置

而`(?<!p)`就是`(?<=p)`的反面意思，含义是 ***锚点的位置不能在模式`p`的后面***。

我们再借助最初的例子增加几道小题以便加深对通过正则匹配字符串位置的掌握:

题目一：在每个`水`字符的后面插入一个emoji符号
<details><summary>查看答案</summary>
<code>
words.replace(/(?<=水)/g, "💧"); // 开水💧矿泉水💧纯净水💧'
</code>
</details><br/>

题目二: 在变量`words`的值前面插入一个emoji.
<details><summary>查看答案</summary>
<code>
words.replace(/^/g, "💧"); // 💧开水矿泉水纯净水
</code>
</details><br/>

题目三: 在变量`words`的值后面插入一个emoji.

<details><summary>查看答案</summary>
<code>
words.replace(/$/g, "💧"); // 开水矿泉水纯净水💧
</code>
</details><br />

题目四: 在变量`words`的每个字符中插入一个emoji.

<details><summary>查看答案</summary>
<code>
words.replace(/\B/g, "💧"); // 💧开💧水💧矿💧泉💧水💧纯💧净💧水
</code>
</details><br />

题目五: 在变量`words`的`水`字符的前面与后面插入一个emoji.

<details><summary>查看答案</summary>
<code>
words.replace(/(?<=水)|(?=水)/g, "💧"); // 开💧水💧矿泉💧水💧纯净💧水💧'
</code>
</details><br />

题目六：在变量`words`的每个字符中插入一个emoji(开头和结尾不插入).

<details><summary>查看答案</summary>
<code>
words.replace(/(?!(^|$))/g, "💧"); // 开💧水💧矿💧泉💧水💧纯💧净💧水'
</code>
</details><br />


关于正则中的前瞻断言、后瞻断言更多内容，可以阅读这篇文章：[距离弄懂正则的环视，你只差这一篇文章](https://segmentfault.com/a/1190000023099976)
