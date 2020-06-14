import React from 'react';

import '../Styles/shop.scss';

class Shop extends React.Component{
  render(){
    return(

      <div className = "shop-container">
        <h4> Where I Shop </h4>
        <ul>
          <li><a href = "https://us.princesspolly.com/" target = "_blank">Princess Polly Boutique</a></li>
          <li><a href = "https://www.uniqlo.com/us/en/home/" target = "_blank">Uniqlo</a></li>
          <li><a href = "https://mollyandzoey.com/" target = "_blank">Molly and Zoey</a></li>
          <li><a href = "https://luckiclover.shop/" target = "_blank">Lucki Clover</a></li>
          <li><a href = "https://www.prettylittlething.us/" target = "_blank">Pretty Little Thing</a></li>
          <li><a href = "https://www.fashionnova.com/" target = "_blank">Fashion Nova</a></li>
          <li><a href = "https://us.shein.com/?ref=www&rep=dir&ret=us" target = "_blank">Shein</a></li>
          <li><a href = "https://www.zaful.com/" target = "_blank">Zaful</a></li>

        </ul>
      </div>

    );
  }
}
export default Shop;
