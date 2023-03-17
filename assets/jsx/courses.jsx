import React from 'react';
import { render } from 'react-dom';

import SearchProvider from 'p2pu-components/dist/Search/SearchProvider'
//import SearchCourses from 'p2pu-components/dist/Courses/SearchCourses'
import CustomSearch from './CustomSearch.jsx'

//import 'p2pu-components/dist/build.css';

const handleSelectResult = course => {
  const selectCourse = `https://learningcircles.p2pu.org/en/studygroup/create/?course_id=${course.id}`;
  window.location.href = selectCourse;
}
const elem = document.getElementById('search-courses-component');
const origin = 'https://learningcircles.p2pu.org';

render(
  <SearchProvider
    searchSubject={'courses'}
    origin={origin}
    onSelectResult={handleSelectResult}
    initialState={
      {
        languages:['en'],
        keywords: 'uganda',
      }
    }
  >
    <CustomSearch/>
  </SearchProvider>,
  document.getElementById('course-search')
);
