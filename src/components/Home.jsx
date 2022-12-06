import React from 'react'

const Home = (props) => {
    console.log("home",props.data);
  return (
    <>
    {/* <div>
        <div className="add-to-cart">
            <span>{props.data.length}</span>
            <img style={{width:"125px",position:"absolute",right:"1%",top:"1%"}} src="https://media.istockphoto.com/id/1195705173/vector/add-to-cart-icon-adding-shopping-cart.jpg?s=612x612&w=0&k=20&c=lKq9JyQKD0-0wn2k-eBrBT5-Vreq0EZovVDxO4nAAgs=" alt="" />
        </div>
    </div> */}
    <h1>Home Componenet</h1>
    <div className='cart-wrapper' style={{border:"1px solid gray",borderRadius:"25px",width:"250px" , boxShadow:" inset 0 0 10px #000000"}}>
        <div className='img-wrapper item'  >
            <img style={{width:"250px"}} src="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg"  />
        </div>
        <div className='text-wrapper item' >
            <span style={{marginRight:"5px"}}>
                I-Phone
            </span>
            <span>
                Price: $1000.00
            </span>
        </div>
        <div className='img-wrapper item'>
            <button onClick={()=> props.addCartHandler({price:1000,namae:'i-phone'})}  style={{backgroundColor:"#c1b814",color:"white"}}>Add to cart</button>
            <button onClick={()=> props.removeToCartHandler()}  style={{backgroundColor:"#c1b814",color:"white"}}>remove to cart</button>
        </div>
    </div>
    </>
    
  )
}

export default Home