import React from 'react';

export default class CourseDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      course: undefined,
    };
  }
  componentDidMount() {
    this.performQuery(this.props.match.params.id);
  }
  componentDidUpdate() {}

  performQuery = (id) => {
    fetch(`http://localhost:5000/api/courses/` + id)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ course: responseData });
      })
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
  };

  render() {
    const TheCourse = (props) => {
      return (
        <div className="bounds course--detail">
          <div className="grid-66">
            <div className="course--header">
              <h4 className="course--label">Course</h4>
              <h3 className="course--title">{props.title}</h3>
              <p>By {props.name}</p>
            </div>
            <div className="course--description">
              <p>{props.description}</p>
            </div>
          </div>
          <div className="grid-25 grid-right">
            <div className="course--stats">
              <ul className="course--stats--list">
                <li className="course--stats--list--item">
                  <h4>Estimated Time</h4>
                  <h3>{props.estimatedTime}</h3>
                </li>
                <li className="course--stats--list--item">
                  <h4>Materials Needed</h4>
                  <ul>{props.materialsNeeded}</ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    };

    if (this.state.course !== undefined) {
      const course = this.state.course;
      return (
        <TheCourse
          title={course.title}
          name={course.User.firstName + ' ' + course.User.lastName}
          description={course.description}
          estimatedTime={course.estimatedTime}
          materialsNeeded={course.materialsNeeded}
        />
      );
    } else
      return (
        <div>
          <h1>No course!</h1>
        </div>
      );
  }
}
