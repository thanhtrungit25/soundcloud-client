import Stream from './presenter';
import { mount, shallow } from 'enzyme';

describe('Stream', () => {
  const props = {
    tracks: [{ title: 'x' }, { title: 'y' }],
  };
  it('shows two elements', () => {
    const element = mount(<Stream {...props} />);
    expect(element.find('.track')).to.have.length(2);
  });
});
