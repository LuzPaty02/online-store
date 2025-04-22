import { Link } from 'react-router-dom';
import { RatingStars } from './RatingStars';
import { Product } from "../types/products.ts";
import { AddToCartButton } from "./AddToCartButton.tsx";
import { useAuth } from "../context/AuthContext.tsx";

type ProductCardProps = {
    product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
    const { user } = useAuth();
    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`} className="product-image-link">
                <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="product-image"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder-product.png';
                    }}
                />
            </Link>

            {user ?
                <div className="product-footer">
                    <AddToCartButton productId={product.id} />
                </div> :
                <div />
            }
            <div className="product-footer">
                <RatingStars rating={product.rating as number} />
            </div>
        </div>
    );
};