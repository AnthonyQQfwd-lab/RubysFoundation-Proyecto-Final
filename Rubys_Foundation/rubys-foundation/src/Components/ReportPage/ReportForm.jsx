import React from 'react'

function ReportForm() {
  return (
    <div>
        <h1>ReportForm</h1>
        {/*
            <dialog ref={dialogReports} id='reportsDialog'>
                        <button onClick={closeModalReports}>X</button>
                        <select name="problem" id="problem" value={problem} onChange={handleChangeReport}>
                            <option value="">select the most appropriate option</option>
                            <option value="Image nsfw">Image NSFW</option>
                            <option value="Inappropriate words">Inappropriate words</option>
                            <option value="Spam or misleading post">Spam or misleading post</option>
                            <option value="Fake or suspicious profile">Fake or suspicious profile</option>
                            <option value="Other">Other</option>
                        </select>
                        <label htmlFor="">description</label>
                        <input type="text" id="description" value={userDescription} placeholder="Descripción" onChange={(e) => setUserDescription(e.target.value)}/>
                    </dialog >
        */ }
    </div>
  )
}

export default ReportForm
