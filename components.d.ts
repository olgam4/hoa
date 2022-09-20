export {}
declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      draggable: Boolean
      droppable: Boolean
      handsize: Number
    }
  }
}
