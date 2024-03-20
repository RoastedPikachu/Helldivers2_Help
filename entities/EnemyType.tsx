"use client";
import React from "react";

interface EnemyTypeProps {
    id: number;
    imagePath: string;
    rootBlockStyles: string;
    fractionType: number;
    imagePlugStyles: string;
    title: string;
}

const EnemyType: React.FC<EnemyTypeProps> = ({ id,  imagePath, rootBlockStyles, imagePlugStyles, fractionType, title }) => {
    const getSpecificScale = () => {
        if(fractionType === 2) {
            switch(id) {
                case 6:
                    return "scale-x-125";
                case 7:
                    return "scale-x-100";
                default:
                    return "scale-x-150";
            }
        }
    }

    return (
        <div className="grid justify-items-center px-[30px] py-[30px] w-full h-auto bg-[#00293a] border-2 border-[#2cc388] rounded-[10px] cursor-pointer">
            {imagePath ? (
                <img src={`${imagePath}`} alt="" className={`${rootBlockStyles} ${getSpecificScale()}`}/>
            ) : (
                <p className={`${imagePlugStyles} text-[#2cc388] text-center font-['Insignia'] font-bold`}>
                    ?
                </p>
            )}

            <p className="mt-[20px] text-[#ffffff] text-[1.75rem] text-center font-['Exo2'] font-bold">
                {title}
            </p>
        </div>
    );
};

export default EnemyType;
