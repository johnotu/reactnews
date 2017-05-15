import React, { PropTypes as T } from 'react';
import {Button} from 'react-bootstrap';
import AuthService from 'utils/AuthService';
import styles from './styles.module.css';
import {newsData} from '../../../utils/NewsAPI';

export class Home extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      //profile: props.auth.getProfile(),
      news: []
    }
    // props.auth.on('profile_updated', (newProfile) => {
    //   this.setState({profile: newProfile})
    // })
  }

  getNews(){
    newsData().then((news) => {
      this.setState({news});
    });
  }

  componentDidMount(){
    this.getNews();
  }

  logout(){
    this.props.auth.logout()
    this.context.router.push('/login');
  }

  render(){
    //const { profile } = this.state.profile;
    const {news} = this.state;
    return (
      <div>
        <div className={styles.header}>
          {/*<p>Welcome {profile.name}!</p>*/}
          <Button bsStyle="danger" onClick={this.logout.bind(this)}>Logout</Button>
        </div>
        <div className={styles.content}>
          {
                news.map((news, index) => (
                    <div className="col-sm-12" key={index}>
                        <a href={news.url}>
                            <p className={styles.headline}>{news.title}</p>
                            <p><span className={styles.author}>{news.author}</span> | <span className={styles.datepublished}>{news.publishedAt}</span></p>
                            <p className={styles.description}>{news.description}</p>
                        </a>
                        <hr/>
                    </div>
                ))
            }
        </div>
      </div>
    )
  }
}

export default Home;
