import { useParams } from 'react-router-dom';
import Menu from '../component/Menu';

const ProductPage = () => {
  let { id, name } = useParams();
  return (
    <div>
      <Menu />
      <p>ID:{id}</p>
      <p>name:{name}</p>
      <h1> This is Product page</h1>
    </div>
  );
};
export default ProductPage;
