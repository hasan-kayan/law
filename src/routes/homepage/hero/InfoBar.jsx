import InfoItem from "./InfoItem";
import BubbleIcon from "./../../../assets/icons/bubbleIcon.svg";
import PhoneIcon from "./../../../assets/icons/phoneIcon.svg";
import LetterIcon from "./../../../assets/icons/mailIcon.svg";
import ClockIcon from "./../../../assets/icons/clockIcon.svg";
import "./../../../css/sections/homepage/hero/InfoBar.css";

export default function InfoBar({ onScrollToSection }) {
  return (
    <div className="infoBar">
      <div className="infoSection">
        <InfoItem icon={PhoneIcon} text="+90 545 792 6215" />
        <span className="dot">•</span>
        <InfoItem icon={LetterIcon} text="umitsciftci@gmail.com" />
        <span className="dot">•</span>
        <InfoItem icon={ClockIcon} text=" Konak Mah. Adliye Cad. 4 Burdur Merkez, Burdur" />
        <span className="dot">•</span>
        <InfoItem icon={PhoneIcon} text="0248 234 15 88 " />
        
      </div>
      <button
        className="messageButton"
        onClick={() => onScrollToSection("contact")}
      >
        <img className="bubble" src={BubbleIcon} alt="sohbet simgesi" />
        Mesaj Gönder
      </button>
    </div>
  );
}
