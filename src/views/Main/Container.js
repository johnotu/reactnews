import React, { PropTypes as T } from 'react'
import { Jumbotron } from 'react-bootstrap'
import styles from './styles.module.css'

export class Container extends React.Component {
  static contextTypes = {
    router: T.object
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance to children
      })
    }

    return (
      <div>
        <h2 className={styles.mainTitle}>
          <img src="https://s20.postimg.org/epkuhitfh/news.jpg" height="100" />
        </h2>
        {children}
      </div>
    )
  }
}

export default Container;
