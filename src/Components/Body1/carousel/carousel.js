import React from "react";
import './c.css'

const colors = [
    {
        color: "#0088FE",
        name: "dkfjgkdjhfjghdjhgb"
    },
    , {
        color: "#00888E",
        name: "dkfjgkdjhfjghdjhgb"
    }
    , {
        color: "#00885E",
        name: "dkfjgkdjhfjghdjhgb"
    }];
const delay = 2500;

function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);


    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <>
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((item, index) => (
                    <div
                        className="slide"
                        key={index}
                        style={{ backgroundColor:item.color }}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
</>
    );
}
export default Slideshow;