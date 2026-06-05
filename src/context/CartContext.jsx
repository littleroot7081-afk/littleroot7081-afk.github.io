import { createContext, useContext, useReducer, useState } from 'react'

const CartContext = createContext(null)

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const key = `${action.payload.id}-${action.payload.size}-${action.payload.color}`
      const existing = state.items.find(i => i.key === key)
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.key === key ? { ...i, qty: i.qty + (action.payload.qty || 1) } : i
          ),
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, key, qty: action.payload.qty || 1 }],
      }
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.key !== action.payload) }
    case 'UPDATE_QTY':
      return {
        ...state,
        items: state.items.map(i =>
          i.key === action.payload.key ? { ...i, qty: action.payload.qty } : i
        ),
      }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [wishlist, setWishlist] = useState([])

  const addItem = (product, size, color, qty = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...product, size, color, qty } })
    setDrawerOpen(true)
  }

  const removeItem = (key) => dispatch({ type: 'REMOVE_ITEM', payload: key })

  const updateQty = (key, qty) => {
    if (qty < 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: key })
    } else {
      dispatch({ type: 'UPDATE_QTY', payload: { key, qty } })
    }
  }

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    )
  }

  const itemCount = state.items.reduce((sum, i) => sum + i.qty, 0)
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <CartContext.Provider value={{
      items: state.items,
      itemCount,
      subtotal,
      drawerOpen,
      setDrawerOpen,
      wishlist,
      addItem,
      removeItem,
      updateQty,
      clearCart,
      toggleWishlist,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
