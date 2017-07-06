import { h, Component } from 'preact';

import Heading from '../components/Heading';

export default class NotFound extends Component {
  constructor(props) {
    super(props);

    const notFoundHeading = {
      id: '404',
      title: '错误404',
      more_text: '',
      more_link: '',
    };

    this.state = { notFoundHeading };
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
          <Heading data={this.state.notFoundHeading} />
          <div className="article">
            <div className="article-content">
              <p>404 - 页面未找到</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}