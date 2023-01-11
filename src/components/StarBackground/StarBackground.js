import React from 'react';
import { timeout } from '../common/Functions';
import Star from './Star/Star';
import UserFollow from './UserFollow/UserFollow';

function StarBackground() {
    const viewport_w_delimeter = window.screen.width/5;
    const viewport_h_delimeter = window.screen.height/6;

    const getX = (count) => {
        const border_1 = viewport_w_delimeter * (count - 1);
        const border_2 = viewport_w_delimeter * count;
        return Math.floor(Math.random() * (border_2 - border_1) + border_1);
    };

    const getY = (count) => {
        const border_1 = viewport_h_delimeter * (count - 1);
        const border_2 = viewport_h_delimeter * count;
        return Math.floor(Math.random() * (border_2 - border_1) + border_1);
    };

    const points = [];
    let count_x = 1;
    let count_y = 1;

    while(count_x <= 3){
        while(count_y <= 5){
            if(count_y % 2 === 0){
                points.push({x: getX(count_x), y: getY(count_y), done: true, size: "small" });
                points.push({x: getX(count_x), y: getY(count_y), done: true, size: "medium" });
                points.push({x: getX(count_x), y: getY(count_y), done: true, size: "large" });
            }
            else{
                points.push({x: getX(count_x), y: getY(count_y), done: false, size: "small" });
                points.push({x: getX(count_x), y: getY(count_y), done: false, size: "medium" });
                points.push({x: getX(count_x), y: getY(count_y), done: false, size: "large" });
            }
            count_y++;
        }
        count_y = 1;
        count_x++;
    };
    
    const refs = points.reduce((acc, value, index) => {
        acc[index] = React.createRef();
        return acc;
    }, []);

    const recreatePoint = async (index) => {
        const oldX = refs[index].current.style.offsetWidth;
        const oldY = refs[index].current.style.offsetTop;
        
        refs[index].current.style.opacity = 0;
        refs[index].current.style.offsetWidth = 0;
        refs[index].current.style.offsetTop = 0;

        await timeout(5000);

        refs[index].current.style.offsetWidth = oldX;
        refs[index].current.style.offsetTop = oldY;
        refs[index].current.style.opacity = 1;
    }

    return (
        <div className='fixed top-[95px] bottom-[95px] left-[10px] right-[20px] w-fit h-fit'>
        {
            points.map((element, index) => (
                <div ref={refs[index]} key={index} onClick={() => recreatePoint(index)}>
                    <Star
                        startX={element.x} 
                        startY={element.y}
                        startDir={element.done}
                        size={element.size}
                    />
                </div>
            ))
        }
        </div>
    );
}

export default StarBackground;