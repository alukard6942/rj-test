import Alert from '../components/Alert';
import QrBox from '../components/QrBox';
import Tabs from '../components/Tabs';
import React from 'react';

class homeFunction extends React.Component {
  constructor(props) {
    super(props);

    this.contextHandeler = this.contextHandeler.bind(this);

    this.state = {
      contextTab: 0,
    };
  }

  contextHandeler(curTab) {
    this.setState({
      contextTab: curTab,
    });
  }

  tabData = () => [
    <QrBox key="1" userAccountCode={'8662794092'} />,
    <QrBox key="1" userAccountCode={'1896194979'} />,
    <QrBox key="1" userAccountCode={'8465321568'} />,
    <QrBox key="1" userAccountCode={'3286126548'} />,
  ];

  render() {
    return (
      <div className="p-5 max-w-[max-content]">
        <Alert>Info</Alert>
        <Alert> Current selected tab: {this.state.contextTab}</Alert>
        <div className="h-20" />
        <Tabs navItems={[0, 1, 2, 3]} contextHandeler={this.contextHandeler}>
          {this.tabData()}
        </Tabs>
      </div>
    );
  }
}

homeFunction.displayName = 'MyApp';

export default homeFunction;
