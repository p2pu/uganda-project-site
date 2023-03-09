import React from 'react'

import SearchBar from 'p2pu-components/dist/Search/SearchBar'
import OrderCoursesForm from 'p2pu-components/dist/Courses/OrderCoursesForm'
import TopicsFilterForm from 'p2pu-components/dist/Courses/TopicsFilterForm'
import LanguageFilterForm from 'p2pu-components/dist/Courses/LanguageFilterForm'
import OerFilterForm from 'p2pu-components/dist/Courses/OerFilterForm'
import FacilitatorGuideFilterForm from 'p2pu-components/dist/Courses/FacilitatorGuideFilterForm'

import ProjectFilterForm from './ProjectFilterForm.jsx'

const SearchAndFilter = (props) => {
  return (
    <nav className="navbar-expand-lg">
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#course-filters" aria-controls="course-filters">
        <span className="material-icons">filter_list</span> Search and filter
      </button>
      <div className="filter-card offcanvas offcanvas-start filters wrap p-lg-3" tabIndex="-1" id="course-filters" aria-labelledby="filters-label">
        <div className="offcanvas-header">
          <h3 className="offcanvas-title" id="filters-label">Filter Resources</h3>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="filter-fields row g-0 offcanvas-body">
          <div className="col-12">
            <SearchBar
              placeholder={props.placeholder}
              updateQueryParams={props.updateQueryParams}
              q={props.q}
            />
          </div>
          <div className="col-12 pt-3">
            <ProjectFilterForm {...props} />
          </div>
          <div className="col-12 pt-3">
            <OrderCoursesForm {...props} />
          </div>
          <div className="col-12 pt-3">
            <TopicsFilterForm {...props} />
          </div>
          <div className="col-12 pt-3">
            <LanguageFilterForm {...props} />
          </div>
          <div className="col-12 pt-3">
            <FacilitatorGuideFilterForm {...props} />
          </div>
          <div className="col-12 pt-3">
            <OerFilterForm {...props} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default SearchAndFilter;
