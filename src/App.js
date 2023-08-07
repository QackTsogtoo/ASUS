import './App.css';
import { Button, Space } from 'antd';
const App = () => {
  return (
    <Space wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
  );
} 
export default App;