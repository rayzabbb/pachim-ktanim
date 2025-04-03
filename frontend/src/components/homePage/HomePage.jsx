import React from "react";
import "./HomePage.css";
import { useNavigate } from 'react-router-dom';
// import littleImage from '../assets/little1.webp';

// <img src={littleImage} alt="Little 1" className="full-page-image" />


const Main = () => {
  const navigate = useNavigate(); // השתמש ב-useNavigate במקום Link

  const handleStartJourney = () => {
    navigate('/login'); // נווט לעמוד login כשיש לחיצה
  };

  return (
    <div className="main-container">
      <table className="main-table">
        <tbody>
          <tr>
            <td className="image-cell">
              <img src="/little1.webp" alt="Little 1" className="full-page-image" />
            </td>
            <td className="text-cell">
              <h2>פכים קטנים: משמעותם וחיבורם בין אנשים</h2>
              <p>
                בעידן שבו כולנו נמשכים אל החדש והמהיר, "פכים קטנים" מזכירים לנו את היופי שבפשטות, בערך של חפצים קטנים שנושאים עימם זיכרונות, רגש או שימושיות. פכים קטנים יכולים להיות פריטים שכבר אינם נחוצים לנו, אך עבור מישהו אחר הם יכולים להפוך לאוצר של ממש.
              </p>
              <p>
                אתרים המיועדים להעברת חפצים באופן מאובטח ומהיר מאפשרים לנו להעניק לחפצים הללו חיים חדשים. כך, במקום לזרוק לפח, ניתן לשתף ולהעביר אותם הלאה. באמצעות שיתוף כזה, אנו לא רק מפחיתים פסולת ושומרים על הסביבה, אלא גם יוצרים חיבורים אנושיים משמעותיים.
              </p>
              <p>
                היכולת לשתף חפצים קטנים וערכיים מסמלת אכפתיות, קיימות והכרה בערך של הדברים הפשוטים. זהו חיבור בין אנשים שמבינים שלפעמים, הפרטים הקטנים הם אלה שמספרים את הסיפור הגדול ביותר.
              </p>
              <p>
                התחילו את המסע <button onClick={handleStartJourney}>בלחיצה</button>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Main;
