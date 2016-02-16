import Component from 'components/component';
import React, {PropTypes} from 'react';

export default class Edit extends Component {
  static propTypes = {
    shadow: PropTypes.object.isRequired,
    changeShadow: PropTypes.func.isRequired
  };

  static options = [
    {
      type: 'Columns',
      options: [
        {
          label: 'Color',
          type: 'Color',
          id: 'color'
        },
        {
          label: 'Blur',
          type: 'Pixels',
          id: 'blur'
        }
      ]
    },
    {
      type: 'Columns',
      options: [
        {
          label: 'X',
          type: 'Pixels',
          id: 'x'
        },
        {
          label: 'Y',
          type: 'Pixels',
          id: 'y'
        }
      ]
    },
    {
      type: 'Columns',
      options: [
        {
          label: 'Spread',
          type: 'Pixels',
          id: 'spread'
        },
        {
          label: 'Inset/Outset',
          type: 'ShadowPosition',
          id: 'type'
        }
      ]
    }
  ];

  render () {
    const {shadow} = this.props;

    return (
      <div className='box-shadow-edit white-options'>
        <this.props.OptionsList options={Edit.options} values={shadow} onChange={this.props.changeShadow} />
      </div>
    );
  }
}