import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddAVideo = () => {
  const [title, setTitle] = useState(" ");
  const [url, setUrl] = useState(" ");
  const [rating, setRating] = useState(" ");
  const baseURL = "https://newfullstac.herokuapp.com/";

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const video = { title, url, rating };
    axios
      .post(baseURL, video)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.response.data));

    navigate("/");
  };

  const onClickCancelButton = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className="add-a-video">
        <form onSubmit={handleSubmit}>
          <div className="card labels">
            <label for="title">
              Title:
              <input
                className="input is-primary"
                placeholder="enter title"
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                required
                value={title}
              />
            </label>

            <label for="title">
              Url:
              <input
                className="input is-info"
                placeholder="enter url"
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                required
                value={url}
              />
            </label>

            <label for="rating">
              {" "}
              Rating
              <input
                className="input is-primary"
                placeholder="enter rating"
                onChange={(e) => setRating(e.target.value)}
                type="number"
                required
                value={rating}
              />
            </label>
          </div>

          <div className="add-video-button">
            <button
              className="button is-rounded is-success"
              onClick={handleSubmit}
            >
              submit
            </button>
            <button
              className="button is-rounded is-danger"
              onClick={onClickCancelButton}
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddAVideo;
