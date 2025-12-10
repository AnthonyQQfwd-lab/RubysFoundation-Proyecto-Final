import React, {useState, useEffect} from 'react'
import { getPet } from '../../Services/ServicesPets'
import { getUser } from '../../Services/ServicesUsers';
import { createReport } from '../../Services/ServicesReports';
import { useLocation } from "react-router-dom";
import '../../Styles/ReportPage/ReportPage.css';

function ReportForm() {
  const location = useLocation();


  const [problem,setProblem] = useState("")
  const [description, setDescription] = useState("")

  const { publication } = location.state || {};
  const [pet, setPet] = useState({})
  const [user, setUser] = useState({})
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));


  const handleChangeReport = (event) => {
    const value = event.target.value;
    setProblem(value)
    console.log(value)
  };

  useEffect(() => {
    async function getData() {
      const pet = await getPet(publication.pet)
      setPet(pet)
      const user = await getUser(pet.keeper)
      setUser(user)
    }
    getData()
  }, []);

  async function makeReport() {
    const newReport = { 
      problem: problem,
      userDescription: description,
      moderatorDescription: "",
      adminDescription: "",
      dateReport: new Date().toISOString().split("T")[0],
      reportGrade: 1,
      reportedPublication: publication.id || null,
      reportedUser: user.id || null,
      reporterUser: currentUser.id,
      moderator: null,
      administrator: null
    }
    console.log(newReport)
    const report = await createReport(newReport)
    
    console.log("report creado", report)
  }

  function ver(){
    console.log(publication)
  }
  return (
    <div id="reportFormContainer">
  
      <select name="problem" id="problem" value={problem} onChange={handleChangeReport}>
        <option value="">select the most appropriate option</option>
        <option value="Image nsfw">Image NSFW</option>
        <option value="Inappropriate words">Inappropriate words</option>
        <option value="Spam or misleading post">Spam or misleading post</option>
        <option value="Fake or suspicious profile">Fake or suspicious profile</option>
        <option value="Other">Other</option>
      </select>

      <label htmlFor="">description</label>
      <input type="text" id="description" value={description} placeholder="Descripción" onChange={(e) => setDescription(e.target.value)}/>
      <button onClick={makeReport}>Send report</button>
    </div>
  )
}

export default ReportForm
