// for (const i of [1, 2, 3, 4]) {
//   console.log(i)
// }
import { createElement, Component, render } from './toy-react'
class MyComponent extends Component {
  render() {
    return <div>
      <h1>my component</h1>
      {this.children}
    </div>
  }
}

render(<MyComponent id="id" class="class">
  <div>test</div>
  <div></div>
  <div></div>
</MyComponent>, document.body)