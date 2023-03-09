import React, { Component } from 'react'

import CustomSearchAndFilter from './CustomSearchAndFilter.jsx'
import SearchSummary from 'p2pu-components/dist/Courses/SearchSummary'
import DefaultNoResults from 'p2pu-components/dist/Search/DefaultNoResults'
import BrowseCourses from 'p2pu-components/dist/Courses/Browse'
import { SEARCH_PROPS } from 'p2pu-components/dist/utils/constants'


export default class SearchCourses extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="row">
        <div className="filter-sidebar sidebar col-0 col-lg-4 col-xl-3">
          <CustomSearchAndFilter
            placeholder= {SEARCH_PROPS[this.props.searchSubject].placeholder}
            {...this.props}
          />
        </div>
        <div className="col-12 col-lg-8 col-xl-9">
          <SearchSummary
            {...this.props}
          />
          <BrowseCourses
            {...this.props}
          />
          {
            this.props.isLoading &&
              <div className="loader" />
          }
        </div>
      </div>
    )
  }
}

SearchCourses.defaultProps = {
  NoResultsComponent: (props) => <DefaultNoResults {...props} />
}
