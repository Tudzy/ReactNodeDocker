import { PRODUCT_TITLE } from '../config/constants'
import { SYSTEM_NAME } from '../config/constants'

const Product = () => {
  document.title =  PRODUCT_TITLE + "|" + SYSTEM_NAME
  return (
   <>
    <h1>Product</h1>
   </>
  )
}

export default Product