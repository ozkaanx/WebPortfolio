import Image from "next/image";
import React from "react";
import { MdOutlineLocationCity, MdLocationOn } from 'react-icons/md';

import "./style.scss";


type Props = {};

const GithubCard = (props: Props) => {
    return (
        <div className="github-card">
            <div className="github-card__img">
                <Image
                    src="/avatar.png"
                    width={150}
                    height={150}
                    alt={"github"}
                ></Image>
            </div>
            <div className="github-card__header">
                <span className="github-card__header--title">Ozkan Tatar</span>
                <span className="github-card__header--username">ozkaanx</span>
            </div>
            <div className="github-card__info">
                <div className="github-card__info--country">
                    <MdOutlineLocationCity />
                    <span>Turkey</span>
                </div>
                <div className="github-card__info--city">
                    <MdLocationOn />
                    <span>Istanbul</span>
                </div>
            </div>

        </div>
    );
};


export default GithubCard;