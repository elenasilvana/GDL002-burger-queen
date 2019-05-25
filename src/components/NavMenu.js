import React from 'react';
//bootstrap style imports
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class NavMenu extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 'menu desayuno',
    };
  }

  render() {
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
      >
        <Tab eventKey="menu desayuno" title="Desayuno">
          lala
        </Tab>
        <Tab eventKey="menu normal" title="Normal">
          lolo
        </Tab>
      </Tabs>
    );
  }
}


export default NavMenu;