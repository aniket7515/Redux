

// instead of direct calling home compoenet in applyMiddleware.js call it from container in redux  
import { connect, Connect } from "react-redux";
import Home from "../components/Home";
import { addToCart } from "../Services/Actions/actions";

const mapStateToProps=state=>({
    data: state.cardItems
    
})
const mapDispatchToProps=dispatch=>({
    addCartHandler:data=> dispatch(addToCart(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(Home)

// export default Home;

















/**
 * 
 * COntainer
 *      connect redux with react
 *      import react-redux , actions and component
 *      use mapDispatchToProps
 *      use mapStateToProps
 */     


/***
 * 
 * Complete Redux Flow
 *          Make redux wrapper in index file
 *          What is Provider
 *          Make store
 *          Check data flow in console
 *          Call Action n button click
 * 
 * 
 * 
 */