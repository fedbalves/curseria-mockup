import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyledContentStatus } from './style';
import CourseStatus from '../CourseStatus';
import CourseStatusIcon from '../../icons/courseStatus';

class FullCourseStatus extends Component {
  render() {
    const course = this.props.content.course

    return (
      <StyledContentStatus>
        <CourseStatus width={190} height={190} main item={course} />
        {course.percent >= 0.7 && <a target="_blank" rel="noopener noreferrer" href={`https://curseria.com/certificado/${course.certified_hash}`} className="FullCourseStatus--label">Certificado</a>}
        <CourseStatusIcon className="FullCourseStatus--icon" width={40} height={46} />
      </StyledContentStatus>
    )
  }
}

FullCourseStatus = connect(
  ({content}) => ({content})
)(FullCourseStatus)

export default FullCourseStatus;
