import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../store/cart/cart.hook";
import { CartItem } from "../store/cart/cart.model";

interface ICartItem {
    readonly item: CartItem;
}

export default function DeleteItemButton({ item }: ICartItem) {
    const { clearItemFromCart, cartItems } = useCart();
    return (
        <>
            <DeleteIcon onClick={() => clearItemFromCart(cartItems, item)} />
        </>
    );
}
