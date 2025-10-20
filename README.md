# sanny-class - San 类组件框架开发助手

一个专为 San 类组件框架开发的 VS Code 扩展，提供智能代码补全和开发效率提升功能。

## 功能特性

### 🚀 San 类模板快速生成
- 输入 `sanclass` 即可快速生成完整的 San 类模板
- 自动包含模板、组件、生命周期方法等标准结构

### 🎯 智能 HTML 属性补全
- 根据当前标签智能推荐相关属性
- 支持所有标准 HTML 标签的属性补全
- 包含全局属性和事件处理器的智能提示

### ⚡ San 指令补全
- 支持 San 框架特有指令的智能补全：
  - `s-html` - 插入 HTML 内容
  - `s-if` / `s-else` / `s-elif` - 条件渲染
  - `s-for` - 列表渲染
  - `s-show` - 显示/隐藏
  - `s-bind` - 属性绑定

### 🔗 自定义组件补全
- 自动识别 `static components` 中定义的组件
- 在模板中智能提示自定义组件标签
- 自动生成完整的组件标签结构

## 安装方法

### 从 VS Code Marketplace 安装
1. 打开 VS Code
2. 进入扩展面板 (Ctrl+Shift+X)
3. 搜索 "sanny-class"
4. 点击安装

## 使用方法

### 生成 San 类模板
在 JavaScript/TypeScript 文件中输入 `sanclass` 并触发补全：

```javascript
export default class Demo {
    static template = /* html */ `
        <div></div>
    `;

    static components = {};

    initData() {
        return {};
    }

    static computed = {};

    static messages = {};

    inited() {}

    attached() {}
}
```

### 模板代码高亮
在template中定义的html模板高亮展示，需要在字符串前加上/* html */，无需再单独使用其他插件

```javascript
export default class Demo {
    static template = /* html */ `
        <div></div>
    `;

}
```

### HTML 属性补全

```html
<div class="container" s-if="condition">
    <!-- 输入空格后会自动提示 class, id, style 等属性 -->
    <!-- 输入 s- 会自动提示 San 指令 -->
</div>
```

### 自定义组件补全
当定义了组件后，在模板中输入 `my/user` 会自动提示可用组件：

```javascript
static components = {
    'my-button': ButtonComponent,
    'user-card': UserCard
};
```

在模板中：
```html
<my-button></my-button>
<user-card></user-card>
```

## 支持的标签和属性

扩展支持所有标准 HTML5 标签及其相关属性，包括：

- **结构标签**: `div`, `span`, `section`, `article` 等
- **表单标签**: `input`, `button`, `form`, `select` 等  
- **媒体标签**: `img`, `video`, `audio` 等
- **表格标签**: `table`, `tr`, `td`, `th` 等

每个标签都有对应的专有属性和全局属性支持。

## 更新日志

### v0.0.1 (当前版本)
- ✅ San 类模板快速生成
- ✅ HTML 属性智能补全  
- ✅ San 指令补全支持
- ✅ 自定义组件补全功能
- ✅ 标准 HTML5 标签全面支持


**享受更高效的 San 框架开发体验！** 🎉