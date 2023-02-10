import CartContainer from "@/src/components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../pruduct"




export default function Cart() { 
  let cartItems = useSelector(state => state.cartItems)
  const dispatch = useDispatch()
  
    return (
        <main>
          <CartContainer cart={cartItems} />
        </main>
      );
}

