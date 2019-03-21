# Component as Static Prop

you can create function components as static properties

for example:

  static Open = (props) => <div>component opened {props.children}</div><br/>
  Then that could be used like: <Hamburger.Open /><br/>
  This is handy because it makes the relationship between the
  parent <Hamburger/> component and the child <Open> component more explicit
  
<StaticProp>
  <StaticProp.Burger/>
  <StaticProp.Open> OPEN </StaticProp.Open>
  <StaticProp.Close> CLOSE </StaticProp.Close>
</StaticProp>
  
  
