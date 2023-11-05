import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Person } from "../../apiService/StarWarsService.type";
import StarWarsService from "../../apiService/StarWarsService";

type PersonPageProps = {
  setToggleSide: React.Dispatch<React.SetStateAction<boolean>>;
};

const PersonPage: FC<PersonPageProps> = (props) => {
  const { id } = useParams();
  const [person, setPerson] = useState<Person>();
  const navigate = useNavigate();
  const apiService = new StarWarsService();

  const getPerson = async () => {
    if (id) {
      const person = await apiService.fetchPerson(Number(id));
      setPerson(person);
    }
  };

  const closeSideSection = () => {
    props.setToggleSide(false);
    navigate("/");
  };

  useEffect(() => {
    getPerson();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <button onClick={closeSideSection}>CLOSE</button>
      <div>
        <h1>{person?.name}</h1>
        <span>{person?.gender}</span>
        <span>{person?.eye_color}</span>
        <span>{person?.mass}</span>
        <span>{person?.height}</span>
      </div>
    </div>
  );
};

export default PersonPage;
