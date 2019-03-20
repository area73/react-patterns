# Static Prop Component

you can create function components as static properties!
for example:

  static Candy = (props) => <div>CANDY! {props.children}</div><br/>
  Then that could be used like: <Toggle.Candy /><br/>
  This is handy because it makes the relationship between the
  parent Toggle component and the child Candy component more explicit
  
  🐨 You'll need to create three such components here: On, Off, and Button
  The button will be responsible for rendering the <Switch /> (with the right props)
  
  💰 Combined with changes you'll make in the `render` method, these should
  be able to accept `on`, `toggle`, and `children` as props.
  
  Note that they will _not_ have access to Toggle instance properties
  like `this.state.on` or `this.toggle`.
