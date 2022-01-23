import ContentLoader from "react-content-loader";
import "./styles.css";

const CardLoader = () => (
  <div className="card-loader-container">
    <ContentLoader 
    speed={2}
    width={476}
    height={124}
    viewBox="0 0 476 124"
    backgroundColor="#f3f3f3"
    foregroundColor="#a4a2a2"
  >
    <rect x="3" y="-17" rx="3" ry="3" width="52" height="6" /> 
    <rect x="90" y="60" rx="3" ry="3" width="217" height="9" /> 
    <rect x="-3" y="37" rx="0" ry="0" width="84" height="91" /> 
    <rect x="91" y="78" rx="3" ry="3" width="217" height="9" /> 
    <rect x="92" y="95" rx="3" ry="3" width="217" height="9" /> 
    <rect x="92" y="111" rx="3" ry="3" width="217" height="9" /> 
    <rect x="92" y="42" rx="3" ry="3" width="89" height="7" />
  </ContentLoader>
  </div>
);

export default CardLoader;
