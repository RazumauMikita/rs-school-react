import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Person } from "../../apiService/StarWarsService.type";
import StarWarsService from "../../apiService/StarWarsService";
type PersonPageProps = {
  setToggleSide: React.Dispatch<React.SetStateAction<boolean>>;
};

const PersonPage: FC<PersonPageProps> = (props) => {
  const { id } = useParams();
  const [person, setPerson] = useState<Person>();
  const apiService = new StarWarsService();
  const [isLoad, setLoading] = useState<boolean>(false);
  const getPerson = async () => {
    if (id) {
      setLoading(true);
      const person = await apiService.fetchPerson(Number(id));
      setPerson(person);
      setLoading(false);
    }
  };

  const closeSideSection = () => {
    props.setToggleSide(false);
  };

  useEffect(() => {
    getPerson();
  }, [id]);

  return (
    <div>
      <button onClick={closeSideSection}>CLOSE</button>
      {!isLoad ? (
        <div>
          <h1>{person?.name}</h1>
          <p>Gender - {person?.gender}</p>
          <p>Eye color - {person?.eye_color}</p>
          <p>Mass - {person?.mass}</p>
          <p>Height {person?.height}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PersonPage;
