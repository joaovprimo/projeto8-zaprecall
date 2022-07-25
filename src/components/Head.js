export default function Head({ img, txt }) {
    return (
      <>
        <div className="head">
          <img src={img} alt="" />
          <h1>{txt}</h1>
        </div>
      </>
    );
  }