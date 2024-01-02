import { useContext, useState } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  const [storyfile, setstoryfile] = useState("");

  const { isLoading, error, data } = useQuery(["stories"], () =>
    makeRequest.get("/stories").then((res) => {
      return res.data;
    })
  );

  const addStory = (event) => {
    const storyfile = event.target.files && event.target.files[0];

    if (storyfile) {
      setstoryfile(storyfile);
      console.log("Selected File:", storyfile.name);
      console.log("Selected id:", currentUser.id);

      makeRequest.post("/stories", {img: storyfile.name});    
    }
     
  };

  

  return (
    <div className="stories">
      <div className="story">
        <img src={"/upload/" + currentUser.profilepic} alt="" />
        {/* Label to trigger file input */}
        //cha tho trigger thye???cha input browse kanr laye aa file
        <input
              type="file"
              id="filestory"
              style={{ display: "none" }}
              onChange={addStory}
            />
            <label htmlFor="filestory">
              <div className="item">
                <img src={Image} alt="" />
                <span onClick={addStory}>+</span>
              </div>
            </label>
           
           
      </div>
      
      {error
        ? "Something went wrong"
        : isLoading
        ? "Loading"
        : data.map((story) => (
            <div className="story" key={story.id}>
              <img src={"/upload/" + story.img} alt="" />
              <span>{story.name}</span>
            </div>
          ))}
    </div>
  );
};

export default Stories;
