export default function (
  gl,
  vertexID = "vertex-shader",
  fragmentID = "fragment-shader"
) {
  // 1. 创建着色器对象
  const vertexShader = gl.createShader(gl.VERTEX_SHADER)
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
  // 2. 获取着色器源码
  const vertexSource = document.getElementById(vertexID).innerText
  const fragmentSource = document.getElementById(fragmentID).innerText
  // 3. 绑定着色器源码并编译
  gl.shaderSource(vertexShader, vertexSource)
  gl.shaderSource(fragmentShader,fragmentSource)
  gl.compileShader(vertexShader)
  gl.compileShader(fragmentShader)
  // 4. 创建着色器程序对象
  const program = gl.createProgram()
  // 5. 将着色器附加到着色器对象
  gl.attachShader(program, vertexShader)
  gl.attachShader(program,fragmentShader)
  // 6. 链接着色器程序对象, 将顶点着色器和片元着色器链接成一个完整的可执行对象
  gl.linkProgram(program)
  gl.useProgram(program)
  return program
}
