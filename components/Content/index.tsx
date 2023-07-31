import React from "react";
import "./style.scss";
import Button from "../Ui/Button";
import Link from "next/link";

type Props = {};

const Content = (props: Props) => {
    return (
        <div className="content-wrapper">
            <div className="content-wrapper__text">
                <h1 className="content-wrapper__text--title">
                    Hi, I&apos;m <span>Ozkan</span>
                </h1>
                <p className="content-wrapper__text--bio">
                    I am a web developer living in Istanbul. I work on building (and
                    sometimes designing) websites, apps, and everything in between.
                </p>
                <span className="content-wrapper__text--art">
                &quot;Coding is where imagination turns into art&quot;
                </span>
            </div>
            <div className="content-wrapper--buttons">
                <Button>
                    <Link className="content-wrapper--buttons__link" href={''}>Email</Link>
                </Button>
                <Button>
                    <Link className="content-wrapper--buttons__link" href="https://github.com/ozkaanx" target="_blank">Github</Link>
                </Button>
            </div>
    
        </div>
    );
};

export default Content;
