import renderer from 'react-test-renderer';
import Titbat from '../../../components/Titbat';

test('测试 Titbat 组件', () => {
    const tree = renderer.create(<Titbat/>).toJSON();
    expect(tree).toMatchSnapshot();
})
