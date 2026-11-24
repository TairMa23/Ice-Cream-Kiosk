
import "./NoticeArea.css";

function NoticeArea({ totalScoops, scoopLimit }) {
  return (
    <div className="notice-area">
      {totalScoops >= scoopLimit && (
        <p>⚠️ Scoop limit reached! You cannot add more scoops.</p>
      )}
    </div>
  );
}

export default NoticeArea;
