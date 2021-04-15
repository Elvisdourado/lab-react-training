import React from 'react'


const BoxColor = ({r,g,b}) => {
    const color = {
        backgroundColor: `rgb(${r},${g},${b})`,
      };

      function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }

        function rgbToHex({r}, {g}, {b}) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
      const Hex =  rgbToHex({r}, {g}, {b})



    return (
        <div className='IdBox' style={color}>
            rgb({r},{g},{b})
          <div>
            {Hex}
            </div>
        </div>
    )
}




export default BoxColor