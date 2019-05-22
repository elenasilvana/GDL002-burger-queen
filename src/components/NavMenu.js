import React from 'react';
//bootstrap style imports
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class NavMenu extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 'home',
    };
  }

  render() {
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
      >
        <Tab eventKey="home" title="Desayuno">
          <h1>lolo</h1>
        </Tab>
        <Tab eventKey="profile" title="Normal">
          <h1>lala</h1>
        </Tab>
      </Tabs>
    );
  }
}


export default NavMenu;