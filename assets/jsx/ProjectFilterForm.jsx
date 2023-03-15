import React from 'react'
import { t } from 'ttag';

const ProjectFilterForm = (props) => {

  const handleChange = (event) => {
    props.updateQueryParams({keywords: event.currentTarget.checked?"uganda":null});
  }

  return (
    <>
      <form className="filter">
        <label htmlFor="projectResources-input" className="form-label">Uganda resources</label>
        <div className="input-group">
          <div className="form-check">
            <input 
              className="form-check-input"
              id="projectResources-input"
              name="projectResources"
              type="checkbox"
              checked={Boolean(props.keywords=='uganda')}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="projectResources">Show curated resources for this project</label>
          </div>
        </div>
      </form>
    </>
  )
}

export default ProjectFilterForm;
