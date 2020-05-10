import React,{Fragment, useState} from 'react';


const PizzaCount =()=>{

const[smallPizzaData, setsmallPizzaData]= useState(0);
const[mediumPizzaData, setmediumPizzaData]= useState(0);
const[largePizzaData, setlargePizzaData]= useState(0);
const[childrenData, setchildrenData]= useState(0);
const[adultData, setadultData]= useState(0);

//customer

const addChildren =()=>{
  if(adultData>0){
    setchildrenData(childrenData+1)
    setsmallPizzaData(smallPizzaData===0)
    addSmallPizza()
  }
}

const removeChildren =()=>{
  setsmallPizzaData(smallPizzaData)
  setmediumPizzaData(mediumPizzaData)
  setlargePizzaData(largePizzaData)

  if(adultData < 0){
      setchildrenData(childrenData === 0)
  }
  if(childrenData>0){
    setchildrenData(childrenData-1)
    removeSmallPizza()
  }
  if(childrenData%2 ===0 && childrenData>0){

    removeMediumPizza()
    removeLargePizza()
    removeSmallPizza()
    addSmallAdult()
    addMediumAdult()
  }
}

const addSmallAdult =()=>{
  setsmallPizzaData(smallPizzaData+1)
}


const addAdult =()=>{
  setadultData(adultData+1)
  setmediumPizzaData(setmediumPizzaData===0)
  addMediumPizza()

}

const removeAdult =()=>{

  setsmallPizzaData(smallPizzaData)
  setmediumPizzaData(mediumPizzaData)
  setlargePizzaData(largePizzaData)

  if(adultData>0  ){
    setadultData(adultData-1)
    removeMediumPizza()
  }
  if(adultData%2 === 0 && adultData>0){

    removeLargePizza()
    addMediumAdult()
  }
}

const addMediumAdult =()=>{
  setmediumPizzaData(mediumPizzaData+1)
}


//pizza
const addSmallPizza =()=>{
  setsmallPizzaData(smallPizzaData+1)
  if(smallPizzaData>0){
    setsmallPizzaData(smallPizzaData===0)
    addMediumPizza()
  }
}

const removeSmallPizza=()=>{
  if(smallPizzaData>0){
    setsmallPizzaData(smallPizzaData-1)
  }
}

const addMediumPizza =()=>{
  setmediumPizzaData(mediumPizzaData+1)
  if(mediumPizzaData>0){
    setmediumPizzaData(mediumPizzaData===0)
    addLargePizza()
  }
}

const removeMediumPizza=()=>{
  if(mediumPizzaData>0){
    setmediumPizzaData(mediumPizzaData-1)
  }
}

const addLargePizza =()=>{
  setlargePizzaData(largePizzaData+1)
}

const removeLargePizza=()=>{
  if(largePizzaData>0){
    setlargePizzaData(largePizzaData-1)
  }
}
// limited order
const totalOrder =()=>{
  if(((smallPizzaData%2)*150)+((mediumPizzaData%2)*200)+(largePizzaData*300)> 1000){
    return `You have Crossed Maximum Order limlit of 1000`
  }
   return <div>Total: {((smallPizzaData%2)*150)+((mediumPizzaData%2)*200)+(largePizzaData*300)}

           <button type="submit" className=" btn-danger " >Submit</button>
          </div>
}




  return(

<Fragment>

<div className="container">
  <div className="heading">
    <h1>
      <span className="shopper">P</span> Pizza Cart
    </h1>
    <h2><small>Select by Product or person</small></h2>
  </div>

    <div className="cart transition is-open">
      <div className="table">

        <div className="layout-inline row th">
          <div className="col col-pro">Product</div>
          <div className="col col-price align-center ">
            Price
          </div>
          <div className="col col-qty align-center">QTY</div>
          <div className="col">Total</div>
        </div>

        <div className="layout-inline row">
          <div className="col col-pro layout-inline">
            <p>Small Pizza</p>
          </div>
          <div className="col col-price col-numeric align-center ">
            <p>150</p>
          </div>
          <div className="col col-qty layout-inline">
            <button className="qty qty-minus" onClick={removeSmallPizza}>-</button>
              <input type="numeric" value={smallPizzaData%2===0 ? 0 : smallPizzaData%2  } />
            <button  className="qty qty-plus"  onClick={addSmallPizza}>+</button>
          </div>
          <div className="col col-total col-numeric"><p> { (smallPizzaData%2)*150} </p>
           </div>
        </div>

        <div className="layout-inline row row-bg2">
          <div className="col col-pro layout-inline">
            <p>Medium Pizza</p>
          </div>
          <div className="col col-price col-numeric align-center ">
            <p>200</p>
          </div>
          <div className="col col-qty  layout-inline">
            <button className="qty qty-minus " onClick={removeMediumPizza}>-</button>
              <input type="numeric" value={mediumPizzaData%2===0 ? 0 : mediumPizzaData%2  } />
            <button className="qty qty-plus" onClick={addMediumPizza}>+</button>
          </div>
          <div className="col col-total col-numeric"><p> {(mediumPizzaData%2)*200}</p>
           </div>
        </div>

         <div className="layout-inline row">
          <div className="col col-pro layout-inline">
            <p>Large Pizza</p>
          </div>
          <div className="col col-price col-numeric align-center ">
            <p>300</p>
          </div>
          <div className="col col-qty layout-inline">
            <button className="qty qty-minus" onClick={removeLargePizza}>-</button>
              <input type="numeric" value={largePizzaData} />
            <button className="qty qty-plus" onClick={addLargePizza}> + </button>
          </div>
          <div className="col col-total col-numeric"><p> {largePizzaData*300}</p>
           </div>
        </div>

        <div className="layout-inline row th">
         <div className="col col-pro">Person</div>
        <div className="col col-qty align-center">QTY</div>
       </div>

        <div className="layout-inline row">
         <div className="col col-pro layout-inline">
           <p>Children</p>
         </div>
         <div className="col col-qty layout-inline">
           <button className="qty qty-minus" onClick={removeChildren}>-</button>
             <input type="numeric" value={childrenData}/>
           <button className="qty qty-plus" onClick={addChildren}> + </button>
         </div>
       </div>

       <div className="layout-inline row row-bg2">
         <div className="col col-pro layout-inline">
           <p>Adult</p>
         </div>
         <div className="col col-qty  layout-inline">
           <button className="qty qty-minus " onClick={removeAdult}>-</button>
             <input type="numeric" value={adultData} />
           <button className="qty qty-plus" onClick={addAdult}>+</button>
         </div>
       </div>

         <div className="tf">
               <p>{totalOrder()}</p>
         </div>
    </div>


  </div>


  </div>


</Fragment>
  )
}

export default PizzaCount;
