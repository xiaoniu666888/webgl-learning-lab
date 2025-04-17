# 第一个三角形

1. 获取画布，创建三维上下文对象

```js
const canvas = document.getElementById("glCanvas")
const gl = canvas.getContext("webgl")
```

2. 创建顶点并将顶点数据存储到当前绑定的 webgl 缓冲区中

```js
const vertices = new Float32Array([0.0, 1.0, -1.0, -1.0, 1.0, -1.0])
// 创建顶点缓冲区, 可用于存储顶点数据或着色器数据
const buffer = gl.createBuffer()
// 把buffer绑定到webgl的`ARRAY_BUFFER`目标上, 表示接下来的操作将会作用在这个缓冲区上
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
// 使用webgl的bufferData方法把顶点数据存储到当前绑定的缓冲区中
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
```

3. 定义顶点着色器和片元着色器

```js
// attribute: 变量修饰符，用于顶点着色器，定义从顶点缓冲区传入的变量
const vertexShaderSource = `
        attribute vec2 position;
        void main() {
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `
// 定义片元着色器
// 将片元颜色设置为红色
const fragmentShaderSource = `
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `
```

4. 创建和编译顶点着色器

```js
// 创建顶点着色器
const vertexShader = gl.createShader(gl.VERTEX_SHADER)
gl.shaderSource(vertexShader, vertexShaderSource)
// 编译顶点着色器
gl.compileShader(vertexShader)
```

5. 创建和编译片元着色器

```js
// 创建片元着色器
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
gl.shaderSource(fragmentShader, fragmentShaderSource)
// 编译片元着色器
gl.compileShader(fragmentShader)
```

6. 创建着色器程序对象

```js
// 创建着色器程序
const program = gl.createProgram()
// 把顶点着色器和片元着色器附加到程序对象上
gl.attachShader(program, vertexShader)
gl.attachShader(program, fragmentShader)
// 链接程序对象
gl.linkProgram(program)
// 使用程序对象
gl.useProgram(program)
```

7. 设置顶点属性

```js
const positionAttributeLocation = gl.getAttribLocation(program, "position")
// 启用顶点属性
gl.enableVertexAttribArray(positionAttributeLocation)
gl.vertexAttribPointer(
  positionAttributeLocation, // 属性位置
  2, // 每个顶点的分量数量
  gl.FLOAT, // 数据类型
  false, // 是否归一化
  0, // 步长
  0 // 偏移量
)
```

8. 清空画布和绘制三角形

```js
gl.clearColor(0.0, 0.0, 0.0, 1.0) // 设置清空画布的颜色
gl.clear(gl.COLOR_BUFFER_BIT) // 清空画布
gl.drawArrays(gl.TRIANGLES, 0, 3) // 绘制三角形
```
