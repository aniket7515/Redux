import React from 'react'


// import React from 'react'


const Header = (props) => {
    // console.log("home",props.data);
  return (
    <>
    <div>
        <div className="add-to-cart">
            <span>{props.data.length}</span>
            <img style={{width:"125px",position:"absolute",right:"1%",top:"1%"}} src="https://media.istockphoto.com/id/1195705173/vector/add-to-cart-icon-adding-shopping-cart.jpg?s=612x612&w=0&k=20&c=lKq9JyQKD0-0wn2k-eBrBT5-Vreq0EZovVDxO4nAAgs=" alt="" />
        </div>
    </div>
    
    </>
    
  )
}

export default Header