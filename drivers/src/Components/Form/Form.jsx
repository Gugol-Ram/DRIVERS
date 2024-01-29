import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeams, postDriver } from "../../Redux/Actions/indexActions";
import style from "./Form.module.css";

import {
  validateName,
  validateSurName,
  validateImage,
  validateNationality,
  validateDateOfBirth,
  validateDescription,
  validateTeams,
} from "./ValidateForm";

const Form = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);
  teams.sort((a, b) => a.name.localeCompare(b.name));
  const [selectedTeams, setSelectedTeams] = useState([]);

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  const imgDefault =
    "https://static.motor.es/fotos-noticias/2020/08/max-verstappen-posiblemente-mejor-piloto-f1-202069946-1597226822_1.jpg";

  const defaultValue = {
    name: "",
    surname: "",
    image: imgDefault,
    nationality: "",
    dateOfBirth: "",
    description: "",
    teams: [],
  };

  const [form, setForm] = useState(defaultValue);
  const [errors, setErrors] = useState({
    name: "Field Required",
    surname: "Field Required",
    nationality: "Field Required",
    dateOfBirth: "Field Required",
    description: "Field Required",
    teams: "Select Team(s)",
    image: "",
  });

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    let updatedForm = { ...form };
    let updatedErrors = { ...errors };

    switch (name) {
      case "name":
        validateName(value, updatedErrors);
        updatedForm.name = value;
        break;
      case "surname":
        validateSurName(value, updatedErrors);
        updatedForm.surname = value;
        break;
      case "nationality":
        validateNationality(value, updatedErrors);
        updatedForm.nationality = value;
        break;
      case "dateOfBirth":
        validateDateOfBirth(value, updatedErrors);
        updatedForm.dateOfBirth = value;
        break;
      case "description":
        validateDescription(value, updatedErrors);
        updatedForm.description = value;
        break;
      case "teams":
        validateTeams(value, updatedErrors);
        updatedForm.teams = [...updatedForm.teams, value];
        setSelectedTeams([...selectedTeams, value]);
        break;
      case "image":
        validateImage(value, updatedErrors);
        updatedForm.image = value;
        break;
      default:
        break;
    }
    setForm(updatedForm);
    setErrors(updatedErrors);
  };

  const deactivateFormButton = () => {
    let aux = true;
    for (let error in errors) {
      if (errors[error] === "") {
        aux = false;
      } else {
        aux = true;
        break;
      }
    }
    return aux;
  };
  const submitButtonText = "Post Driver!";
  const fileInputRef = useRef(null);
  const handleFileInputChange = () => {
    fileInputRef.current.click();
  };

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      alert(`Selected File: ${selectedFile.name}`);
    }
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    const transformedFormData = {
      ...form,
      teams: selectedTeams.join(", "), // Convertir auna cadena separada por comas
    };
    dispatch(postDriver(transformedFormData));
    setForm(defaultValue);
    setSelectedTeams([]);
  };

  return (
    <div className={style.formContent}>
      <form onSubmit={handlerSubmit} autoComplete="off">
        <div className={style.formColumns}>
          <div className={style.fields}>
            <label>Name: </label>
            <input
              onChange={handleFieldChange}
              type="text"
              name="name"
              placeholder="INSERT NAME"
              value={form.name}
            />
            <div className={style.errMsg}>{errors.name}</div>
            <hr />
            <label>SurName</label>
            <input
              onChange={handleFieldChange}
              type="text"
              name="surname"
              placeholder="INSERT SURNAME"
              value={form.surname}
            />
            <div className={style.errMsg}>{errors.surname}</div>
            <hr />
            <label>Nationality: </label>
            <input
              onChange={handleFieldChange}
              type="text"
              name="nationality"
              placeholder="INSERT NATIONALITY"
              value={form.nationality}
            />
            <div className={style.errMsg}>{errors.nationality}</div>
            <hr />
            <label>Date Of Birth</label>
            <input
              onChange={handleFieldChange}
              type="text"
              name="dateOfBirth"
              placeholder="INSERT DOB"
              value={form.dateOfBirth}
            />
            <div className={style.errMsg}>{errors.dateOfBirth}</div>
            <hr />
            <label>Description: </label>
            <input
              className={style.descrp}
              onChange={handleFieldChange}
              type="text"
              name="description"
              placeholder="INSERT DESCRIPTION"
              value={form.description}
            />
            <div className={style.errMsg}>{errors.description}</div>
            <hr />
            <nav className={style.teams}>
              <label>Teams(s):</label>
            </nav>
            <select
              className={style.teamBoxDefault}
              onChange={handleFieldChange}
              name="teams"
              value={form.teams}
            >
              <option className={style.teamBox} value="">
                Teams...
              </option>
              {teams.map((team) => (
                <option
                  className={style.teamOptions}
                  key={team.id}
                  value={team.name}
                >
                  {" "}
                  {team.name}
                </option>
              ))}
            </select>
            <div className={style.errMsg}>{errors.teams}</div>
            <hr />
            <div className={style.selectedTeams}>
              {selectedTeams
                .filter((value, index, self) => self.indexOf(value) === index)
                .map((selectedTeam, index) => (
                  <span key={index} className={style.selectedTeam}>
                    {selectedTeam}
                  </span>
                ))}
            </div>
            <hr />
            <label>URL Image:</label>
            <input
              onChange={handleFieldChange}
              type="text"
              name="image"
              placeholder="INSERT URL IMAGE"
              autoComplete="on"
              // value={form.image}
            />
            <div className={style.errMsg}>{errors.image}</div>
            <hr />
            <p className={style.or}>Or...</p>
            <label>Upload Image:</label>
            <input
              type="file"
              placeholder="INSERT IMAGE(ONLY png, jpeg, jpg)"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleFileSelect}
            />
            <button
              className={style.selectImage}
              onClick={handleFileInputChange}
              value={form.image}
            >
              Select File
            </button>
            <div className={style.errMsg}>{errors.image}</div>
            <hr />
            <input
              className={style.submit}
              disabled={deactivateFormButton()}
              type="submit"
              value={submitButtonText}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
