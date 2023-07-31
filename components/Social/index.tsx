import React from "react";
import Button from "../Ui/Button";
import Link from "next/link";
import { CiTwitter, CiInstagram } from "react-icons/ci";
import "./style.scss";


type Props = {};

const SocialWrap = (props: Props) => {
  return (
    <div className="socails-wrapper__buttons">
      <Button>
        <CiTwitter />
        <Link href="https://twitter.com/ozkaan14" target="_blank">
          Twitter
        </Link>
      </Button>
      <Button>
        <CiInstagram />
        <Link href="https://www.instagram.com/ozkaan14/" target="_blank">
          Instagram
        </Link>
      </Button>
    </div>
  );
};

export default SocialWrap;
