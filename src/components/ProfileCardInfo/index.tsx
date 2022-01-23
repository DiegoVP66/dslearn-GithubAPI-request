import "./styles.css";

type Props = {
  avatar_url: string;
  url: string;
  location: string;
  name: string;
  followers: number;
};

const ProfileCard = ({ avatar_url, url, location, name, followers }: Props) => {
  return (
    <div className="card-profile-container">
       
        <div className="img-profile-container">
          <img src={avatar_url} alt="Imagem principal" />
        </div>
      <div className="profile-info-container">
      <h1>informações</h1>
        <ul>
          <li>
            <p>
              <a href={url}>
                <span>Perfil:</span> {url}
              </a>
            </p>
          </li>
          <li>
            <p>
              <span>Seguidores:</span> {followers}
            </p>
          </li>
          <li>
            <p>
              <span>Localidade:</span> {location}
            </p>
          </li>
          <li>
            <p>
              <span>Nome:</span> {name}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
