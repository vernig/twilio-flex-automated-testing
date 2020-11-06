import React from 'react';
import renderer from 'react-test-renderer';

import CustomTaskList from '../CustomTaskList/CustomTaskList';

describe('CustomTaskListComponent Snapshot', () => {
  it('compare demo component to snapshot', (done) => {
    const props = {
      isOpen: true,
      dismissBar: () => undefined,
    };
    const tree = renderer.create(<CustomTaskList {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
    done();
  });
});
