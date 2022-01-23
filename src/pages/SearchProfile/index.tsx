import Button from "components/Button";
import "./styles.css";
import React, { useState } from "react";
import axios from "axios";
import ProfileCard from "components/ProfileCardInfo";
import CardLoader from "./CardLoader";

type FormData = {
  name: string;
};

type profileInfo = {
  avatar_url: string;
  url: string;
  location: string;
  name: string;
  followers: number;
};
const SearchProfile = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
  });

  const [profileInfo, setProfileInfo] = useState<profileInfo>();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.name}`)
      .then((response) => {
        setProfileInfo(response.data);
      })
      .catch((error) => {
        setProfileInfo(undefined);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="base-card card-search-container">
      <form onSubmit={handleSubmit}>
        <div className="top-card-search">
          <h1>Encontre um perfil Github</h1>
        </div>
        <div className="mid-card-search">
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Usuário Github"
            onChange={handleChange}
          />
        </div>
        <div className="bottom-card-search">
          <Button text="Encontrar" />
        </div>
      </form>
      {isLoading ? (
        <CardLoader />
      ) : (
        profileInfo && (
          <>
            <div>
              <ProfileCard
                avatar_url={profileInfo.avatar_url}
                url={profileInfo?.url}
                location={profileInfo?.location}
                name={profileInfo.name}
                followers={profileInfo.followers}
              />
            </div>
          </>
        )
      )}
    </div>
  );
};

export default SearchProfile;
