import React from 'react'
import { t } from 'ttag';

const ProjectFilterForm = (props) => {

  const handleChange = (scopeByProject) => {
    props.updateQueryParams({keywords: scopeByProject?"uganda":null});
  }

  return (
    <>
      <form className="filter">
        <label htmlFor="projectResources-input" className="form-label">P2PU resources</label>
        <div className="input-group">
          <div className="form-check">
            <input 
              className="form-check-input"
              name="projectResources"
              type="radio"
              checked={!Boolean(props.keywords=='uganda')}
              onChange={ e => handleChange(false) }
            />
            <label className="form-check-label" htmlFor="projectResources">
            Show all P2PU resources</label>
          </div>
          <div className="form-check">
            <input 
              className="form-check-input"
              name="projectResources"
              type="radio"
              checked={Boolean(props.keywords=='uganda')}
              onChange={ e => handleChange(true) }
            />
            <label className="form-check-label" htmlFor="projectResources">Show Uganda resources only</label>
          </div>

        </div>
      </form>
    </>
  )
}

export default ProjectFilterForm;
