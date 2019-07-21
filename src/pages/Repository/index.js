import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Loading, Owner, IssueList, IssueDiv, PageButton } from './styles';
import Container from '../../components/Container';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    issueState: 'open',
    repository: {},
    issues: [],
    loading: true,
    page: 1,
  };

  async componentDidMount() {
    const { issueState } = this.state;
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: issueState,
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  changePage = async page => {
    const { issueState } = this.state;
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    this.setState({
      page,
    });
    const issues = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: issueState,
        per_page: 5,
        page,
      },
    });

    this.setState({
      issues: issues.data,
    });
  };

  changeState = async issueState => {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    this.setState({ issueState });

    const issues = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: issueState,
        per_page: 5,
        page: 1,
      },
    });

    this.setState({
      issues: issues.data,
    });
  };

  render() {
    const { repository, issues, loading, issueState, page } = this.state;

    if (loading) {
      return <Loading>Carregando...</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/"> Voltar aos Repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <IssueDiv>
          <button
            type="button"
            value={issueState === 'all'}
            onClick={() => this.changeState('all')}
          >
            All
          </button>
          <button
            type="button"
            value={issueState === 'closed'}
            onClick={() => this.changeState('closed')}
          >
            Closed
          </button>
          <button
            type="button"
            value={issueState === 'open'}
            onClick={() => this.changeState('open')}
          >
            Open
          </button>
        </IssueDiv>

        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}> {issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
        <PageButton>
          {page > 1 && (
            <button
              type="button"
              className="back"
              onClick={() => this.changePage(page - 1)}
            >
              <FaArrowLeft />
            </button>
          )}
          <button
            type="button"
            className="next"
            onClick={() => this.changePage(page + 1)}
          >
            <FaArrowRight />
          </button>
        </PageButton>
      </Container>
    );
  }
}
