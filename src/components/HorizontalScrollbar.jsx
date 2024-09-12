import { Box } from '@mui/material';
import React, { useRef } from 'react';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';


const LeftArrow = ({ scrollContainerRef }) => {
    const handleScrollPrev = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -320,
                behavior: 'smooth',
            });
        }
    };

    return (
        <button
            onClick={handleScrollPrev}
            className="left-arrow"
            style={{ cursor: 'pointer', background: 'transparent', border: 'none' }}
        >
            <img src={LeftArrowIcon} alt="left-arrow" />
        </button>
    );
};

const RightArrow = ({ scrollContainerRef }) => {
    const handleScrollNext = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 320,
                behavior: 'smooth',
            });
        }
    };

    return (
        <button
            onClick={handleScrollNext}
            className="right-arrow"
            style={{ cursor: 'pointer', background: 'transparent', border: 'none' }}
        >
            <img src={RightArrowIcon} alt="right-arrow" />
        </button>
    );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
    const scrollContainerRef = useRef(null);

    return (
        <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
            <LeftArrow scrollContainerRef={scrollContainerRef} />
            <RightArrow scrollContainerRef={scrollContainerRef} />
            <div ref={scrollContainerRef} className="react-horizontal-scrolling-menu--wrapper" style={{ alignItems: "center", justifyContent: "center" }}>

                {Array.isArray(data) ? (
                    data.map((item) => (
                        <Box
                            key={item.id || item}
                            itemId={item.id || item}
                            title={item.id || item}
                            m="20px"
                            sx={{ display: 'inline-block', }}
                        >
                            {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
                                : <ExerciseCard exercise={item} />
                            }
                        </Box>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </Box>
    );
};

export default HorizontalScrollbar; 