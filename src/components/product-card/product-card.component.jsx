import './product-card.styles'; 
import Button from '../button/button.component'; 

const ProductCard = ({ product }) => {
    const {name, price, imageUrl } = product; 

    <div className='product-card-container'>
        <img src={imageUrl} alt={`{name}`}/> 
        <div className='footer'>
            <span className='name'> </span>
            <span className='price'> </span>
        </div>
        <Button buttonType='inverted'> Add to card </Button>
    </div>
}

export default ProductCard; 