import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../store/cart/cart.hook";

export default function DeleteItemButton(props) {
    const { item } = props;
    const { clearItemFromCart, cartItems } = useCart();
    return (
        <>
            <DeleteIcon onClick={() => clearItemFromCart(cartItems, item)} />
        </>
    );
}
