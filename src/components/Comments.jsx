const Comments = () => (
  <section className="comments">
    <h2>Comments</h2>
    <div className="comment-section">
      <div className="comment-header">
        <span>Properties 7AR</span>
        <input type="text" placeholder="Search" />
      </div>
      {[...Array(7)].map((_, i) => (
        <div key={i} className="comment-item">
          <span className="percentage">27%</span>
          <div className="comment-content">
            <p>Design / / /</p>
            <p>
              All Admin Build Mabam... {i === 6 ? "2 days ago" : "4 hours ago"}
            </p>
            <p>
              {
                [
                  "offer rise should be big terms",
                  "home button",
                  "needs to change current tasks",
                  "labels type search bar",
                  "printed and lost",
                  "download going with banner spelled and mobile",
                  "we don’t have community yet here you",
                ][i]
              }
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default Comments;

