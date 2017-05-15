import React, { PropTypes as T } from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';
import AuthService from 'utils/AuthService';
import styles from './styles.module.css';
import {newsData} from '../../../utils/NewsAPI';


export class Login extends React.Component {
  constructor(){
    super();
    this.state = {news: []};
  }

  getNews(){
    newsData().then((news) => {
      this.setState({news});
    });
  }

  componentDidMount(){
    this.getNews();
  }

  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }
  
  render() {
    const { auth } = this.props
    const {news} = this.state
    return (
      <div>
        <div className={styles.header}>
          <ButtonToolbar className={styles.toolbar}>
            <Button bsStyle="primary" onClick={auth.login.bind(this)}>Login</Button>
          </ButtonToolbar>
        </div>
        <div className={styles.content}>
          {
                news.map((news, index) => (
                    <div className="col-sm-12" key={index}>
                        <p className={styles.headline}>{news.title}</p>
                        <p><span className={styles.author}>{news.author}</span> | <span className={styles.datepublished}>{news.publishedAt}</span></p>
                        <p className={styles.description}>{news.description}</p>
                        <hr/>
                    </div>
                ))
            }
        </div>
      </div>
    )
  }
}

export default Login;
