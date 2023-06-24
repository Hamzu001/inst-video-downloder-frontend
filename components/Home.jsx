import { useState } from "react";
import Navbar from "../components/Navbar";
// import Content from "../components/Content";
import Footer from "../components/Footer";
import Spinner from "./Spinner";
import Cards from "./Cards";

export default function Home() {
  const [url, setUrl] = useState("");
  const [step, setStep] = useState(1);
  const [link, setLink] = useState("");
  const [lert, setlert] = useState();

  // const port = "http://localhost:5000";

  const downloadVideo = async (url) => {
    try {
      setUrl("");
      // console.log("download video f()");
      const e = document.createElement("a");
      e.href = url;
      e.download = "instagram.mp4";
      e.style.display = "none";
      document.body.appendChild(e);
      e.click();
      document.body.removeChild(e);
      setStep(1);
    } catch {
      window.alert("Failed to download video.");
    }
  };

  const handleClick = async () => {
    try {
      setStep(2);
      // console.log(url)
      const d_url = await fetch("/instapi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const a = await d_url.json();
      console.log(a);

      if (a.url == null) {
        setlert(
          <div
            className="alert rounded-top-5 rounded-bottom-5 text-center alert-danger"
            role="alert"
          >
            Incorrect url ! Enter correct url....
          </div>
        );
        setStep(1);
        setUrl("");
      } else {
        setlert();
        setLink(a.url);
        setStep(3);
      }
    } catch {
      window.alert("do not get video");
      setUrl("");
      setStep(1);
    }
  };

  return (
    <>
      <Navbar />
      {lert}

      <div className="container">
        <div className="  p-3 my-3 mb-5 bg-transparent rounded">
          <div className="my-3 ">
            <div className="row">
              <div>
                <div className="card-body  ">
                  <h4 className="card-title text-danger text-center">
                    Download Instagram Videos{" "}
                  </h4>
                  <p className="my-2 card-text text-danger text-center">
                    Free Online Video Downloader
                  </p>
                  <input
                    type="text"
                    name="url"
                    className="my-3 form-control align-center"
                    placeholder="Enter url here..."
                    id="url"
                    value={url}
                    onChange={(e) => {
                      setUrl(e.target.value);
                    }}
                  />
                  {step == 1 && (
                    <button
                      onClick={handleClick}
                      className="d-grid gap-2 col-4 mx-auto btn btn-outline-danger my-4"
                    >
                      Get Video
                    </button>
                  )}
                  {step == 2 && <Spinner />}
                  {step == 3 && (<>
                    <button
                      onClick={() =>
                        downloadVideo("/" + link)
                      }
                      className="d-grid gap-2 col-4 mx-auto btn btn-outline-danger my-4"
                    >
                      Download Now
                    </button>
                     <div style={{height:"400px"}} className="d-flex justify-content-center">
                     <video controls>
                       <source src={"/" + link} type="video/mp4" />
                     </video>
                   </div>
                   </>
                  )}
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      {/* <Content /> */}
      <Cards />

      <Footer />
    </>
  );
}
