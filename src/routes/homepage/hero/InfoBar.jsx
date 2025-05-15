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
        <InfoItem icon={PhoneIcon} text="+90 506 231 60 28" />
        <span className="dot">•</span>
        <InfoItem icon={LetterIcon} text="umit@gmail.com" />
        <span className="dot">•</span>
        <InfoItem icon={ClockIcon} text="Pzt-Cuma 09:00 - 16:00" />
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
