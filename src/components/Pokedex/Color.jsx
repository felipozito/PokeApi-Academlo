import React, { useEffect } from "react";
import axios from "axios";

const Color = ({ URL, setColor, color }) => {
      useEffect(() => {
            axios.get(URL)
                  .then((res) => {
                        setColor(res.data.color);
                  })
                  .catch((err) => console.log(err));
      }, [""]);
      console.log(color);
      return <div>Color</div>;
};

export default Color;
